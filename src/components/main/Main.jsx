import { Footer } from '../footer/Footer';
import { About } from './about/About';
import Contact from './contact/Contact';
import { Hero } from './hero/Hero';
import { Projects } from './projects/Projects';

export const Main = () => {
  return (
    <main className='main'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
