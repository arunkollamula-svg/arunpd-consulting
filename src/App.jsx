import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';

// Code-split secondary routes for a lean initial bundle.
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const SolutionsPage = lazy(() => import('@/pages/SolutionsPage'));
const IndustriesPage = lazy(() => import('@/pages/IndustriesPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="solutions" element={<SolutionsPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
