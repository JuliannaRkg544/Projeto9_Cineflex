import styled from "styled-components"

export default function Confirmation({buy}){

    return(
        <Style>
            <p>Pedido Feito com Sucesso!!!</p>
           <div className="info">
            <p>Filme e sessão</p>
            <p> {buy.movie} </p>
           <p>{buy.date}</p>
           <p>{buy.time}</p>
           <p>{buy.seats}</p>
          
           </div>
        </Style>
    )
}


const Style = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
width: auto;
margin-bottom: 100px;

.info{
    display: flex;
    flex-direction: column;
    margin: 10px 10px;
}

p{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 24px;
    color: #247A6B;
    font-weight: 700;
    text-align: center;
}

` 