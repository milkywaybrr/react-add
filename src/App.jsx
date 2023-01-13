import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <h1>Абоба</h1>
      <p>Pharagraph</p>
      <Footer />
    </div>
  )
}

export default App
