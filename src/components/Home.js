import styled from "styled-components"
import vetor from "../img/vetor.png"

export default function HomePage (){
    return(
        <Main>
            <div>
                <p>Olá, Fulano</p>
                <img src={vetor} alt="img"/>
            </div>
            <Transaction>

            </Transaction>
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
font-family: 'Raleway', sans-serif;
color: white;
`;

const Transaction = styled.div`
    height: 446px;
    width: 326px;
    background-color: white;
    border-radius: 5px;

`;