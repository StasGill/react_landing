import { FunctionComponent } from "react";
import { SectionProps } from "./types";
import classNames from "classnames";
import ScrollAnimation from "react-animate-on-scroll";
import "./styles.scss";

export const Section: FunctionComponent<SectionProps> = ({
  picture,
  header,
  text,
  id,
  inverse_direction,
  background_color,
  button_text,
  onClick,
}) => {
  return (
    <div
      className={classNames("section_container", {
        reverse: inverse_direction,
      })}
      id={id}
      style={{
        backgroundColor: background_color,
      }}
    >
      <div
        className="section_container__image"
        style={{ backgroundImage: `url(${picture})` }}
      >
        {/* <img src={picture} alt={picture} /> */}
      </div>
      <div className="section_container__text">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOnce={false}
          initiallyVisible
          delay={100}
        >
          <h2>{header}</h2>
          <p>{text}</p>
          {button_text && <button onClick={onClick}>{button_text}</button>}
        </ScrollAnimation>
      </div>
    </div>
  );
};
