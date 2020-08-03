import React from "react";
import NavWrapper from "./NavWrapper";
import Logo from "./Logo";
import TogglerBtn from "./TogglerBtn";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <header>
      <NavWrapper>
        <Logo />
        <TogglerBtn />
        <NavLinks />
      </NavWrapper>
    </header>
  );
}
export default Header;
