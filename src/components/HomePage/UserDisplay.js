import styled from "styled-components";
import { useContext} from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";


export default function UserDisplay() {
  const { userData } = useContext(UserContext);
  return (
    <DisplayName>
      <div>
        <span>Bem vindo, {userData.name}</span>
      </div>
      <StyledLink to="/cart">
        <ion-icon name="cart-outline"></ion-icon>
      </StyledLink>
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
  @media (max-width: 767px) {
    width:100%;
    margin:0px;
    padding-left:40px;
    span{
      font-size:16px;
    }
  }
`;

const StyledLink = styled(Link)`
  color:var(--color-bg-input);
  @media (max-width: 767px) {
    width:100%;
  }
`;
