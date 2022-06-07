import classes from "./App.module.css";
import Navbar from "./NavbarComponents/Navbar";
import HeroImage from "./HeroImage";
import MainContent from "./NavbarComponents/MainContent";
import FooterLogos from "./FooterLogos";

function App() {
  return (
    <div className={classes.background}>
      <Navbar />
      <div className={classes['desktop-version']}>
        <HeroImage />
        <MainContent />
        <FooterLogos />
      </div>
    </div>
  );
}

export default App;
