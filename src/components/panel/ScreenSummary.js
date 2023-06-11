import styled from "styled-components"

export default function ScreenSummary(){
   
    return (
        <SummaryContainer>
             
            <div className="container">

             <div className="list-bank">
                <ul>
                    <li><span className="blue">BANCO</span></li>
                    <li><span className="bank">Nubank</span></li>
                    <li><span className="bank">Bradesco</span></li>
                    <li><span className="bank">Itáu</span></li>
                    <li><span className="bank">Caixa</span></li>
                </ul>

                 <div className="vertical-line"></div>

                <ul className="agence">
                    <li><span className="blue">AGÊNCIA</span></li>
                    <li><span className="agence">1234</span></li>
                    <li><span className="agence">0144</span></li>
                    <li><span className="agence">2569</span></li>
                    <li><span className="agence">3785</span></li>
                </ul>

                 <div className="vertical-line"></div>

                <ul className="numeber-acount">
                    <li><span className="blue">Nº DA CONTA</span></li>
                    <li><span className="number">1500686-2</span></li>
                    <li><span className="number">1063530-0</span></li>
                    <li><span className="number">1267540-7</span></li>
                    <li><span className="number">4455289-0</span></li>
                </ul>

                 <div className="vertical-line"></div>

                <ul className="value">
                    <li><span className="blue">SALDO</span></li>
                    <li><span className="expense">-542,54</span></li>
                    <li><span className="expense">-67,60</span></li>
                    <li><span className="gain">500,00</span></li>
                    <li><span className="gain">3000,00</span></li>
                </ul>

             </div>

          
             <div className="total-balance">
                <p className="balance">SALDO TOTAL</p>
                <p className="total"><span>2849,96</span></p>
             </div>

            </div>

        </SummaryContainer>
    )
}

const SummaryContainer = styled.div`
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
    } 
    .blue{
        color:#0595F2;
        font-weight: 700;
    }
    .bank{
        color:#787373;
        font-weight: 500;
    }
    .agence{
        color:#787373;
        font-weight: 500;
    }
    .number{
        color:#787373;
        font-weight: 500;
    }
    .expense{
        color:#C70000;
    } 
    .gain{
        color:#03AC00; 
    }       
    .list-bank{
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
    .agence{
        text-align: center;
    }
.    total-balance{
        width: 100%; 
        height: 45px;
        background-color:#05AFFC;
        display: flex;
        justify-content: space-between;
    }
    .balance{
        font-weight: 700;
        margin-left:10px;
        margin-right: 10px;
        margin-top:10px;
        color:#ffffff;
    }
    .total{

        font-weight: 700;
        margin-left:10px;
        margin-right: 10px;
        margin-top:10px;
        color:#ffffff;

    }
     `
     
    