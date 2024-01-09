import Bio from './components/Bio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <main>
      
      <Navbar/>
      <Landing/>
      <Bio/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </main>
  )
}
