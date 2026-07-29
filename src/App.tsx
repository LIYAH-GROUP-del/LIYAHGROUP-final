import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from '@/i18n/LangContext';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import PricingPage from '@/pages/PricingPage';
import ProjectsPage from '@/pages/ProjectsPage';
import CoursesPage from '@/pages/CoursesPage';
import BlogPage from '@/pages/BlogPage';
import BlogArticlePage from '@/pages/BlogArticlePage';
import SaaSOverviewPage from '@/pages/SaaSOverviewPage';
import SaaSProductPage from '@/pages/SaaSProductPage';
import LocationPage from '@/pages/LocationPage';
import ContactPage from '@/pages/ContactPage';
import LegalPage from '@/pages/LegalPage';

function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/saas" element={<SaaSOverviewPage />} />
            <Route path="/saas/:slug" element={<SaaSProductPage />} />
            <Route path="/fr/:slug" element={<LocationPage />} />
            <Route path="/en/:slug" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  );
}

export default App;
