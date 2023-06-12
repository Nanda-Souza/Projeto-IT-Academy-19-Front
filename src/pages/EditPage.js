import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Header from '../components/shared/Header'
import FooterTransaction from '../components/transactions/FooterTransaction';
import ScreenEdit from '../components/transactions/ScreenEdit';


function EditPage() {
    const headerText = 'Gerenciar Transações'
    const buttonOne = 'Extrato da Conta'
    const buttonTwo = 'Incluir Transação'
    const buttonThree = 'Editar Última Transação'
    const buttonFour = 'Transferir Fundos'
    const oneIcon = 'assets/resume.png'
    const twoIcon = 'assets/add.png'
    const threeIcon = 'assets/edit.png'
    const fourIcon = 'assets/money.png'
    const exitIcon = 'assets/exit.png'
    const navigate = useNavigate()

    function transactionExtract(){        
        navigate('/extract')
    }

    function transactionInclude(){        
        navigate('/include')
    }

    function transactionEdit(){        
        navigate('/edit')
    }

    
    function transactionMove(){        
        navigate('/move')
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
            <ScreenEdit />
            <FooterTransaction
                buttonOne={buttonOne}
                buttonTwo={buttonTwo}
                buttonThree={buttonThree}
                buttonFour={buttonFour}
                oneIcon={oneIcon}
                twoIcon={twoIcon}
                threeIcon={threeIcon}
                fourIcon={fourIcon}
                oneNavigate={transactionExtract}
                twoNavigate={transactionInclude}
                threeNavigate={transactionEdit}
                fourNavigate={transactionMove}
                />                
        </ScreenContainer>
      
    );
  }
  
  export default EditPage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `