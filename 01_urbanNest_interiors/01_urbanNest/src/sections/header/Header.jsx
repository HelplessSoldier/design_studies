import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLogoContainer">
        <img className="headerLogo" src="./icons/logo_path.svg" />
        <p className="headerLogoText">UrbanNest</p>
      </div>
      <div className="headerNav">
        <p>portfolio</p>
        <p>services</p>
        <p>about</p>
      </div>
    </div>
  );
}
