import styled from "styled-components"

export default function Footer({title,posterURL}){
    return (
        <Style>
        <img id="footer-img" src={posterURL}/>
        <span>{title}</span>
        </Style>
    )
}

const Style = styled.div`
display:flex;
background-color: #DFE6ED;
border: 1px #9EADBA;
box-shadow: 0 2px 4px 2px #9EADBA;
height: 100px;
width: 100%;
justify-content: start;
align-items: center;
position: fixed;
bottom: 0;

#footer-img{
    width: 42px;
    heigth: 72px;
    margin:0 10px;
}

span{
    font-size:  26px ;
    color: #293845;
}

`