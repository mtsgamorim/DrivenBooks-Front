import { useContext} from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import Button from "../shared/Button";
import ButtonBackHome from "../shared/ButtonBackHome";
import { useNavigate } from "react-router-dom";
import PersonalizedBody from "../shared/PersonalizedBody";
import { Link } from "react-router-dom";

export default function FinishOrderPage() {
    const navigate = useNavigate();
    const { userData, setUserData, sum,cart } = useContext(UserContext); //token, name, email
    function goHome() {
        navigate("/");
    }
    function finishSession(){
        const isToLogOut = window.confirm("Deseja sair?");
        if(isToLogOut){
            setUserData(null);
            navigate("/");
        }
    }

    return (
        <PersonalizedBody>
            <Container>
                <Title>Descrição do pedido</Title>
                {cart.map((product, index) => {
                    const { name } = product;
                    return (
                        <Card
                            key={index}
                            name={name}
                        />
                    );
                })}
                <Total>
                    <div>Total:</div>
                    <div>{sum}</div>
                </Total>
                <Title><p>Obrigado pela compra, {userData.name}!</p></Title>
                <Button onClick={()=>{finishSession()}}>
                    Encerrar sessão
                </Button>
                <ButtonBackHome onClick={goHome}>
                    <span>Voltar para Home</span>
                </ButtonBackHome>
            </Container>
        </PersonalizedBody>
    );
}

function Card({ name, id }) {
    const bookRoute = `/item/${id}`;
    return (
        <Section>
            <BookInfo to={bookRoute}>
                <div>
                    <h1>{name}</h1>
                </div>
            </BookInfo>
        </Section>
    );
}
const Container = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: var(--color-bg-input);
  border-radius: 4px;
  Button {
    margin-top: 20px;
    width: 300px;
  }
  span {
    color: #424e5e;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Sancreek", cursive;
  color: #424e5e;
  width: 300px;
  height: fit-content;
  font-size: 30px;
  line-height: 50px;
  flex-wrap: wrap;
  text-align:center;
  p{
    margin-top:10px;
    background-color:#3b2b46;
    color:#ffffea;
  }
`;

const Total = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: #000;
  letter-spacing: 0.06em;
`;

const Section = styled.div`
  color: #000;
  padding: 10px;
  border: 1px solid #424e5e;
  margin-bottom: 10px;
  width: 300px;
`;
const BookInfo = styled(Link)`
  text-decoration: none;
  display: flex;
  h1 {
    margin-bottom: 10px;
  }
  h2 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: #000f27;
  }
  img {
    height: 80px;
    padding-right: 10px;
  }
`;