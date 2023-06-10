import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function HeaderAcounts(props){
    const { headerText } = props
    
    return (
        <HeaderGeneral>
            <p className= "textHeader">{headerText}</p>
            <button data-test="logout" onClick><img src="assets/exit.png" alt=""/></button>

        </HeaderGeneral>
    )
}

const HeaderGeneral = styled.div`
    width: 100%;
    height: 60px;
    background-color: #0595F2;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: #FFFFFF;
    padding: 10px;
    p{
        display: flex;
        justify-content: center;
        align-items:center;
        margin-left: 20px;
    }
    button{
        background-color: #0595F2;
        border: none;
    }
    img {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
  `