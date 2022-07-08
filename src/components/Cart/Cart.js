// import { useContext, useState, useEffect } from "react";
// import UserContext from "../../contexts/UserContext";
import styled from "styled-components";
// import axios from "axios";
import { useState, useEffect } from "react";


export default function Cart(){
    // const {userData} = useContext(UserContext); //token, name, email
    const [sum,setSum] = useState(0);
    const [cart, setCart] = useState([
        {
        "_id": "62c72d6a1dbcd3b4793acfd1",
        "id": 0,
        "name": "Harry Potter e a pedra filosofal",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81ibfYk4qmL.jpg",
        "price": 22.9,
        "type": "Aventura",
        "description": "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo."
      },
      {
        "_id": "62c72d6a1dbcd3b4793acfd1",
        "id": 0,
        "name": "Harry Potter e a pedra filosofal",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81ibfYk4qmL.jpg",
        "price": 22.9,
        "type": "Aventura",
        "description": "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo."
      }
    ]);
    // useEffect(()=>{
    //     async function getAxios(){
    //         try {
    //           const response = await axios.get("https://store-bookstore.herokuapp.com/cart", {
    //             headers: {
    //               "Authorization": `Bearer ${userData.token}`
    //             }
    //           });
    //           setCart(response.data);
    //         } catch (error) {
    //           alert("Erro ao buscar produtos, tente novamente!");
    //           console.log(error.response);
    //         }
    //     }
      
    //     getAxios();
    // },[userData.token]);
   
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