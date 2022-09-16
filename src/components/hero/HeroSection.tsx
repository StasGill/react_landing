import { FunctionComponent } from "react";
import { Header } from "./Header";
import "./styles.scss";
import { HeroSectionProps } from "./types";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export const HeroSection: FunctionComponent<HeroSectionProps> = ({
  backgroundImage,
  logo,
  navigation,
  hero_heading,
  hero_text,
  button_text,
  onClick,
}) => {
  return (
    <div
      className="hero_section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <Header logo={logo} navigation={navigation} />
        <div className="information">
          <AnimationOnScroll
            animateIn="fadeIn"
            animateOnce={false}
            initiallyVisible
            delay={100}
          >
            <h1>{hero_heading}</h1>
            <p>{hero_text}</p>
            <button onClick={onClick}>{button_text}</button>
          </AnimationOnScroll>
        </div>
      </div>
    </div>
  );
};
