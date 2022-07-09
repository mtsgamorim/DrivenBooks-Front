import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Cart(){
    const navigate = useNavigate();
    const {userData} = useContext(UserContext); //token, name, email
    const [sum,setSum] = useState(0);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        async function getAxios(){
            try {
              const response = await axios.get("https://store-bookstore.herokuapp.com/cart", {
                headers: {
                  "Authorization": `Bearer ${userData.token}`
                }
              });
              setCart(response.data);
              console.log(response.data);
            } catch (error) {
              alert("Erro ao buscar produtos, tente novamente!");
              console.log(error.response);
            }
        }
      
        getAxios();
    },[setCart]);
   
    useEffect(() => { 
        function sumProducts(){
            let total=0;
            cart.map((product) => {return total += product.price});
            total= total.toFixed(2).replace(".",",");
            setSum(total);
        }
        sumProducts();
        
    });


    return (
    <PersonalizedBody>
        <Container>
            <Title>Carrinho de compras</Title>
            {cart.map((product,index)=>{
                
                const {name, image, price, id } = product;
                return (
                    <Card key = {index} name= {name} image={image} price={price} id={id} />
                )
            })}
            <Total>
                <div>Total:</div> 
                <div>{sum}</div>
            </Total>
            <Button onClick={()=> navigate("/checkout")}>FINALIZAR A COMPRA</Button>
        </Container>
    </PersonalizedBody>
    );
}

function Card ({ name, image, price, id}){
    const bookRoute = `/item/${id}`;
    return(
        <Section>
             <BookInfo to={bookRoute}>
              <img src={image} alt={name} />
              <div>
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
            </BookInfo>
            <Icon>
                ICON_DEL
            </Icon>
        </Section>
    );
}

const Container = styled.div`
    margin-top:350px;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    background-color:var(--color-bg-input);
    border-radius:4px;
    Button{
        margin-top:20px;
        width:300px;
    }
`;

const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Sancreek', cursive;
    color:#424e5e;
    width: 300px;
    height: fit-content;
    font-size: 30px;
    line-height: 50px;
    flex-wrap:wrap;
`;

const PersonalizedBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section = styled.div`
    color:#000;
    padding:10px;
    border: 1px solid #424e5e;
    margin-bottom:10px;
    width: 300px;
    
`;

const Icon = styled.div`
    align-items:flex-end;
    display:flex;
    justify-content:flex-end;
`;
const BookInfo = styled(Link)`
    text-decoration:none;
    display:flex;
    h1{
        margin-bottom:10px;
    }
    h2{
        font-weight:500;
        margin-bottom:10px;
    }
    div{
        display:flex;
        flex-direction:column;
        align-items:flex-end;
        color: #000f27;
        
    }
    img{
        height:80px;
        padding-right:10px;
    }
`;

const Total = styled.div`
    width:300px;
    display:flex;
    justify-content: space-between;
    font-weight:700;
    /* color: #424e5e; */
    color:#000;
    letter-spacing: 0.06em;
`;