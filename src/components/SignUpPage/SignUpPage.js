import styled from "styled-components";
import LargeLogo from "../shared/LargeLogo";
import SignUpForm from "./SignUpForm";
import StyledLink from "../shared/StyledLink";

export default function SignUpPage() {
  return (
    <PersonalizedBody>
      <Container>
        <LargeLogo />
        <SignUpForm />
        <StyledLink to="/sign-in">Já tem uma conta? Entre agora!</StyledLink>
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
