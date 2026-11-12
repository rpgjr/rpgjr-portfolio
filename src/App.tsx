import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { HowIWork } from './components/HowIWork'
import { IconSprite } from './components/Icon'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export default function App() {
  return (
    <>
      <Background />
      <IconSprite />
      <div className="wrap">
        <Nav />
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <HowIWork />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
