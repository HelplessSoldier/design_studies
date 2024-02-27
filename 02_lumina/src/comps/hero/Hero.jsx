import "./Hero.css";
import Button from "../subComps/button/Button";

export default function Hero() {
  return (
    <div className="heroRoot">
      <div className="heroTextContainer">
        <h1>
          Lumina <br />
          Light Sculptures
        </h1>
        <p>
          Immerse yourself in a collection that redefines the essence of light,
          shaping not just environments but emotions. <br />Each sculpture is a unique
          journey, meticulously crafted to bring warmth, depth, and an
          unforgettable ambiance to your environment.
        </p>
        <Button href={'no'} text="Book An Appointment" />
      </div>
    </div>
  );
}
