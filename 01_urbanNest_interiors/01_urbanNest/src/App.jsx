import './App.css'
import Header from "./sections/header/Header.jsx";
import Hero from "./sections/hero/Hero.jsx";
import Services from "./sections/services/Services.jsx";
import Testimonials from "./sections/testimonials/Testimonials.jsx";
import Contact from "./sections/contact/Contact.jsx";
import Footer from "./sections/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      <div className='scaleIndicator'></div>
    </>
  )
}

export default App
