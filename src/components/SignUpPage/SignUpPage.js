import styled from "styled-components";
import LargeLogo from "../shared/LargeLogo";
import SignUpForm from "./SignUpForm";
import StyledLink from "../shared/StyledLink";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }

  return (
    <PersonalizedBody>
      <Container>
        <LargeLogo />
        <SignUpForm />
        <StyledLink to="/sign-in">Já tem uma conta? Entre agora!</StyledLink>
        <ButtonBackHome onClick={goHome}>
          <span>Voltar para Home</span>
        </ButtonBackHome>
      </Container>
    </PersonalizedBody>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px 0 25px;
`;

const PersonalizedBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBackHome = styled.div`
  margin-top: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  span {
    text-decoration: underline;
    font-size: 12px;
  }
`;
