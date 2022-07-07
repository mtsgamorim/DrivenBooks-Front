import styled from "styled-components";
import { useContext, useState } from "react";

import Header from "../shared/Header";
import LargeLogo from "../shared/LargeLogo";
import LoginMenu from "./LoginMenu";
import UserDisplay from "./UserDisplay";

import UserContext from "../../contexts/UserContext";

export default function HomePage() {
  const { userData } = useContext(UserContext);
  return (
    <Header>
      <LogoBox>
        <LargeLogo />
      </LogoBox>
      {userData ? <UserDisplay /> : <LoginMenu />}
    </Header>
  );
}

const LogoBox = styled.div`
  margin-left: 80px;
`;
