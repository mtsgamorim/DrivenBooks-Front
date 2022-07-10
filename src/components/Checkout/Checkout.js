import styled from "styled-components";
import ButtonBackHome from "../shared/ButtonBackHome";
import PersonalizedBody from "../shared/PersonalizedBody";
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
    function goHome() {
        navigate("/");
      }
    return (
        <PersonalizedBody>
            <CentralizedStyle>
                <Container>
                    <Title>Checkout</Title>
                    <Head>
                        <User>Olá, {userData.name}!</User>
                        <Icon>
                            <ion-icon onClick={()=>{finishSession()}} name="log-out"></ion-icon>
                        </Icon>
                    </Head>
                    <CheckoutForm />
                    <ButtonBackHome onClick={goHome}>
                        <span>Voltar para Home</span>
                    </ButtonBackHome>
                </Container>
            </CentralizedStyle>
        </PersonalizedBody>
    );
}

const CentralizedStyle = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:#424e5e;
    padding:25px;
`;

// const Container = styled.div`
//     /* width:600px; */
//     height: fit-content;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     margin-top:250px; 
    
    
    
// `;

const Container = styled.div`
  width: fit-content;
  width:300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 25px 0 25px;
  border-radius: 4px;
  Button {
    margin-top: 20px;
    width: 300px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  color: var(--color-bg-input);
  width: 300px;
  height: fit-content;
  font-size: 30px;
  line-height: 50px;
  flex-wrap: wrap;
`;

const Head = styled.div`
    
    width:100%;
    height:fit-content;
    flex-wrap:wrap;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color: #424e5e;
    background-color:var(--color-bg-input);
    padding:20px;
    border-radius:4px;
`;
// const PersonalizedBody = styled.div`
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const User = styled.div`
`;

const Icon = styled.div`
    font-size:30px;
    display:flex;
    justify-content:flex-end;
    cursor: pointer;
`;