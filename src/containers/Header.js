import React from "react";
import styled from "styled-components";
import { Link } from "../components/Button";
import { Anchor } from "../components/typography";

import logo from "../assets/images/logo.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function DinoHeader() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="Logo" />
      <div style={{ display: "flex", alignItems: "center" }}>
        <Anchor href="#">The Story</Anchor>
        <Anchor href="#">Contact Us</Anchor>
        <Anchor href="#">About Us</Anchor>
        <Link href="#sectionTwo">ADOPT THE DINO</Link>
      </div>
    </HeaderWrapper>
  );
}
