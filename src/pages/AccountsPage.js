import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ScreenAccounts from '../components/accounts/ScreenAccounts';
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'

function AccountsPage() {
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

    function mergeAccount(){        
        navigate('/merge')
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
            <ScreenAccounts />
            <Footer 
            leftButton={leftButton}
            midButton={midButton}
            rightButton={rightButton}
            leftIcon={leftIcon}
            midIcon={midIcon}
            rightIcon={rightIcon}
            leftNavigate={addAccount}
            midNavigate={removeAccount}
            rightNavigate={mergeAccount}
            />
        </ScreenContainer>
      
    );
  }
  
  export default AccountsPage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `