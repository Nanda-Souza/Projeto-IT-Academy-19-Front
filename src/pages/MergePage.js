import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ScreenMerge from '../components/accounts/ScreenMerge';
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'

function MergePage() {
    const headerText = 'Gerenciar Contas'
    const leftButton = 'Cadastrar conta'
    const midButton = 'Remover Conta'
    const rightButton = 'Mesclar Contas'
    const leftIcon = 'assets/add.png'
    const midIcon = 'assets/remove.png'
    const rightIcon = 'assets/merge.png'
    const exitIcon = 'assets/exit.png'
    const navigate = useNavigate()
    
    function removeAccount(){        
        navigate('/remove')
    }

    function addAccount(){        
        navigate('/account')
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
            <ScreenMerge />
            <Footer 
            leftButton={leftButton}
            midButton={midButton}
            rightButton={rightButton}
            leftIcon={leftIcon}
            midIcon={midIcon}
            rightIcon={rightIcon}
            leftNavigate={addAccount}
            midNavigate={removeAccount}
            />
        </ScreenContainer>
      
    );
  }
  
  export default MergePage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `