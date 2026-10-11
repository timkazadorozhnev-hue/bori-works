import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  usePageMeta();

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Team />
      <Contact />
    </>
  );
}
