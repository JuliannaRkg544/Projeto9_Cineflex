import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components"
import Container from "./Container";

export default function MovieList() {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies`
    const [movieList, setMovielist] = useState([])

    useEffect(() => {
        const promise = axios.get(URL)
        promise.then((response) => {
            setMovielist([...response.data])
            console.log(typeof response.data)
        })
        promise.catch(err => {console.log("deu ruim na primeira requisição",err.response )})
    }, [])


    if (movieList.length > 0) {
        return (
            <Container>
             <p>Selecione o filme</p>
             <MovieContainer>
                {movieList.map((movie, index) => {
                    return<Link to={`/movie/${movie.id}`} key={index}>
                    <div className="single-movie" > <img src={movie.posterURL} alt={index} /> </div>
                    </Link> 
                })}
            </MovieContainer>
            </Container>
        )
    } else { return <p>carregando</p> }

}
const MovieContainer = styled.div `

    display: flex;
    width: auto;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

img{
    width: 129px;
    heigth: 193px;
}

.single-movie{
  border-radius: 3px;
  width: 145px;
  height: 209px;
  box-shadow: 0 2px 4px 2px #343333;
  background-color: #fff;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

`