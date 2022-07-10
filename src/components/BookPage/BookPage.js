import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";

import Header from "../shared/Header";
import UserContext from "../../contexts/UserContext";

export default function BookPage() {
  const { userData } = useContext(UserContext);

  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  function goingSignIn() {
    navigate("/sign-in");
  }

  function goHome() {
    navigate("/");
  }

  function adicionaAoCarrinho() {
    const config = {
      headers: { Authorization: `Bearer ${userData.token}` },
    };
    const body = {
      id: id,
      email: userData.email,
    };
    const promise = axios.post(
      "https://store-bookstore.herokuapp.com/cart",
      body,
      config
    );
    promise.then(() => {
      alert("Item adicionado ao carrinho!");
    });
    promise.catch((err) => {
      alert("Error ao adicionar item");
    });
  }

  useEffect(() => {
    const promise = axios.get(
      `https://store-bookstore.herokuapp.com/book/${id}`
    );

    promise.then((res) => {
      setBook(res.data);
    });
    promise.catch((err) => {
      console.log("Error na rota get de /products");
    });
  });

  return (
    <>
      <Header />
      <MarginHeader />
      {book ? (
        <Content>
          <Flex>
            <BookInfo>
              <img src={book.image} alt={book.name} />
              <h1>{book.name}</h1>
              <h2>R$ {book.price.toFixed(2).replace(".", ",")}</h2>
            </BookInfo>
            <Description>
              <h3>Sinopse:</h3>
              <DescripionDiv>
                <p>{book.description}</p>
              </DescripionDiv>
            </Description>
          </Flex>
          {userData ? (
            <Button onClick={adicionaAoCarrinho}>
              <span>Adicionar ao carrinho</span>
            </Button>
          ) : (
            <>
              <h5>Você precisa logar para comprar esse produto! </h5>
              <Button onClick={goingSignIn}>
                <span>Clique aqui para login</span>
              </Button>
            </>
          )}
          <ButtonBackHome onClick={goHome}>
            <span>Voltar</span>
          </ButtonBackHome>
        </Content>
      ) : (
        <h1>Pagina não encontrada!</h1>
      )}
    </>
  );
}

const MarginHeader = styled.div`
  margin-top: 100px;
`;

const Content = styled.div`
  width: 75%;
  height: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 90%;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px 20px 0;
  }
`;

const BookInfo = styled.div`
  width: 40%;
  height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 260px;
    height: 350px;
  }
  h1 {
    font-size: 20px;
    margin-top: 10px;
  }
  h2 {
    font-size: 20px;
    margin-top: 10px;
    font-weight: 700;
    color: white;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: fit-content;
    img {
      width: 195px;
      height: 263px;
    }
  }
`;

const Description = styled.div`
  width: 60%;
  height: 500px;
  margin-top: 10px;
  h3 {
    font-size: 30px;
    margin-left: 20px;
    margin-top: 80px;
  }
  @media (max-width: 767px) {
    width: 90%;
    height: fit-content;
    h3 {
      font-size: 24px;
      margin-left: 0;
      margin-top: 0;
    }
  }
`;

const DescripionDiv = styled.div`
  width: 80%;
  margin-left: 20px;
  margin-top: 10px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Button = styled.div`
  width: 20%;
  height: 40px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a795a5;
  :hover {
    opacity: 0.7;
  }
  @media (max-width: 767px) {
    width: 50%;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const ButtonBackHome = styled.div`
  margin-top: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
  span {
    text-decoration: underline;
  }
`;
