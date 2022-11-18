import styled from "styled-components"
import vetor from "../img/vetor.png"
import mais from "../img/mais.png"
import menos from "../img/menos.png"
import { Link } from "react-router-dom"



export default function HomePage() {
    return (
        <Main>
            <Header>
                <p>Olá, Fulano</p>
                <img src={vetor} alt="img" />
            </Header>
            <Transaction>
                Não há registros de entrada ou saída
            </Transaction>
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

const Transaction = styled.div`
    height: 446px;
    width: 326px;
    background-color: white;
    border-radius: 5px;
    color: black;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;

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