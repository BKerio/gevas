import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import ServiceDetails from '@/pages/ServiceDetails';
import Projects from '@/pages/Projects';
import ProjectDetails from '@/pages/ProjectDetails';
import Team from '@/pages/Team';
import Careers from '@/pages/Careers';
import Testimonials from '@/pages/Testimonials';
import News from '@/pages/News';
import BlogDetails from '@/pages/BlogDetails';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import Quote from '@/pages/Quote';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:articleId" element={<BlogDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
