
import Hero from './components/hero';
import Features from './components/features';
import About from './components/about';
import Pricing from './components/pricing';
import Contact from './components/contact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}
export default App;