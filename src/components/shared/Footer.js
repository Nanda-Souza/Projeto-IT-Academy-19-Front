import styled from "styled-components"

export default function FotterAccounts(props){
    const { leftButton, midButton, rightButton, leftIcon, midIcon, rightIcon, leftNavigate, midNavigate, rightNavigate } = props
    
    return (
        
        <FooterGeneral>

            <div className="left-navigate">
                <button onClick={leftNavigate}>
                    <img src={leftIcon} alt=""/>
                    <p>{leftButton}</p>
                </button>
            </div>
       

            <div className="mid-navigate">
                <button onClick={midNavigate}>
                    <img src={midIcon} alt=""/>
                    <p>{midButton}</p>
                </button>
            </div>

            <div className="right-navigate">
                <button onClick={rightNavigate}>
                    <img src={rightIcon} alt=""/>
                    <p>{rightButton}</p>
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
        width: 532px;
        height: 114px;
        background-color: #0595F2;
        border-radius: 5px;
    }
    .left-navigate{
        margin-left:25px;
        margin-right:5px;

    }
    .mid-navigate{
        margin-right:5px;
    }
    .right-navigate{
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
