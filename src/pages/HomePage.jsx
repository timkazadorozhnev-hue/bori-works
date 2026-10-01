import { usePageMeta } from '../hooks/usePageMeta';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Showreel from '../components/sections/Showreel';
import Team from '../components/sections/Team';
import News from '../components/sections/News';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  usePageMeta();

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Showreel />
      <Team />
      <News />
      <Contact />
    </>
  );
}
