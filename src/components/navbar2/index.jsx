import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Button2 } from "../button2";
import { Button3 } from "../button3";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
import { render } from "@testing-library/react";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const Seperator = styled.div`
  min-height: 35%;
  width: 1px;
  background-color: #fff;
`;

export function Navbar2(props) {
  const { useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        <Link to="/upload">
          <Button size={11}>Upload</Button>
        </Link>
        {!isMobile && <Marginer direction="horizontal" margin={18} />}
        {!isMobile && <Seperator />}
        <Marginer direction="horizontal" margin={10} />
        <Marginer direction="horizontal" margin={8} />
        <Link to="/">
            <Button2 size={11}>Logout</Button2>
        </Link>
      </AccessibilityContainer>
    </NavbarContainer>
  );
  //render();
}
