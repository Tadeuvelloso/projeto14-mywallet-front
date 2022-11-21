import styled from "styled-components"
import vetor from "../img/vetor.png"
import mais from "../img/mais.png"
import menos from "../img/menos.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { CustomerContext } from "../contexts/customer";
import axios from "axios"
import Transacion from "./SingleAction"

export default function HomePage() {

    const {token, nome, render} = useContext(CustomerContext);
    const [actions, setActions] = useState([])
    const [total, setTotal] = useState("")
    let soma = 0;

    const navigate = useNavigate();

    useEffect(() => {

        const URL = "http://localhost:4000/transactions";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        }

        const promisse = axios.get(URL, config)

        promisse.then((res) => {
            setActions(res.data)
            console.log(res.data)
        });

        promisse.catch((err) => {
            console.log(err.response.message);
        });

    }, [render])

    useEffect(() => {
        if(actions.length >= 0){
            actions.forEach((t) => {
                if(t.type === "positive"){
                    soma += Number(t.value)
                    
                } else {
                    soma -= Number(t.value)
                }
            })
            return setTotal(soma)  
        }
    }, [actions])

    function logOut() {
        const URL = "http://localhost:4000/logout";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        }

        const body = token;

        axios.post(URL, body, config)
        .then(() => {
            navigate("/")
        console.log("logOut efetuado com sucesso!")})
        .catch((err) => console.log(err.response))
    }

    return (
        <Main>
            <Header>
                <p>Olá, {nome}</p>
                <img src={vetor} alt="img" onClick={() => logOut()} />
            </Header>
            <Transactions>
                {/* Não há registros de entrada ou saída */}
                {actions.map((a) => <Transacion key={a._id} total={total} setTotal={setTotal} id={a._id} value={a.value} description={a.description} date={a.date} type={a.type}/>)}
                <Grade total={total}>
                    <h2>Saldo</h2>
                    <p>{Number(total).toFixed(2)}</p>
                </Grade>
            </Transactions>
            <TransactionButtons>
                <Link to="/entrada">
                    <Entrada>
                        <img src={mais} alt="img" />
                        <p>Nova<br />entrada</p>
                    </Entrada>
                </Link>
                <Link to="/saida">
                    <Saida>
                        <img src={menos} alt="img" />
                        <p>Nova<br />saída</p>
                    </Saida>
                </Link>
            </TransactionButtons>
        </Main>
    )
}

const Main = styled.div`
height: 630px;
width: 400px;
background-color: #8C11BE;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Raleway', sans-serif;
color: white;
`;
const Transactions = styled.div`
    height: 446px;
    width: 326px;
    background-color: white;
    border-radius: 5px;
    color: black;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    box-sizing: border-box;
    padding: 10px;
    overflow-y: scroll;
`;
const Grade = styled.div`
        display: flex;
        width: 90%;
        justify-content: space-between;
        position: absolute;
        bottom: 10px;
        left: 10px;
        background-color: white;
        z-index: 1;
        p{
            color: ${props => props.total > 0 ? "#03AC00" : "#C70000"}
        }
`;
const Header = styled.div`
display: flex;
width: 326px;
height: 30px;
align-items: center;
justify-content: space-between;
margin: 10px 0px;
    p{
        font-weight: 700;
        font-size: 26px;
    }
    img{
        cursor: pointer;
    }
`;
const TransactionButtons = styled.div`
width: 326px;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 7px;
    p{
        font-size: 17px;
        font-weight: bold;
    }
    a{
        text-decoration: none;
        color: white;
    }
`;
const Entrada = styled.div`
background-color: #A328D6;
height: 114px;
width: 155px;
border-radius: 5px;
box-sizing: border-box;
display: flex;
flex-direction: column;
padding: 10px;
justify-content: space-between;
    img{
        height: 24px;
        width: 24px;
    }
`;
const Saida = styled.div`
background-color: #A328D6;
height: 114px;
width: 155px;
border-radius: 5px;
box-sizing: border-box;
display: flex;
flex-direction: column;
padding: 10px;
justify-content: space-between;
    img{
        height: 24px;
        width: 24px;
    }
`;