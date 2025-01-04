import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlights />
        <Features />
        <HowItWorks />
      </main>
    </>
  )
}

export default App
