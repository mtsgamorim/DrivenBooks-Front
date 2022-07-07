import styled from "styled-components";
import LargeLogo from "../shared/LargeLogo";
import SignUpForm from "./SignUpForm";
import StyledLink from "../shared/StyledLink";

export default function SignUpPage(){
    return (
        <Container>
            <LargeLogo />
            <SignUpForm />
            <StyledLink to="/sign-in">
                Já tem uma conta? Entre agora!
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

