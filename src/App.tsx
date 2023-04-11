import './App.sass'
import { About } from './about/about'
import { Intro } from './intro/intro'
import { Header } from './header/header'
import { Portfolio } from './portfolio/portfolio'
function App() {

  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <Portfolio/>
    </>
  )
}

export default App
