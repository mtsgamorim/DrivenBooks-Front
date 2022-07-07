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
        {books.map((book, index) => (
          <IndividualBook
            key={index}
            id={book.id}
            name={book.name}
            image={book.image}
            type2={type}
            price={book.price}
          />
        ))}
      </BookSpace>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 700;
    font-size: 30px;
    padding-left: 70px;
  }
`;

const BookSpace = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 70%;
  height: 350px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 5px;
`;

const Book = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
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
`;
