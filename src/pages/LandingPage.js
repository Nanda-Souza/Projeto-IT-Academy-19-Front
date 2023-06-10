import styled from 'styled-components';
import LandingContainer from '../components/landing/ScreenLanding';


function LandingPage() {
    
    

    return (
      
        <ScreenContainer>
            <LandingContainer />
            
        </ScreenContainer>
      
    );
  }
  
  export default LandingPage;
  
  const ScreenContainer = styled.div`
  background-color: #11DCE6;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  `