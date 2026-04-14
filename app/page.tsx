import Nav from './components/Nav';
import Hero from './components/Hero';
import Pain from './components/Pain';
import Stats from './components/Stats';
import Sectors from './components/Sectors';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import ChatWidget from './components/ChatWidget';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Pain />
        <Stats />
        <Gallery />
        <Sectors />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
