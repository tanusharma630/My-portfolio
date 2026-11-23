
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
// import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FFF9F5] text-[#24232B] font-sans antialiased selection:bg-[#B8B1F2] selection:text-[#24232B]">

      <Navbar />


      <main>
        <Hero />
        <About />
        {/* <TechStack /> */}
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
