import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function FotterAcounts(props){
    const { leftButton, midButton, rightButton, leftIcon, midIcon, rightIcon, leftNavigate, midNavigate } = props
    const navigate = useNavigate()

    function newExpense(){        
        navigate("/nova-saida")
    }
    

    return (
        
        <FooterAcount>

            <div className="new-acount">
                <button data-test="new-acount" onClick={leftNavigate}>
                    <img src={leftIcon} alt=""/>
                    <p>{leftButton}</p>
                </button>
            </div>
       

            <div className="remove-acount">
                <button data-test="remove-acount" onClick={midNavigate}>
                    <img src={midIcon} alt=""/>
                    <p>{midButton}</p>
                </button>
            </div>

            <div className="merge">
                <button data-test="merge" onClick={newExpense}>
                    <img src={rightIcon} alt=""/>
                    <p>{rightButton}</p>
                </button>
            </div>
       
            
        </FooterAcount>
    )
}

const FooterAcount = styled.footer`
    width: 100%;
    min-height: 17vh; 
    background-color: #11DCE6;
    position: fixed;
    bottom: 10px;
    left: 0;
    display: flex;
    flex-direction: row;
    display: flex;
    justify-content: center;
    aligh-itens: center;
    div{
        width: 532px;
        height: 114px;
        background-color: #0595F2;
        border-radius: 5px;
    }
    .new-acount{
        margin-left:25px;
        margin-right:5px;

    }
    .remove-acount{
        margin-right:5px;
    }
    .merge{
        margin-right:25px;

    }
    button{
        display:flex;
        flex-direction:column;
        flex-wrap: wrap;
        width:100%;
        background-color: #0595F2;
        border:none;
        margin-top:2px;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        aligh-itens: center;
        width: 22px;
        height: 22px;
        margin-bottom:30px;
        margin-top: 10px;
    }
    p{
        display: block;
        margin-left: auto;
        margin-right: auto;
        aligh-itens: center;
        width:74px;
        height: 6px;
        margin-bottom: 40px;
        color: #FFFFFF;
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 13px;
        text-align: left;
    }
  `
