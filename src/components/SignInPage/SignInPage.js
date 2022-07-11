import styled from "styled-components";
import LargeLogo from "../shared/LargeLogo";
import StyledLink from "../shared/StyledLink";
import SignInForm from "./SignInForm";
import PersonalizedBody from "../shared/PersonalizedBody";
import ButtonBackHome from "../shared/ButtonBackHome";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();
  function goHome() {
    navigate("/");
  }

  return (
    <PersonalizedBody>
      <Container>
        <LargeLogo />
        <SignInForm />
        <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
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


