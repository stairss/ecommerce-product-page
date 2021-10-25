import React from "react";
import { HeaderContainer } from "./HeaderElements";
import Icons from "./Icons/Icons";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import Title from "./Title/Title";

const Header = () => {
  return (
    <HeaderContainer>
      <Menu />

      <Title />
      <Nav />
      <Icons />
    </HeaderContainer>
  );
};

export default Header;
