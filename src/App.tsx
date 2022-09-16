import "./App.css";
import { HeroSection } from "./components/hero/HeroSection";
import bird from "./assets/bird.jpg";
import logo from "./assets/logo.png";
import bird1 from "./assets/bird1.jpg";
import dove from "./assets/dove.jpg";
import bird2 from "./assets/bird2.jpg";
import {
  calibri_desc,
  dovl_text,
  hero_heading,
  hero_text,
  nav_array,
  owl_bird,
} from "./data";
import { Section } from "./components/section/Section";
import { Footer } from "./components/footer/Footer";

function App() {
  const onClick = () => {
    window.open("https://en.wikipedia.org/wiki/Columbidae", "_blank");
  };
  return (
    <div className="App">
      <HeroSection
        backgroundImage={bird}
        logo={logo}
        navigation={nav_array}
        hero_heading={hero_heading}
        hero_text={hero_text}
        button_text="Sign in"
        onClick={onClick}
      />
      <Section
        picture={bird1}
        header="Calibri"
        text={calibri_desc}
        id="calibri"
        button_text="See more"
        onClick={onClick}
      />
      <Section
        picture={bird2}
        header="Owl"
        text={owl_bird}
        id="owl"
        inverse_direction
        background_color="#a8d6ed"
        button_text="See more"
        onClick={onClick}
      />
      <Section
        picture={dove}
        header="Dove"
        text={dovl_text}
        id="dove"
        background_color="white"
        button_text="See more"
        onClick={onClick}
      />
      <Footer />
    </div>
  );
}

export default App;
