import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import ScreenSummary from '../components/panel/ScreenSummary';

function SummaryPage() {
    const headerText = 'Painel Geral'
    const leftButton = 'Resumo das Contas'
    const midButton = 'Receitas e Despesas do Mês'
    const rightButton = 'Saldo dos Últimos 6 Meses'
    const leftIcon = 'assets/resume.png'
    const midIcon = 'assets/expense.png'
    const rightIcon = 'assets/calendar.png'
    const navigate = useNavigate()

    function accountBalance(){        
        navigate('/summary')
    }

    return (
      
        <ScreenContainer>
            <Header headerText={headerText} />
            <ScreenSummary />
            <Footer 
                leftButton={leftButton}
                midButton={midButton}
                rightButton={rightButton}
                leftIcon={leftIcon}
                midIcon={midIcon}
                rightIcon={rightIcon}
                leftNavigate={accountBalance}
                />                
        </ScreenContainer>
      
    );
  }
  
  export default SummaryPage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `