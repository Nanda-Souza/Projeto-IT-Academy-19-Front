import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import ScreenRemove from '../components/acounts/ScreenRemove'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'


function RemovePage() {
    const headerText = 'Gerenciar Contas'
    const leftButton = 'Cadastrar conta'
    const midButton = 'Remover Conta'
    const rightButton = 'Mesclar Contas'
    const leftIcon = 'assets/add.png'
    const midIcon = 'assets/remove.png'
    const rightIcon = 'assets/merge.png'
    const navigate = useNavigate()

    function removeAcount(){        
        navigate('/remove')
    }

    function addAcount(){        
        navigate('/acounts')
    }    

    return (
      
        <ScreenContainer>
            <Header headerText={headerText} />
            <ScreenRemove />
            <Footer 
            leftButton={leftButton}
            midButton={midButton}
            rightButton={rightButton}
            leftIcon={leftIcon}
            midIcon={midIcon}
            rightIcon={rightIcon}
            leftNavigate={addAcount}
            midNavigate={removeAcount}            
            />
        </ScreenContainer>
      
    );
  }
  
  export default RemovePage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `