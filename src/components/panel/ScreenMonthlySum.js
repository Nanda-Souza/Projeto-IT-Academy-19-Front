import styled from "styled-components"

export default function ScreenMonthlySum(){
   
    return (
        <MonthlySumContainer>
             

            <div className="container">

            <MonthlyText>Resumo das Receitas e Despesas do Mês</MonthlyText>

             <div className="list-monthly">
                <ul>
                    <li><span className="blue">RESUMO RECEITA TOTAL</span></li>
                    <li><span className="gray">5455.00</span></li>
                </ul>


                 <div className="vertical-line"></div>

                <ul className="value">
                    <li><span className="blue">RESUMO DESPESAS TOTAL</span></li>
                    <li><span className="gray">3542.54</span></li>
                </ul>

             </div>

          
            </div>

        </MonthlySumContainer>
    )
}


const MonthlySumContainer = styled.div`
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
    .gray{
        color:#787373;
        font-weight: 500;
    }
    .list-monthly{
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
const MonthlyText = styled.p`
    margin: 0 auto;
    text-align: -webkit-center;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 22px;
    margin-top: 20px;
    color: #05AFFC;
 }
`
    