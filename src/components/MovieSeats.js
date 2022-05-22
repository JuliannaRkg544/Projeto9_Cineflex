import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "./Container";
import styled from "styled-components"
import Footer from "./Footer"
import Loading from "./Loading";

const URL_POST = `https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`

export default function MovieSeats(props) {
    const { idSeats } = useParams();
    const { buyTickets } = props
    
    const [getSeatsURL, setGetSeatsURL] = useState(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSeats}/seats`)

    const [seats, setSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [info, setInfo] = useState(null);
    const [selected, setSelected] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        axios.get(getSeatsURL).then((response) => {
            const { data } = response
            setSeats([...data.seats])
            setInfo(data)
            console.log("data movie ", data.movie)
        }).catch(error => { console.log(error.response) })
    }, [])

    function saveTickets(event) {
        event.preventDefault();
        const body = {
            ids: selected,
            name: name,
            cpf: cpf
        }
        console.log(body)
        axios.post(URL_POST, body).then((response => {
            buyTickets({
                movie: info.movie.title,
                date: info.day.date,
                time: info.name,
                seats: selected,
                buyer: name,
                cpf: cpf
            })
            navigate("/confirmation")
        })).catch((e => { console.log(e.response); alert("deu ruim") }))
    }

    function selectSeat(seatNum) {
        let newSeat = seats.map((value, index) => {
            if (index === parseInt(seatNum) - 1) {
                return {
                    ...value,
                    isAvailable: "selected",
                }
            } else {
                return {
                    ...value,
                }
            }
        }
        )
        setSelected(prevState => [...prevState, seatNum])
        setSeats([...newSeat])
    }

    function disselectSeat(seatNum) {
        let newSeat = seats.map((value, index) => {
            if (index === parseInt(seatNum) - 1) {
                return {
                    ...value,
                    isAvailable: true,
                }
            } else {
                return {
                    ...value,
                }
            }
        })
        let oldSeat = selected.filter((item) => item !== seatNum)
        setSelected(oldSeat)
        setSeats([...newSeat]);
    }

   if(seats.length>0){

  return (
        <Container>
            <p>Selecione o(s) assento(s)</p>
            <Style>
                {seats.map((seat, index) => {
                    if (seat.isAvailable === true) {
                        return <button className="available" key={index} onClick={(() => { selectSeat(seat.name) })}>{seat.name}</button>
                    } else if (seat.isAvailable === "selected") {
                        return <button className="selected" key={index} onClick={(() => { disselectSeat(seat.name) })}>{seat.name}</button>
                    }
                    else return <button className="unavailable" key={index} onClick={(() => alert("Assento indisponível!!"))} >{seat.name}</button>
                })}
                {/* criar um component para os assentos Seats */}
                <div className="seats-footer">
                    <button id="selected"></button>
                    <button id="avaible"></button>
                    <button id="not-avaible"></button>
                </div>
                <div className="seats-footer-text">

                    <p>selecionado</p>
                    <p>disponível</p>
                    <p>indisponível</p>
                </div>

                <form onSubmit={saveTickets}>

                    <label>Nome do comprador:</label>
                    <input
                        required
                        type="text"
                        placeholder="Digite seu nome..."
                        minLength="3"
                        onChange={((event) => { setName(event.target.value) })}
                    ></input>
                    <label>CPF do comprador:</label>
                    <input
                        required
                        type="text"
                        placeholder="Digite seu CPF..."
                        pattern="[0-9]{11}"
                        onChange={((event) => { setCpf(event.target.value) })}
                    ></input>

                    <div className="reserva">
                        <button type="submit">Reservar assento(s)</button>
                    </div>

                </form>
            </Style>

            {info ? <Footer weekday={info.day.weekday}
                date={info.name}
                posterURL={info.movie.posterURL}
                title={info.movie.title}
            /> : null}

        </Container>

    )  } else return <Loading/>

    // function footer({title,posterURL,weekday,date}) {
    //     <StyledFooter>

    //         <img src={posterURL} />
    //         <div>
    //             <span>{title}</span>
    //             <span>{date}  {weekday}</span>
    //         </div>
    //     </StyledFooter>
    // }
}
const StyledFooter = styled.div` 
display: flex;
background-color: #DFE6ED;
border: 1px #9EADBA;
box-shadow: 0 2px 4px 2px #9EADBA;
height: 100px;
width: 100%;
justify-content: start;
align-items: center;
position: fixed;
bottom: 0;

div{
    display: flex;
    flex-direction: column;
}

img{
    width: 42px;
    height: 72px;
    margin: 0 10px;
}

span{
    font-size: 26px;
    color: #293845;
}

`

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
.seats-footer-text{
    display: flex;
    width: 100%;
    max-height: 50px;
    justify-content: space-around;
    align-items: center;
}
.seats-footer-text p{
    font-size: 13px;
    color: #4E5A65;
    width: 65px;
    height: 28px;
}
input::placeholder{
    width: 327px;
    height: 51px;
    font-size: 18px;
    font-style: italic;
    color: #AFAFAF;
}

.seats-footer{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;

}


.seats-footer button{
    border: 1px solid #808F9D;
    border-radius: 12px ;
    width: 25px;
    height: 25px;

}
#avaible{
    background-color:#C3CFD9 ;

}

#selected{
    background-color:#8DD7CF ;

}
#not-avaible{

    background-color: #FBE192;
}

`

