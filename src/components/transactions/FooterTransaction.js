import styled from "styled-components"

export default function FooterTransaction(props){
    const { buttonOne, buttonTwo, buttonThree, buttonFour, oneIcon, twoIcon, threeIcon, fourIcon, oneNavigate, twoNavigate, threeNavigate, fourNavigate } = props
    
    return (
        
        <FooterGeneral>

            <div className="one-navigate">
                <button onClick={oneNavigate}>
                    <img src={oneIcon} alt=""/>
                    <p>{buttonOne}</p>
                </button>
            </div>
       

            <div className="two-navigate">
                <button onClick={twoNavigate}>
                    <img src={twoIcon} alt=""/>
                    <p>{buttonTwo}</p>
                </button>
            </div>

            <div className="three-navigate">
                <button onClick={threeNavigate}>
                    <img src={threeIcon} alt=""/>
                    <p>{buttonThree}</p>
                </button>
            </div>

            <div className="four-navigate">
                <button onClick={fourNavigate}>
                    <img src={fourIcon} alt=""/>
                    <p>{buttonFour}</p>
                </button>
            </div>
       
            
        </FooterGeneral>
    )
}

const FooterGeneral = styled.footer`
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
        width: 397px;
        height: 114px;
        background-color: #0595F2;
        border-radius: 5px;
    }
    .one-navigate{
        margin-right:5px;

    }
    .two-navigate{
        margin-right:5px;
    }
    .three-navigate{
        margin-right:5px;
    }
    .button-four{
        margin-right:5px;
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
