import './PortfolioSlider.css';

export default function PortfolioSlider() {
  return (
    <div className='portfolioRoot'>
      <h2>Past Work</h2>
      <div className='portfolioImagesContainer'>
        <img src='./prod1.webp' />
        <img src='./prod2.webp' />
        <img src='./prod3.webp' />
        <img src='./prod4.webp' />
        <img src='./prod5.webp' />
      </div>
    </div>
  )
}
