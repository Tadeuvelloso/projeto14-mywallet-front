import styled from "styled-components";

export default function Transacion ({ value, description, date, type}){
    return(
        <Line type={type}>
            <div>
                <p>{date}</p>
                <h4>{description}</h4>
            </div>
            <h5>{Number(value).toFixed(2)}</h5>
        </Line>
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
`