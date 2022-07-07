import styled from "styled-components";
import { useContext } from "react";

import LargeLogo from "../shared/LargeLogo";
import LoginMenu from "../HomePage/LoginMenu";
import UserDisplay from "../HomePage/UserDisplay";

import UserContext from "../../contexts/UserContext";

export default function Header() {
  const { userData } = useContext(UserContext);
  return (
    <Container>
      <LogoBox>
        <LargeLogo />
      </LogoBox>
      {userData ? <UserDisplay /> : <LoginMenu />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: #a795a5;
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoBox = styled.div`
  margin-left: 80px;
`;