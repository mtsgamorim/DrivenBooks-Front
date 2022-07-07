import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TypeBookSeparation({ type }) {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  function navegaParaLivro(id) {
    navigate(`/item/${id}`);
  }

  function IndividualBook({ name, price, id, image }) {
    return (
      <Book onClick={() => navegaParaLivro(id)}>
        <img src={image} alt={name} />
        <AdjustWidth>
          <h3>{name}</h3>
          <h4>{price}</h4>
        </AdjustWidth>
      </Book>
    );
  }

  useEffect(() => {
    const promise = axios.get(
      `https://store-bookstore.herokuapp.com/products/${type}`
    );

    promise.then((res) => {
      setBooks(res.data);
    });
    promise.catch((err) => {
      console.log("Error na rota get de /products");
    });
  }, []);

  return (
    <Container>
      <h1>{type}:</h1>

      <BookSpace>
        {books.length > 0 ? (
          books.map((book, index) => (
            <IndividualBook
              key={index}
              id={book.id}
              name={book.name}
              image={book.image}
              type2={type}
              price={book.price}
            />
          ))
        ) : (
          <h6>Não há livros para exibir!</h6>
        )}
        {}
      </BookSpace>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 860px;
  height: fit-content;
  flex-wrap: wrap;
  font-family: "Bungee Shade", cursive;
  color: #fbefdc;
  background-color: #424e5e;
  padding: 25px 0 50px 0;
  border-radius: 8px;

  h1 {
    font-weight: 700;
    font-size: 30px;
    padding-left: 70px;
  }
`;

const BookSpace = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  /* width: 70%; */
  width: fit-content;
  /* min-width: 230px; */
  max-width: 710px;
  flex-wrap: wrap;
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #424e5e;
  color: #424e5e;
  border-radius: 5px;
  background-color: var(--color-bg-footer);
  font-family: "Roboto", sans-serif;
  margin-top: 20px;
  padding: 20px 20px 0 20px;
  h6 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 15px;
  }
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000f27;
  margin-bottom: 20px;
  img {
    width: 200px;
    height: 260px;
  }
  h3 {
    font-size: 20px;
  }
`;

const AdjustWidth = styled.div`
  width: 200px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  h3 {
    margin-bottom: 5px;
    flex-wrap: wrap;
  }
`;
