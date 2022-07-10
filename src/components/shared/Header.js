import styled from "styled-components";
import { useContext } from "react";

import LargeLogo from "../shared/LargeLogo";
import SmallLogo from "../shared/SmallLogo";
import LoginMenu from "../HomePage/LoginMenu";
import UserDisplay from "../HomePage/UserDisplay";

import UserContext from "../../contexts/UserContext";

export default function Header() {
  const { userData } = useContext(UserContext);
  return (
    <Container>
      <TopBarDesktop>
        <LogoBox>
          <LargeLogo />
        </LogoBox>
        {userData ? <UserDisplay /> : <LoginMenu />}
      </TopBarDesktop>
      <TopBarMobile>
        <LogoBox>
          <SmallLogo />
        </LogoBox>
        {userData ? <UserDisplay /> : <LoginMenu />}
      </TopBarMobile>

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height: 65px;
  width: 100%;
  background-color: #a795a5;
  position: fixed;
  top: 0;
  left: 0;
  @media (max-width: 767px) {
    width:100%;
  }
`;

const LogoBox = styled.div`
  margin-left: 80px;
`;

const TopBarDesktop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;
  @media (max-width:767px) {
    display:none;
  }
`;

const TopBarMobile = styled.div`
  display:none;
  @media (max-width:767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;