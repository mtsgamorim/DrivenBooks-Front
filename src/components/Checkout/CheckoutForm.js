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
    const { userData } = useContext(UserContext);
    let [cpf, setCpf] = useState("");
    let [payment, setPayment] = useState("");
    let [street, setStreet] = useState("");
    let [number, setNumber] = useState("");
    let [city, setCity] = useState("");
    let [state, setState] = useState("");
    let [country, setCountry] = useState("");
    let [zipcode, setZipcode] = useState("");
    const products = [
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
    ];

    async function submitData(event) {
        event.preventDefault();

        try {
            const URL = "https://store-bookstore.herokuapp.com/checkout";
            await axios.post(URL, {
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
                    zipcode: formatZipCode(zipcode) 
                },
                products: products
            },{
                headers: {
                  "Authorization": `Bearer ${userData.token}`
                }
              });
            setLoading(true);
            navigate("/");
        } catch (error) {
            alert(
                "As informações estão incorretas. Insira os dados novamente!"
            );
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
                placeholder="Forma de pagamento"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                disabled={disable()}
                color={loading}
                required
            />
            Endereco:
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