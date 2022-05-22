import styled from "styled-components"
import load from "../assets/css/loading.gif"

export default function Loading(){
    return <Style><img src={load} /></Style> 
}

const Style = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

img{
    width: 100px;
    height: 100px;
}
`