import { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";



export default function Cart(){
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
    },[cart,setCart]);
   
    useEffect(() => { 
        function sumProducts(){
            let total=0;
            cart.map((product) => {return total += product.price});
            setSum(total);
        }
        sumProducts();
        
      });

    return (
    <PersonalizedBody>
        <Container>
            <Title>Carrinho de compras</Title>
            {cart.map((product,index)=>{
                
                const {name, image, price } = product;
                return (
                    <Card key = {index} name= {name} image={image} price={price} />
                )
            })}
            <Total>
                <div>Total:</div> 
                <div>{sum}</div>
            </Total>
        </Container>
    </PersonalizedBody>
    );
}

function Card ({ name, image, price}){
    return(
        <Section>
             <BookInfo>
              <img src={image} alt={name} />
              <div>
                <h1>{name}</h1>
                <h2>{price}</h2>
              </div>
            </BookInfo>
        </Section>
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

const Title = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: 'Sancreek', cursive;
    color:#FFF;
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
    border: 1px solid grey;
    padding:10px;
    background-color: var(--color-bg-input);
    margin-bottom:10px;
`;
const BookInfo = styled.div`
    display:flex;
    h1{
        margin-bottom:10px;
    }
    h2{
        font-weight:500;
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
 color:#000;
`;