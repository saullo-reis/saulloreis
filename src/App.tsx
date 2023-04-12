import './App.sass'
import { About } from './components/about/about'
import { Intro } from './components/intro/intro'
import { Header } from './components/header/header'
import { Portfolio } from './components/portfolio/portfolio'
import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
