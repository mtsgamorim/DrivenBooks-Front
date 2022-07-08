import styled from "styled-components";
import { useContext} from "react";

import UserContext from "../../contexts/UserContext";

export default function UserDisplay() {
  const { userData } = useContext(UserContext);
  return (
    <DisplayName>
      <div>
        <span>Bem vindo, {userData.name}</span>
      </div>
      <div>
        <ion-icon name="cart-outline"></ion-icon>
      </div>
    </DisplayName>
  );
}

const DisplayName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 80px;
  span {
    font-size: 28px;
  }
  ion-icon {
    font-size: 30px;
    margin-left: 18px;
  }
`;
