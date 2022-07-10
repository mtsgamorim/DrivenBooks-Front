import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";


export default function UserDisplay() {
  const { userData } = useContext(UserContext);
  return (
    <DisplayName>
      <div>
        <span>
          <div>Bem vindo,</div>
          <div>{userData.name}</div> 
        </span>
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
    margin-left:80px;
  }
  ion-icon {
    font-size: 30px;
    margin-left: 18px;
  }
  @media (max-width: 767px) {
    width:100%;
    margin:0px;
    padding-left:40px;
    div:last-child{
      padding-bottom:20px;
    }
    span{
      font-size:16px;
      flex-wrap:wrap;
      max-height:100%;
      text-align:center;
    }
  }
`;

const StyledLink = styled(Link)`
  color:var(--color-bg-input);
  @media (max-width: 767px) {
    width:100%;
  }
`;
