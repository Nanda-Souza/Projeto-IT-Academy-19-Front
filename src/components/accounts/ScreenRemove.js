import styled from "styled-components"
import { useState, useEffect } from 'react';
import useAccountsInfo from "../../hooks/api/getAccounts";
import { delBankAccountById } from "../../services/accountsApi";

export default function ScreenAccounts(){
    const { accounts, getAccounts } = useAccountsInfo();
    const [accountsData, setAccountsData] = useState([]);    

    useEffect(() => {
        if (accounts) {
            setAccountsData(accounts);
        }        
      }, [accounts]);

      async function deleteAccount(id){
        const confirmation = window.confirm("Todos os dados da conta serão excluídos, deseja prosseguir? ");
        
        if (confirmation){
            await delBankAccountById(id);
            const AccountList = await getAccounts();
            setAccountsData(AccountList);
        }        
    }
  
    return (
        <RemoveContainer>
            <div className="container">
                
             <Remove>
             
             <RemoveList>

             <p className="remove-text">Remover Conta</p>

             {accountsData.map((account, index) => (
			    <div key={index} className={index % 2 === 0 ? 'bank-remove' : 'remove-bank'}>
                    <p className="balance">{account.bank}</p>
                    <p className="total"><span><img src="assets/trash.png" onClick={() => deleteAccount(account.id)} alt=""/></span></p>
                </div>
            ))}

             </RemoveList>

             </Remove>

            </div>

        </RemoveContainer>
    )
}


const RemoveContainer = styled.div`
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
        .bank-remove{
            width: 83vw;; 
            height: 45px;
            background-color:#05AFFC;
            display: flex;
            justify-content: space-between;
        }
        .remove-bank{
            width: 83vw; 
            height: 45px;
            background-color:#11DCE6;
            display: flex;
            justify-content: space-between;
        }
        .balance{
            font-weight: 700;
            margin-left:10px;
            margin-right: 10px;
            margin-top:10px;
            color:#ffffff;
        }
        .total{
            font-weight: 700;
            margin-left:10px;
            margin-right: 10px;
            margin-top:10px;
            color:#ffffff;
        }
        @media (max-width: 700px) {
            .container {
              height:70vh;
              margin-top: 20%;
            }
`

const Remove = styled.ul`
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

const RemoveList = styled.li`
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
.remove-text{
   font-family: 'Quicksand', sans-serif;
   font-weight: 600;
   font-size: 22px;
   margin-top: 20px;
   margin-bottom: 30px;
   color: #05AFFC;
}

`
