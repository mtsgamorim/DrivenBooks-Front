import styled from "styled-components";
import LargeLogo from "../shared/LargeLogo";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

export default function Checkout(){
    const navigate = useNavigate();
    const { userData } = useContext(UserContext);
    function finishSession(){
        const isToLogOut = window.confirm("Deseja sair?");
        if(isToLogOut){
            navigate("/");
        }
    }
    return (
        <PersonalizedBody>
            <Container>
                <LargeLogo />
                <Head>
                    <User>Olá, {userData.name}!</User>
                    <Icon>
                        <ion-icon onClick={()=>{finishSession()}} name="log-out"></ion-icon>
                    </Icon>
                </Head>
                <CheckoutForm />
            </Container>
        </PersonalizedBody>
    );
}

const Container = styled.div`
    width:600px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:250px; 
    
    
    
`;

const Head = styled.div`
    min-width:250px;
    width:fit-content;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: #424e5e;
    background-color:var(--color-bg-input);
    padding:10px;
    border-radius:4px;
`;
const PersonalizedBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const User = styled.div`

`;

const Icon = styled.div`
    font-size:30px;
    display:flex;
    justify-content:flex-end;
    cursor: pointer;
`;