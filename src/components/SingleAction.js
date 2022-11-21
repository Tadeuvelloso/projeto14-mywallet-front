import styled from "styled-components";
import { useContext, useState } from "react"
import { CustomerContext } from "../contexts/customer";
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Transacion ({ value, description, date, type, id, total, setTotal}){

    const {token, render, setRender} = useContext(CustomerContext);
    const [confirmation, setConfirmation] = useState(false);
    const [atualization, setAtualization] = useState(false);

    const navigate = useNavigate();

    function deleteTransaction (id){

        const URL = `https://mywallet-api-izrt.onrender.com/${id}`

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            } 
        }

        axios.delete(URL, config)

        .then(() => {
            console.log("excluido com sucesso!")
            setRender(!render)

        })
        .catch((err) => {
            console.log("Algo de errado aconteceu!")
        })
    }

    function att (id){
        navigate(`/atualiza/${id}`)
    }

    return(
        <>
        <Line type={type}>
            <div>
                <p>{date}</p>
                <h4 onClick={() =>setAtualization(!atualization)} >{description}</h4>
            </div>
            <div>
                <h5>{Number(value).toFixed(2)}</h5>
                <span onClick={() => setConfirmation(!confirmation)}>X</span>
            </div>
        </Line>
        {atualization? 
        
        <Grade>
                <p>Quer mesmo Atualizar?</p>
                <div>
                    <p onClick={() =>setAtualization(!atualization)}>cancelar</p>
                    <button onClick={() => att(id)}>confirmar</button>
                </div>
                
        </Grade>: 
        <></>}
        {confirmation? 
        
        <Grade>
                <p>Quer mesmo Excluir?</p>
                <div>
                    <p onClick={() =>setConfirmation(!confirmation)}>cancelar</p>
                    <button onClick={() => deleteTransaction(id)}>confirmar</button>
                </div>
                
        </Grade>: 
        <></>}
        </>
        
    )
}

const Line = styled.div`
display: flex;
width: 95%;
height: 25px;
justify-content: space-between;
font-size: 16px;
    p{
        color: #c6c6c6;
        margin-right: 10px;
    }
    div{
        display: flex;
        width: auto;
    }
    h5{
        color: ${props => props.type === "positive" ? "#03AC00" : "#C70000" }
    }
    span{
        margin-left: 10px;
        margin-right: -10px;
        cursor: pointer;
    }
    h4{
        cursor: pointer;
    }
`
const Grade = styled.div`
height: 70px;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0px auto;
div{
display: flex;
align-items: center;
justify-content: center;
margin-top: 5px;
}
button{
        background-color: #8C11BE;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border: none;
        font-size: 16px;
        border-radius: 5px;
        height: 25px;
        width: 75px;
        font-weight: 400;
        margin-left: 15px;
        :hover{
            cursor: pointer;
        }
    }
    p{
        color: #8C11BE;
        font-size: 17px;
        :hover{
            cursor: pointer;
        }
    }
`