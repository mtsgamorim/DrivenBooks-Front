import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LoginMenu() {
  const navigate = useNavigate();

  function signInPage() {
    navigate("/sign-in");
  }

  // function signUpPage() {
  //   navigate("/sign-up");
  // }

  return (
    <Menu>
      {/* <div onClick={signInPage}>
        <span>Login</span>
      </div>
      <span> / </span>
      <div onClick={signUpPage}>
        <span>Cadastrar</span>
      </div> */}
      <div onClick={signInPage}>
        <span>
          <ion-icon name="log-in"></ion-icon>
        </span>
      </div>
    </Menu>
  );
}

const Menu = styled.div`
  display: flex;
  margin-right: 80px;
  span {
    font-size: 36px;
    cursor: pointer;

    /* :first-child {
      margin-right: 10px;
      cursor: pointer;
      :hover {
        color: blue;
      }
    }
    :last-child {
      margin-left: 10px;
      cursor: pointer;
      :hover {
        color: blue;
      } */
    }

  @media (max-width: 767px) {
    width:100%;
    margin:0px;
    padding-left:155px;
    span{
      font-size:40px;
    }
  }
`;
