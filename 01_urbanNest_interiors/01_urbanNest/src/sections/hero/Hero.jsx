import "./Hero.css";

export default function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroTextContainer">
        <div className="heroText">
          <h1>
            UrbanNest Interiors is committed to eco-friendly and sustainable
            design practices.
          </h1>
          <h2>
            We believe in innovative and unique design solutions that reflect the
            individuality of each client and space. While building strong
            connections within the community and supporting local artisans.
          </h2>
        </div>
      </div>
      <img className="heroImage" src="./images/portfolio_02_raw.jpg" />
    </div>
  );
}
