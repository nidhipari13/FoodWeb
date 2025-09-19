import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Menu />
          <About />
          <Contact />
        </main>
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  )
}

export default App
