import styled from "styled-components"
import { useState, useEffect } from 'react';
import useHalfYearBalanceInfo from "../../hooks/api/getHalfYearbalance";

export default function ScreenBalance(){
    const { halfYearBalance } = useHalfYearBalanceInfo();
    const [halfYearData, setHalfYearData] = useState([{}]);

    useEffect(() => {
        if (halfYearBalance) {            
            setHalfYearData(halfYearBalance)
        }        
      }, [halfYearBalance]);
   
    return (
        <BalanceContainer>
             

            <div className="container">

            <BalanceText>Saldo dos Últimos 6 Meses</BalanceText>

             <div className="list-balance">
                <ul>
                    <li><span className="blue">DATA</span></li>
                    {halfYearData.map((halfyear, index) => (
                        <li><span key={index} className="blue-b">{halfyear.month}</span></li>
                    ))}                    
                </ul>


                 <div className="vertical-line"></div>

                <ul className="value">
                    <li><span className="blue">SALDO TOTAL</span></li>
                    {halfYearData.map((halfyear, index) => (
                        <li><span key={index} className="gray">{halfyear.balance}</span></li>
                    ))}
                </ul>

             </div>

          
            </div>

        </BalanceContainer>
    )
}


const BalanceContainer = styled.div`
    display: flex;
    justify-content: center;
    aligh-itens: center;
    width: 100%;
    min-height: 80vh;
    background-color: #11DCE6;
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 5px;
        margin-top:120px;
        margin-left: 20px;
        margin-right: 20px;
        background-color: #FFFFFF;
        width:1600px;
        line-height: 25px;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 400;
      }
    .vertical-line {
        border-left: 1px solid ;
        border-left-color: #11DCE6;
        height:450px;
    } 
    .blue{
        color:#0595F2;
        font-weight: 700;
    }
    .blue-b{
        color:#0595F2;
        font-weight: 500;
    }
    .gray{
        color:#787373;
        font-weight: 500;
    }
    .list-balance{
        width: 100%;
        min-height: 55vh;
        display: flex;
        margin-left:25px;
        margin-right: 25px;
        margin-top:23px;
        flex-direction: collunm;
        justify-content: space-between;
        text-align: center;
    }
    @media (max-width: 700px) {
        .container {
          height:70vh;
          margin-top: 20%;
        }
     `
     
const BalanceText = styled.p`
    margin: 0 auto;
    text-align: -webkit-center;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 22px;
    margin-top: 20px;
    color: #05AFFC;
 }
`
    