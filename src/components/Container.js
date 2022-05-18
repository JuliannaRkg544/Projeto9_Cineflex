import styled from "styled-components"

export default function Container({children}){
   return <Style>{children}</Style>
}

const Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
width: auto;

p{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 25px;
}

`