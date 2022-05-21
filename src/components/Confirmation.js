import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Confirmation({ buy }) {
const navigate = useNavigate()
    return (
        <Style>
            <p>Pedido Feito com Sucesso!!!</p>
            <div className="info">
                <p>Filme e sessão</p>
                <span> {buy.movie} </span>
                <span> {buy.time} - </span>
                {/* hora e dia */}
            </div>

            <div className="info" >
                <p>Ingressos</p>
                {buy.seats.map((seat)=>{return  <span>Assento {seat} </span>})}
                {/* assantos quando for mais de 1 */}
            </div>

            <div className="info" >
                <p>Comprador</p>
                <span>Nome: {buy.buyer}</span>
                <span>CPF: {buy.cpf}</span>
            </div>
            <button type="submit" onClick={()=>navigate("/")} >Voltar para Home</button> 
        </Style>
    )
}


const Style = styled.div`
display: flex;
flex-direction: column;
margin: 5px 10px;
width: auto;
margin-bottom: 100px;

button{
    border: none;
    background-color: #E8833A;
    width: 255px;
    height: 60;
    border-radius: 3px;
    color: #fff;
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.info p{
    color: #293845;
    font-weight: 700;
    margin: 20px 0;
}
span{
    color: #293845;
    font-size: 22px;
    margin-top: 10px;
}

p{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 24px;
    color: #247A6B;
    font-weight: 700;
    text-align: center;
    width: auto ;

}

` 