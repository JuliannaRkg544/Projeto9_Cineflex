import React from "react"
import styled from "styled-components"

export default function Header() {
    return <Head><p>CINEFLEX</p> </Head>
}

const Head = styled.div` 
    position: fixed;
    top: 0;
    width:100vw;
    height: 67px;
    background-color: #C3CFD9 ;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;


p{
    color: #E8833A ;
    font-size: 34px ;
    font-family: 'Roboto', sans-serif;
}

`