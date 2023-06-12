import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import ScreenBalance from '../components/panel/ScreenBalance';

function BalancePage() {
    const headerText = 'Painel Geral'
    const leftButton = 'Resumo das Contas'
    const midButton = 'Receitas e Despesas do Mês'
    const rightButton = 'Saldo dos Últimos 6 Meses'
    const leftIcon = 'assets/resume.png'
    const midIcon = 'assets/expense.png'
    const rightIcon = 'assets/calendar.png'
    const exitIcon = 'assets/exit.png'
    const navigate = useNavigate()

    function panelSummary(){        
        navigate('/summary')
    }

    function panelMonthly(){        
        navigate('/monthly')
    }

    function panelBalance(){        
        navigate('/balance')
    }

    function accountExit(){        
        navigate('/')
    }

    return (
      
        <ScreenContainer>
            <Header headerText={headerText} 
            exitIcon={exitIcon}
            exitNavigate={accountExit}
            />
            <ScreenBalance />
            <Footer 
                leftButton={leftButton}
                midButton={midButton}
                rightButton={rightButton}
                leftIcon={leftIcon}
                midIcon={midIcon}
                rightIcon={rightIcon}
                leftNavigate={panelSummary}
                midNavigate={panelMonthly}
                rightNavigate={panelBalance}
                />                
        </ScreenContainer>
      
    );
  }
  
  export default BalancePage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `