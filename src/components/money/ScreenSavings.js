import styled from "styled-components"

export default function ScreenSavings(){
   
    return (
        <SavingsContainer>
             

            <div className="container">

            <TitleText>Economias</TitleText>

            <SavingsText>Você possui R$ 1552,00 guardados!</SavingsText>

                
             </div>


        </SavingsContainer>
    )
}


const SavingsContainer = styled.div`
    display: flex;
    flex-direction: collumn;
    justify-content: center;
    aligh-itens: center;
    width: 100%;
    min-height: 80vh;
    background-color: #11DCE6;
    .container{
        display: flex;
        flex-direction: column;
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
    .gray{
        color:#787373;
        font-weight: 500;
    }
    
    @media (max-width: 700px) {
        .container {
          height:70vh;
          margin-top: 20%;
        }
     `
const TitleText = styled.p`
    flex-direction: row;
    text-align: -webkit-center;
    margin: 0 auto;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 22px;
    margin-top: 20px;
    color: #05AFFC;
 }
`

const SavingsText = styled.p`
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    margin: 0 auto;
    font-size: 22px;
    margin-top: 20px;
    color: #05AFFC;
`
    