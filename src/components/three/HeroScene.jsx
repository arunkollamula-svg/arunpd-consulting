import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

// A drifting cloud of particles — the "cloud infrastructure" backdrop.
function ParticleField({ color }) {
  const ref = useRef();
  const count = 1600;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (r * Math.sin(phi) * Math.sin(theta)) * 0.6;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.04;
    ref.current.rotation.x += delta * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={color}
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

// Floating AI "nodes" — wireframe geometry that gently bobs.
function AINode({ position, color, geometry = 'ico', scale = 1 }) {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.2;
      mesh.current.rotation.y += delta * 0.15;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry === 'ico' ? (
          <icosahedronGeometry args={[1, 0]} />
        ) : (
          <octahedronGeometry args={[1, 0]} />
        )}
        <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const { theme } = useTheme();
  const particleColor = theme === 'dark' ? '#38bdf8' : '#2563EB';
  const nodeColor = '#06B6D4';
  const accent = '#2563EB';

  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.6} />
      <ParticleField color={particleColor} />
      <AINode position={[-4, 1.6, 0]} color={nodeColor} scale={0.9} />
      <AINode position={[4.2, -1.2, -1]} color={accent} geometry="octa" scale={1.1} />
      <AINode position={[2.6, 2.4, 1]} color={nodeColor} geometry="octa" scale={0.6} />
      <AINode position={[-3, -2.2, 1.5]} color={accent} scale={0.7} />
    </Canvas>
  );
}
