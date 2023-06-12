import styled from "styled-components"

export default function HeaderAccounts(props){
    const { headerText, exitIcon, exitNavigate } = props
    return (
        <HeaderGeneral>
            <p className= "textHeader">{headerText}</p>
            <button onClick={exitNavigate}><img src={exitIcon} alt=""/></button>
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