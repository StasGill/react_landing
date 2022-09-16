import { MouseEventHandler } from "react";

interface Owner {
  id: string;
  title: string;
}

export type HeroSectionProps = {
  backgroundImage: string;
  logo: string;
  navigation: Array<Owner>;
  hero_heading: string;
  hero_text: string;
  button_text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type HeaderProps = {
  logo: string;
  navigation: Array<{
    id: string;
    title: string;
  }>;
};
