import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../shared/Input";
import Button from "../shared/Button";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userData, cart, setCart, sum } = useContext(UserContext);
  let [cpf, setCpf] = useState("");
  let [payment, setPayment] = useState("");
  let [street, setStreet] = useState("");
  let [number, setNumber] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [country, setCountry] = useState("");
  let [zipcode, setZipcode] = useState("");

  async function submitData(event) {
    event.preventDefault();

    try {
      const URL = "https://store-bookstore.herokuapp.com/checkout";
      await axios.post(
        URL,
        {
          name: userData.name,
          email: userData.email,
          cpf: cpf,
          payment: payment,
          address: {
            street: street,
            number: number,
            city: city,
            state: state,
            country: country,
            zipcode: formatZipCode(zipcode),
          },
          products: cart,
        },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      setLoading(true);
      const promise = axios.delete(
        "https://store-bookstore.herokuapp.com/cart/deleteAll",
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      promise.then(() => {
        navigate("/");
      });
      promise.catch((err) => {
        alert("Erro ao fazer a compra!");
      });
      navigate("/");
    } catch (error) {
      alert("As informações estão incorretas. Insira os dados novamente!");
      setLoading(false);
    }
  }

  function loadingButton() {
    return loading ? (
      <ThreeDots
        color="#FFF"
        background-color={"var(--color-bg-input)"}
        opacity={0.7}
        height={80}
        width={80}
      />
    ) : (
      "FINALIZAR PEDIDO"
    );
  }

  function disable() {
    return loading ? "disable" : "";
  }

  return (
    <form onSubmit={submitData}>
      <Input
        type="text"
        placeholder="cpf"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
        disabled={disable()}
        color={loading}
        required
      />
      <Input
        type="text"
        placeholder="Número do cartão"
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        disabled={disable()}
        color={loading}
        required
      />
      <Section>
        <p>Endereço de entrega</p>
        <Input
          type="text"
          placeholder="Rua"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          disabled={disable()}
          color={loading}
          required
        />
        <Input
          type="text"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          disabled={disable()}
          color={loading}
          required
        />
        <Input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={disable()}
          color={loading}
          required
        />
        <Input
          type="text"
          placeholder="Estado"
          value={state}
          onChange={(e) => setState(e.target.value)}
          disabled={disable()}
          color={loading}
          required
        />
        <Input
          type="text"
          placeholder="País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          disabled={disable()}
          color={loading}
          required
        />
        <Input
          type="text"
          placeholder="CEP"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          disabled={disable()}
          color={loading}
          required
        />
      </Section>

      <Button>{loadingButton()}</Button>
    </form>
  );
}

function formatZipCode(str) {
  var re = /^([\d]{2})\.*([\d]{3})-*([\d]{3})/;

  if (re.test(str)) {
    return str.replace(re, "$1.$2-$3");
  }

  return "";
}

const Section = styled.div`
  color: var(--color-bg-input);
  padding: 10px;
  border: 1px solid var(--color-bg-input);
  margin-bottom: 10px;
  width: 300px;
  p {
    margin-bottom: 5px;
    text-align: center;
  }
`;
