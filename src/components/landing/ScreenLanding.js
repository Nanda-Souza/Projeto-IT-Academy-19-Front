import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function LandingContainer(){
  const navigate = useNavigate();

  //Funções para navegar entre as paginas

  function summaryPage(){
    navigate("/summary");
}

  function accountsPage(){
    navigate("/account");
}

function transationsPage(){
  navigate("/extract");
}

function savePage(){
  navigate("/save");
}
    
    return (
    <>
        <Logo>
            <p>DigitalWallet</p>
        </Logo>

        <Buttons>

         <button className="general" onClick={summaryPage}>
            Painel Geral
         </button>

         <button className="accounts" onClick={accountsPage}>
            Gerenciar Contas
         </button>

         <button className="transactions" onClick={transationsPage}>
            Gerenciar Transações
         </button>

         <button className="reserve" onClick={savePage}>
            Cofrinho Digital
         </button>
        
        </Buttons>
        </>
    )
}


const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;
margin-bottom: 35px;
font-family: 'Salsa', cursive;
color: #FFFFFF;
font-size: 32px;
`

const Buttons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
button{
        width: 326px;
        height: 55px;
        background-color: #0595F2;
        border: 5px solid #0595F2;
        border-radius: 5px;  
        margin-bottom: 6px;  
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        }
        `