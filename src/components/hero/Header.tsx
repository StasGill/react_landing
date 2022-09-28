import { FunctionComponent, useState } from "react";
import { Icon } from "../icon/Icon";
import { HeaderProps } from "./types";

export const Header: FunctionComponent<HeaderProps> = ({
  logo,
  navigation,
}) => {
  const [isVisible, setVisible] = useState(false);

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
      <div
        className="header__container_burger"
        onClick={() => setVisible(true)}
      >
        <Icon variant="burger" fill="white" />
      </div>
      {isVisible && (
        <div className="burger-menu">
          <div className="burger-menu_close" onClick={() => setVisible(false)}>
            <Icon variant="close" fill="white" />
          </div>
          {navigation.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setVisible(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
