import styled from "styled-components";
import LargeLogo from "../shared/LargeLogo";
import StyledLink from "../shared/StyledLink";
import SignInForm from "./SignInForm";

export default function SignInPage(){
    return (
        <Container>
            <LargeLogo />
            <SignInForm />
            <StyledLink to="/sign-up">
                Primeira vez? Cadastre-se!
            </StyledLink>
        </Container>
    );
}


const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:0 25px 0 25px;
`;