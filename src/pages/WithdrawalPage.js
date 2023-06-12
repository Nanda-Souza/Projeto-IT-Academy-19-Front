import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import ScreenWithdrawal from '../components/money/ScreenWithdrawal';

function WithdrawalPage() {
    const headerText = 'Cofrinho Digital'
    const leftButton = 'Guardar Dinheiro'
    const midButton = 'Retirar Dinheiro Guardado'
    const rightButton = 'Economias'
    const leftIcon = 'assets/wallet.png'
    const midIcon = 'assets/remove.png'
    const rightIcon = 'assets/calculator.png'
    const exitIcon = 'assets/exit.png'
    const navigate = useNavigate()
    
    function saveMoney(){        
        navigate('/save')
    }

    function withdrawalMoney(){        
        navigate('/withdrawal')
    }

    function savingsMoney(){        
        navigate('/savings')
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
            <ScreenWithdrawal />
            <Footer 
            leftButton={leftButton}
            midButton={midButton}
            rightButton={rightButton}
            leftIcon={leftIcon}
            midIcon={midIcon}
            rightIcon={rightIcon}
            leftNavigate={saveMoney}
            midNavigate={withdrawalMoney}
            rightNavigate={savingsMoney}
            />
        </ScreenContainer>
      
    );
  }
  
  export default WithdrawalPage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `