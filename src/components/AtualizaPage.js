import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { useContext, } from "react"
import { CustomerContext } from "../contexts/customer"
import { useNavigate, useParams } from "react-router-dom"

export default function Atualizar() {
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");

    const { id } = useParams();
    const { token } = useContext(CustomerContext);

    const navigate = useNavigate();

    function putTransaction(e) {
        e.preventDefault()
        const URL = `http://localhost:4000/transactions/${id}`

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const body = {
            value: value,
            description: description,
            type: type
        }

        console.log(body)

        const promisse = axios.put(URL, body, config)

        promisse.then((res) => {
            console.log("Atualizado com sucesso!")
            navigate("/home")
        });

        promisse.catch((err) => {
            console.log(err);
        });

    }



    return (
        <Main>
            <h1>Atualizar transação</h1>
            <Formulario onSubmit={putTransaction}>
                <input type="text" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} required />
                <input type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
                <div>
                    <Positive tipo={type} onClick={() => setType("positive")}>Entrada</Positive>
                    <Negative tipo={type} onClick={() => setType("negative")}>Saida</Negative>
                </div>
                <button type="subimit">Atualizar</button>
            </Formulario>
        </Main>
    )
}


const Main = styled.div`
height: 650px;
width: 400px;
background-color: #8C11BE;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
justify-content: flex-start;
text-align: start;
    h1{
        margin: 20px auto;
        font-family: 'Raleway', sans-serif;
        color: white;
        font-size: 26px;
        font-weight: 700;
    }
    div{
        width: 326px;
        display: flex;
        div{
            width: 48%;
        }
    }
`;

const Formulario = styled.form`
display: flex;
flex-direction: column;
font-family: 'Raleway', sans-serif;
    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        margin: 7px auto;
        border: 1px solid #D4D4D4;
        font-size: 20px;
        color: black;
        box-sizing: border-box;
        padding-left: 10px;
        display: flex;
        align-items: center;
        ::placeholder{
            font-family: 'Raleway', sans-serif;
            color: black;
            font-weight: 400;
            font-size: 20px;
        }
    }
    button{
        width: 326px;
        height: 45px;
        background-color: #A328D6;
        font-weight: 700;
        color: white;
        font-size: 21px;
        margin: 7px auto 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;
const Positive = styled.div`
width: 48%;
height: 45px;
background-color: #A328D6;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
color: white;
font-size: 21px;
margin: 7px auto 15px;
border: none;
border-radius: 5px;
cursor: pointer;
border: 1px solid ${props => props.tipo === "positive" ? "white" : "#8C11BE"};
`
const Negative = styled.div`
height: 45px;
width: 49%;
background-color: #A328D6;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
color: white;
font-size: 21px;
margin: 7px auto 15px;
border: none;
border-radius: 5px;
cursor: pointer;
border: 1px solid ${props => props.tipo === "negative" ? "white" : "#8C11BE"};
`