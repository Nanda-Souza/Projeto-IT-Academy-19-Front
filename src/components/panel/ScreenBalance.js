import styled from "styled-components"

export default function ScreenBalance(){
   
    return (
        <BalanceContainer>
             

            <div className="container">

            <BalanceText>Saldo dos Últimos 6 Meses</BalanceText>

             <div className="list-balance">
                <ul>
                    <li><span className="blue">DATA</span></li>
                    <li><span className="blue-b">Abril</span></li>
                    <li><span className="blue-b">Maio</span></li>
                    <li><span className="blue-b">Junho</span></li>
                    <li><span className="blue-b">Julho</span></li>
                    <li><span className="blue-b">Agosto</span></li>
                    <li><span className="blue-b">Setembro</span></li>
                </ul>


                 <div className="vertical-line"></div>

                <ul className="value">
                    <li><span className="blue">SALDO TOTAL</span></li>
                    <li><span className="gray">3542.54</span></li>
                    <li><span className="gray">4545.27</span></li>
                    <li><span className="gray">1574.14</span></li>
                    <li><span className="gray">2582.00</span></li>
                    <li><span className="gray">3222.51</span></li>
                    <li><span className="gray">5614.11</span></li>
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
    