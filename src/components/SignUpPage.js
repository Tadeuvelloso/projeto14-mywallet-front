import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

export default function SignUp (){
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_comfirm, setPassword_confirm] = useState("");

    const navigate = useNavigate();


    function registration (e){
        e.preventDefault();

        if(password !== password_comfirm){
            alert("Comfirme sua senha corretamente!")
            return
        }

        const URL = "https://mywallet-api-izrt.onrender.com/sign-up";

        const body = {
            name,
            email,
            password
        }

        const promisse = axios.post(URL, body);

        promisse.then((res) => {
            navigate("/");
        })
        promisse.catch((err) => {
            console.log(err.response.data)
        })

    }

    return(
        <Main>
            <h1>MyWallet</h1>
            <Formulario onSubmit={registration}>
                <input  type="text"  placeholder="name" value={name} onChange={e => setName(e.target.value)} required />
                <input  type="email"  placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required />
                <input  type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required />
                <input  type="password" placeholder="Confirmar senha" value={password_comfirm} onChange={e => setPassword_confirm(e.target.value)} required />
                <button type="subimit">Cadastrar</button>
            </Formulario>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
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
font-family: 'Saira Stencil One';
    h1{
        font-size: 32px;
        font-family: 'Saira Stencil One';
        font-weight: 400;
        color: white;
        line-height: 50px;
        margin-bottom: 15px;
    }
    a{
        font-size: 15px;
        font-weight: 700;
        color: white;
        text-decoration: none;
        line-height: 17.61px;
        margin-top: 25px;
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
`