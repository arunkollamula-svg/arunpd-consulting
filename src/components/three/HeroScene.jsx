import { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

// ─── Neural Core ─────────────────────────────────────────────────────────────
function NeuralCore() {
  const groupRef = useRef();
  const sphereRef = useRef();
  const icoRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) groupRef.current.rotation.y = t * 0.06;
    if (sphereRef.current) {
      const s = 1 + Math.sin(t * 2.4) * 0.055;
      sphereRef.current.scale.setScalar(s);
    }
    if (icoRef.current) icoRef.current.rotation.x = t * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* Pulsing core sphere */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[0.62, 64, 64]} />
        <meshStandardMaterial
          color="#1d4ed8"
          emissive="#06B6D4"
          emissiveIntensity={2.8}
          roughness={0.05}
          metalness={0.9}
        />
      </mesh>
      {/* Rotating wireframe icosahedron */}
      <mesh ref={icoRef}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.14} />
      </mesh>
      {/* Outer ghost shell */}
      <mesh>
        <sphereGeometry args={[1.35, 24, 24]} />
        <meshBasicMaterial color="#2563EB" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// ─── Holographic Ring ─────────────────────────────────────────────────────────
function HolographicRing({ radius, tube, baseRotation, color, speed, opacity = 0.5 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });
  return (
    <group rotation={baseRotation}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, tube, 8, 128]} />
        <meshBasicMaterial color={color} transparent opacity={opacity} />
      </mesh>
    </group>
  );
}

// ─── Data Node ────────────────────────────────────────────────────────────────
function DataNode({ position, color, size = 0.24, speed = 0.3 }) {
  const meshRef = useRef();
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.55;
      meshRef.current.rotation.y += delta * speed;
    }
  });
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.9}>
      <group position={position}>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[size, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2.2}
            roughness={0.15}
            metalness={0.7}
          />
        </mesh>
        {/* Node halo */}
        <mesh>
          <sphereGeometry args={[size * 2.2, 8, 8]} />
          <meshBasicMaterial color={color} transparent opacity={0.04} />
        </mesh>
      </group>
    </Float>
  );
}

// ─── Particle Stream ──────────────────────────────────────────────────────────
function ParticleStream({ from, to, color, count = 22, speed = 0.55 }) {
  const ref = useRef();
  const progress = useRef(0);
  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  const geom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  useEffect(() => () => geom.dispose(), [geom]);

  const midY = (from[1] + to[1]) / 2 + 0.6;

  useFrame((_, delta) => {
    progress.current = (progress.current + delta * speed) % 1;
    const midX = (from[0] + to[0]) / 2;
    const midZ = (from[2] + to[2]) / 2;

    for (let i = 0; i < count; i++) {
      const p = ((i / count) + progress.current) % 1;
      const mt = 1 - p;
      positions[i * 3]     = mt * mt * from[0] + 2 * mt * p * midX + p * p * to[0];
      positions[i * 3 + 1] = mt * mt * from[1] + 2 * mt * p * midY + p * p * to[1];
      positions[i * 3 + 2] = mt * mt * from[2] + 2 * mt * p * midZ + p * p * to[2];
    }
    geom.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial color={color} size={0.055} transparent opacity={0.9} depthWrite={false} sizeAttenuation />
    </points>
  );
}

// ─── Connection Line ──────────────────────────────────────────────────────────
function ConnectionLine({ from, to, color }) {
  const geom = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(...from),
      new THREE.Vector3(...to),
    ]);
  }, [from, to]);
  useEffect(() => () => geom.dispose(), [geom]);

  return (
    <line geometry={geom}>
      <lineBasicMaterial color={color} transparent opacity={0.18} />
    </line>
  );
}

// ─── Main Particle Cloud ──────────────────────────────────────────────────────
function ParticleCloud({ color, count = 1000, radiusMin = 5, radiusMax = 10, speedY = 0.03 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radiusMin + Math.random() * (radiusMax - radiusMin);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count, radiusMin, radiusMax]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speedY;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial transparent color={color} size={0.038} sizeAttenuation depthWrite={false} opacity={0.75} />
    </points>
  );
}

// ─── Scene Config ─────────────────────────────────────────────────────────────
const NODES = [
  { pos: [3.5,  1.1, -0.6], color: '#22d3ee', speed: 0.30 },
  { pos: [-3.1, 0.4,  1.1], color: '#2563EB', speed: -0.25 },
  { pos: [1.5, -2.7,  1.6], color: '#8B5CF6', speed: 0.40 },
  { pos: [-2.2, -2.1, -1.0], color: '#22d3ee', speed: -0.32 },
  { pos: [2.6,  2.6,  0.8], color: '#2563EB', speed: 0.27 },
  { pos: [-1.9, 1.9, -2.6], color: '#8B5CF6', speed: 0.44 },
];

const RINGS = [
  { radius: 2.0, tube: 0.014, baseRotation: [Math.PI / 4, 0, 0],             color: '#22d3ee', speed:  0.38, opacity: 0.55 },
  { radius: 2.9, tube: 0.010, baseRotation: [Math.PI / 3, Math.PI / 6, 0],   color: '#2563EB', speed: -0.28, opacity: 0.42 },
  { radius: 3.8, tube: 0.008, baseRotation: [0, Math.PI / 4, Math.PI / 5],   color: '#8B5CF6', speed:  0.18, opacity: 0.32 },
];

const STREAMS = [
  { from: [0, 0, 0], to: [3.5,  1.1, -0.6], color: '#22d3ee', speed: 0.55 },
  { from: [0, 0, 0], to: [-3.1, 0.4,  1.1], color: '#2563EB', speed: 0.48 },
  { from: [0, 0, 0], to: [1.5, -2.7,  1.6], color: '#8B5CF6', speed: 0.62 },
  { from: [0, 0, 0], to: [-2.2, -2.1, -1.0], color: '#22d3ee', speed: 0.50 },
  { from: [0, 0, 0], to: [2.6,  2.6,  0.8], color: '#2563EB', speed: 0.45 },
];

// ─── Scene Root ───────────────────────────────────────────────────────────────
export default function HeroScene() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Canvas
      camera={{ position: [0, 0, 13], fov: 52 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ pointerEvents: 'none' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.25} color="#0d1b4b" />
      <pointLight position={[0, 0, 0]}   intensity={6}   color="#06B6D4" distance={9}  decay={2} />
      <pointLight position={[4, 3, 2]}   intensity={2.5} color="#2563EB" distance={12} decay={2} />
      <pointLight position={[-4, -3, -2]} intensity={1.8} color="#8B5CF6" distance={10} decay={2} />

      {/* Particle clouds */}
      <ParticleCloud color={isDark ? '#38bdf8' : '#2563EB'} count={1000} radiusMin={5} radiusMax={10} speedY={0.030} />
      <ParticleCloud color="#8B5CF6" count={450} radiusMin={6} radiusMax={11} speedY={-0.018} />

      {/* Sparkle constellation */}
      <Sparkles count={80} scale={[18, 12, 12]} size={1.0} speed={0.25} color="#22d3ee" opacity={0.5} />

      {/* Connection lines */}
      {STREAMS.map((s, i) => (
        <ConnectionLine key={i} from={s.from} to={s.to} color={s.color} />
      ))}

      {/* Particle streams flowing along connections */}
      {STREAMS.map((s, i) => (
        <ParticleStream key={i} from={s.from} to={s.to} color={s.color} speed={s.speed} />
      ))}

      {/* Neural core */}
      <NeuralCore />

      {/* Holographic orbital rings */}
      {RINGS.map((r, i) => (
        <HolographicRing key={i} {...r} />
      ))}

      {/* Data nodes */}
      {NODES.map((n, i) => (
        <DataNode key={i} position={n.pos} color={n.color} speed={n.speed} />
      ))}
    </Canvas>
  );
}
