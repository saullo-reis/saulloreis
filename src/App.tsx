import './App.sass'
import { About } from './components/about/about'
import { Intro } from './components/intro/intro'
import { Header } from './components/header/header'
import { Portfolio } from './components/portfolio/portfolio'
import { Contact } from './components/contact/contact'

function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
