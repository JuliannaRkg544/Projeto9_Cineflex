import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//faz a requisição pra api da lista de todos os filmes
export default function MovieList() {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies`
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const promise = axios.get(URL)
        promise.then((response) => {
            setMovie([...response.data])
            console.log(response.data)
       
        })
    }, [])
  

    if (movie.length>0) {

    return (
        <>

        
        {movie.map((m,index)=>{ return<img src={m.posterURL} key={index}/> 
        })} 
       
     </>
        )
        }else {return <p>carregando</p>}
    
}