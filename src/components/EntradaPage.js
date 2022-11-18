import { useState } from "react";
import styled from "styled-components"



export default function Entrada (){
    const [value, setValue] = useState("")
    const [description, setDescription] = useState("")
    const type = "positive"

    return(
        <Main>
            <h1>Nova entrada</h1>
            <Formulario >
                <input  type="text"  placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} required />
                <input  type="text" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} required />
                <button type="subimit">Salvar entrada</button>
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
justify-content: flex-start;
text-align: start;
    h1{
        margin: 20px 150px 40px 0px;
        font-family: 'Raleway', sans-serif;
        color: white;
        font-size: 26px;
        font-weight: 700;
    }
`

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