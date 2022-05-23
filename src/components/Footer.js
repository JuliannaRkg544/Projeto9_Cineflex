import styled from "styled-components"

export default function Footer({title,posterURL,weekday,date}){
    return (
        <Style>
         <img src={posterURL}/>
         <div>
        <span>{title}</span> 
        <span>{date}  {weekday}</span>
         </div>
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
left: 0;
right: 0;

div{
    display: flex;
    flex-direction: column;
}

img{
    width: 42px;
    height: 72px;
    margin:0 10px;
}

span{
    font-size:  22px ;
    color: #293845;
    margin: 3px 0;
}

`