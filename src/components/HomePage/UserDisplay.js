import styled from "styled-components";
import { useContext, useState } from "react";

import UserContext from "../../contexts/UserContext";

export default function UserDisplay() {
  const { userData } = useContext(UserContext);
  return (
    <DisplayName>
      <span>Bem vindo, {userData.name}</span>
    </DisplayName>
  );
}

const DisplayName = styled.div`
  margin-right: 80px;
  span {
    font-size: 28px;
  }
`;
