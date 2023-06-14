import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../components/shared/Header'
import ScreenChoice from '../components/transactions/ScreenChoice';

function ChoicePage() {
    
    const headerText = 'Gerenciar Transações'
    const exitIcon = 'assets/exit.png'
    const navigate = useNavigate()
    
    function accountExit(){        
        navigate('/')
    }

    return (
      
        <ScreenContainer>
            <Header headerText={headerText} 
            exitIcon={exitIcon}
            exitNavigate={accountExit}
            />
            <ScreenChoice />
                
        </ScreenContainer>
      
    );
  }
  
  export default ChoicePage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `