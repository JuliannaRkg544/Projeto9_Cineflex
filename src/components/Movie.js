import axios from "axios";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import styled from "styled-components"
import Container from "./Container";

import Footer from "./Footer";
import Loading from "./Loading";

export default function Movie() {
    const { idMovie } = useParams()
    
    const [ URL_GET_SESSION,setURL_GET_SESSION]  = useState (`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
    const [session, setSession] = useState([])
    const [movie, setMovie] = useState([])  // no lugar desse estado poderia n fazer o destruct de 
    //response.data.day, apenas de response.data, mas seri anecessário fazer tres maps no retorno
    useEffect(() => {
        axios.get(URL_GET_SESSION).then((response) => {
            const { data } = response;
            setSession([...data.days])
            setMovie(data)
        }
        ).catch(error => { console.log(error.response) })
    }, [])

 if(session.length>0)  {return (
        <Container>
            <p>Selecione o horário</p>
            {session.map((session, index) => {
                return (
                    <Info key={index}>
                        <span>{session.weekday} - {session.date}</span>
                        {session.showtimes.map((s, index) => { return <Link to={`/seats/${s.id}`} key={index}> <button >{s.name}</button> </Link> } )}
                    </Info>)
            })}
        <Footer title={movie.title} posterURL={movie.posterURL}/>
        </Container>

    )}else {return <Loading/>}

}

const Info = styled.div`
display:flex;
justify-content: start;
align-items: start;
flex-direction: column;
margin:10px;

span{
    font-size: 24px;
    margin:10px;
    color: #293845;
}

button{
    border:none;
    background-color: #E8833A;
    color: #fff;
    width:83px;
    height:43px;
    border-radius: 3px;
    margin: 2px 10px;
}

`