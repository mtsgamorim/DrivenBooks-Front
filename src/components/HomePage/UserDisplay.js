import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";


export default function UserDisplay() {
  const { userData } = useContext(UserContext);
  return (
    <DisplayName>
      <div>
        <span className="Desktop">
          <div>Bem vindo,</div>
          <div>{userData.name}</div> 
        </span>
        <span className="Mobile">
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
  /* span {
    font-size: 26px;
    margin-left:80px;
  } */
  .Mobile{
    display:none;
  }
    
  }
  ion-icon {
    font-size: 30px;
    margin-left: 18px;
  }
  @media (max-width: 767px) {
    .Desktop{
      display:none;
    }
    .Mobile{
      display:initial;
      display:inline-block;
    }
    div{
    width:100%;
    margin:0px;
    padding-left:40px;
    div:first-child{
      display:flex;
      flex-direction:row;
    }
    div:last-child{
      padding-bottom:10x;
    }
    
    span{
      font-size:16px;
      max-height:100%;
      text-align:start;
    }
  }
`;

const StyledLink = styled(Link)`
  color:var(--color-bg-input);
  @media (max-width: 767px) {
    width:100%;
  }
`;
