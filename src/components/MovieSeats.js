import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "./Container";
import styled from "styled-components"
import Footer from "./Footer";

export default function MovieSeats() {
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [info, setInfo] = useState([]);
    const [selected,setSelected] = useState(false)
    const { idSeats } = useParams();
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`
    useEffect(() => {
        axios.get(URL).then((response) => {
            const { data } = response
            setSeats([...data.seats])
            setInfo(data)
        }).catch(error => { console.log(error.response) })
    }, [])
    function buyTickets() {
        <></>
    }
    function selectSeat(seatNum){
        let newSeat = seats.map((value,index)=>{
            if (index === parseInt(seatNum)-1){
                return{ 
                    ...value,
                    isAvailable:"selected",
                }
            } else {
                return {
                    ...value,
                }
            }
        }
        )
        setSeats([...newSeat])
    }
    function disselectSeat(seatNum){
        let newSeat = seats.map((value,index)=>{
            if (index === parseInt(seatNum)-1){
                return{
                    ...value,
                    isAvailable:true,
                }
            } else {
                return{
                    ...value,
                }
            }
        })
        setSeats([...newSeat])
    }
    return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <Style>
                {seats.map((seat, index) => {
                    if (seat.isAvailable === true) {
                        return <button className="available" onClick={(()=>{selectSeat(seat.name)})}>{seat.name}</button>
                    } else if (seat.isAvailable === "selected"){
                        return <button className="selected" onClick={(()=>{disselectSeat(seat.name)})}>{seat.name}</button>
                    }
                    else return <button className="unavailable" onClick={(()=>alert("Assento indisponível!!"))} >{seat.name}</button> 
                })}
                {/* criar um component para os assentos Seats */}

                <form onSubmit={() => buyTickets()}>

                    <label for="name">Nome do comprador:</label>
                    <input
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                        minLength="3"
                        onChange={((event) => { setName(event.target.value) })}
                    ></input>
                    <label for="cpf">CPF do comprador:</label>
                    <input
                        required
                        type="text"
                        placeholder="Digite seu CPF..."
                        pattern="[0-9]{11}"
                        onChange={((event) => { setCpf(event.target.value) })}
                    ></input>

                    <div className="reserva">
                        <Link to={`/confirmation`}><button type="submit">Reservar assento(s)</button> </Link>
                    </div>

                </form>
            </Style>
         {/* <Footer posterURL={info.movie.posterURL} title={info.movie.title} />  */}
        </Container>
    )
}

const Style = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

button{
    margin: 9px 3px;
    border-radius: 50%;
    width: 30px ;
    height: 30px ;
   
} 
.available{
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
}
.selected{
  background-color: #8DD7CF;
  border: 1px solid #45BDB0;
}
.unavailable{
    background-color: #FBE192;
    border: 1px solid #F7C52B;
}
input{
    margin: 10px;
}
form{
    margin: 20px;
}
.reserva button{
    border: none;
    background-color: #E8833A;
    width: 255px;
    height: 42;
    border-radius: 3px;
    color: #fff;
}


`