import './MainPage.css';
import Header from './header/Header.jsx';
import Hero from './hero/Hero.jsx';
import PortfolioSlider from './portfolio/PortfolioSlider.jsx';
import Footer from './footer/Footer.jsx';

export default function MainPage() {
  return (
    <div className='mainPageRoot'>
      <Header />
      <Hero />
      <PortfolioSlider />
      <Footer />
    </div>
  )
}
