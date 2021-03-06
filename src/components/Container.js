
import styled from "styled-components"

export default function Container({children}){
    return<Style>{children}</Style>
}

const Style = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
width: auto;
margin-bottom: 100px;

p{
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 24px;
    color: #293845;
    font-weight: 700;
    text-align: center;
}

`