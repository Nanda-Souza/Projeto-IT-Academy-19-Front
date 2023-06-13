import { useState } from "react";
import styled from "styled-components"
import { createBankAccount } from "../../services/accountsApi";

export default function ScreenAccounts(){
    const [bank, setBank] = useState('');
    const [agency, setAgency] = useState('');
    const [accountNum, setAccountNum] = useState('');
    
    async function submit(event) {
        event.preventDefault();        
        if (agency.length !== 4) {
            alert("O Numero da agência deve ter exatos 4 digítos!")
        } else if (accountNum.length < 6 || accountNum.length > 11) {
            alert("O Numero da conta deve ter entre 6 a 11 digítos!")
        } else {
          try {
            await createBankAccount(bank, agency, accountNum);
            alert('Conta bancária criada com sucesso!');
          } catch (err) {
            alert('Não foi criar a conta bancária!');
          }
        } 
    }
    return (
        <AccountsContainer>
             
         <div className="container">
                
            <InputContainer>
                <form onSubmit={submit}>             
                <InputList>
                
                 <p className="register-text">Cadastre sua conta</p>

                 <input                
                  type="text"
                  placeholder="Banco"
                  required
                  value={bank} 
                  onChange={e => setBank(e.target.value)}             
                 />

                 <input                
                  type="number"
                  min={0}                  
                  placeholder="Agência" 
                  required
                  value={agency} 
                  onChange={e => setAgency(e.target.value)}             
                 />

                 <input                
                  type="number"
                  min={0} 
                  placeholder="Nº da conta" 
                  required
                  value={accountNum} 
                  onChange={e => setAccountNum(e.target.value)}
                 />

                 <Register type="submit">
                  <p id="button" className="button-log">Cadastrar Conta</p>
                 </Register>
                 

                </InputList>
                </form>
            </InputContainer>

         </div>

        </AccountsContainer>
    )
}


const AccountsContainer = styled.div`
    display: flex;
    justify-content: center;
    aligh-itens: center;
    width: 100%;
    min-height: 80vh;
    background-color: #11DCE6;
    .container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        aligh-itens: center;
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
      @media (max-width: 700px) {
        .container {
          height:70vh;
          margin-top: 20%;
        }
`

const InputContainer = styled.ul`
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #05AFFC;
        border-radius: 10px;  
        margin-bottom: 6px;
        outline: none;
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 400;  
        font-size: 20px;
        color: #05AFFC;
        ::placeholder {
            font-family: 'Quicksand', sans-serif;
            font-style: normal;
            font-weight: 400;
            padding-left:15px;
            margin-left: 12px;
            color: #05AFFC;
            font-weight: 400;
            font-size: 20px;
        }
        `

const InputList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
.register-text{
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
   font-size: 22px;
   margin-top: 80px;
   margin-bottom: 20px;
   color: #05AFFC;
}
`

const Register = styled.button` 
        width: 230px;
        height: 45px;
        background-color: #05AFFC;
        border: 10px solid #05AFFC;
        border-radius: 25px; 
        margin-top: 19px; 
        margin-bottom: 6px;  
        font-family: 'Quicksand', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
             
        `
     
    