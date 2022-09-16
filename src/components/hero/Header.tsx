import { FunctionComponent } from "react";
import { HeaderProps } from "./types";

export const Header: FunctionComponent<HeaderProps> = ({
  logo,
  navigation,
}) => {
  return (
    <div className="header__container">
      <div className="logo">
        <img src={logo} alt={logo} />
      </div>
      <div className="header__container_navigation">
        {navigation.map((item) => (
          <a href={`#${item.id}`} key={item.id}>
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};
