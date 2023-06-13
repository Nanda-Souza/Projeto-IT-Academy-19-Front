import styled from "styled-components";
import { useState, useEffect } from 'react';
import useAccountsInfo from "../../hooks/api/getAccounts";
import { mergeBankAccounts } from "../../services/accountsApi";

export default function ScreenMerge(){
    const { accounts, getAccounts } = useAccountsInfo();
    const [accountsData, setAccountsData] = useState([]);
    const [accountId, setAccountId] = useState('');
    const [mergedId, setMergedId] = useState('');        

    useEffect(() => {
        if (accounts) {
            setAccountsData(accounts);
        }        
      }, [accounts]);

    const selectedAccountId = (event) => {
        setAccountId(event.target.value);        
    };

    const selectedMergeId = (event) => {
        setMergedId(event.target.value);      
    };

    async function mergeAccounts(){
        if (accountId == 0 || mergedId == 0) {
            alert("Favor selecionar duas contas a serem mescladas!")
        } else if (accountId === mergedId) {
            alert("As contas selecionas devem ser diferentes!")
        } else {
            try {
                const confirmation = window.confirm("Todos os dados da conta primeira conta e suas transaçõe serão mesclados na segunda conta, deseja prosseguir?");
                
                if (confirmation){
                    console.log(confirmation);
                    await mergeBankAccounts(parseInt(accountId), parseInt(mergedId));
                    const AccountList = await getAccounts();
                    setAccountsData(AccountList);
                }
            } catch (err) {
                alert('Não foi mesclar as conta bancária!');
        }
          
           
        }         
    }
          
    return (
        <Join>
             
         <div className="container">
                
            <MergeContainer>
             
                <MergeList>

                 <p className="merge-text">Mesclar Contas</p>

                 
                  <select value={mergedId} onChange={selectedMergeId} class="ui-dropdown">
                   <option value="0">Selecione uma conta</option>
                   {accountsData.map((account, index) => ( 
                    <option key={index} value={account.id}>{account.bank} {account.agency} {account.accountNum}</option>
                   ))}                   
                  </select>
                
                  <select value={accountId} onChange={selectedAccountId} class="ui-dropdown">
                   <option value="0">Selecione outra conta</option> 
                   {accountsData.map((account, index) => ( 
                    <option key={index} value={account.id}>{account.bank} {account.agency} {account.accountNum}</option>
                   ))}
                  </select>
                      

                 <Merge onClick={mergeAccounts}>
                  <p id="button" className="button-log">Mesclar Contas</p>
                 </Merge>


                </MergeList>

            </MergeContainer>

         </div>

        </Join>
    )
}


const Join = styled.div`
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

const MergeContainer = styled.ul`
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

const MergeList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
.merge-text{
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
   font-size: 22px;
   margin-top: 80px;
   margin-bottom: 20px;
   color: #05AFFC;
}
.ui-dropdown{
    width:300px;
    height:50px;
    margin-bottom:6px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
    font-size: 18px;
    border-radius: 10px;
    border-color: #05AFFC;
    color: #05AFFC;
    background-color: #FFFFFF;
}

`

const Merge = styled.li` 
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
        
