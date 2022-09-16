import { MouseEventHandler } from "react";
export type SectionProps = {
  picture: string;
  header: string;
  text: string;
  id: string;
  inverse_direction?: boolean;
  background_color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  button_text?: string;
};
