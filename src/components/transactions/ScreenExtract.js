import styled from "styled-components"
import { useState, useEffect, useContext } from 'react';
import { BankIdContext } from "../../contexts/bankContext";


export default function ScreenExtract(){
    const { bankAccountId } = useContext(BankIdContext);
    const [accountsData, setAccountsData] = useState([]);
    const [totalBalance, setTotalBalance] = useState(0);    

    useEffect(() => {
        if (bankAccountId) {
          setAccountsData(bankAccountId);
          calculateTotalBalance(bankAccountId);          
        }
      }, [bankAccountId]);
    
      const calculateTotalBalance = (accounts) => {
        const total = accounts.reduce((sum, account) => sum + parseFloat(account.value), 0);
        setTotalBalance(total);      
      };      
   
    return (
        <ExtractContainer>
             
            <div className="container">

             <div className="list-data">
                <ul>
                    <li><span className="blue">DATA</span></li>
                    {accountsData.map((account, index) => ( 
                        <li><span key={index} className="gray">{account.date}</span></li>                    
                   ))}                                        
                </ul>

                 <div className="vertical-line"></div>

                <ul className="agence">
                    <li><span className="blue">TIPO</span></li>
                    {accountsData.map((account, index) => (
                        <li><span key={index} className={account.type ===  "Receita" ? 'gain' : 'expense'}>{account.type}</span></li>			    
                    ))}     
                </ul>

                 <div className="vertical-line"></div>

                 <ul className="agence">
                    <li><span className="blue">CATEGORIA</span></li>
                    {accountsData.map((account, index) => (
                        <li><span key={index} className="gray">{account.category}</span></li>                    
                    ))}
                </ul>

                 <div className="vertical-line"></div>


                <ul className="numeber-Account">
                    <li><span className="blue">DESCRIÇÃO</span></li>
                    {accountsData.map((account, index) => (
                        <li><span key={index} className="gray">{account.description}</span></li>                    
                    ))}
                </ul>

                 <div className="vertical-line"></div>

                <ul className="value">
                    <li><span className="blue">VALOR</span></li>
                    {accountsData.map((account, index) => (
                        <li><span key={index} className="gray">{account.value}</span></li>                    
                    ))}                    
                    
                </ul>
                <div className="vertical-line"></div>

                <ul className="value">
                    <li><span className="blue">SALDO</span></li>
                    <li><span className="gain">3000,00</span></li>
                    <li><span className="gain">2932,40</span></li>
                    
                    
                </ul>

             </div>

          
             <div className="total-balance">
                <p className="balance">SALDO TOTAL</p>
                <p className="total"><span>{totalBalance.toFixed(2)}</span></p>
             </div>

            </div>

        </ExtractContainer>
    )
}

const ExtractContainer = styled.div`
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
    .vertical-line {
        border-left: 1px solid ;
        border-left-color: #11DCE6;
    } 
    .blue{
        color:#0595F2;
        font-weight: 700;
    }
    .gray{
        color:#787373;
        font-weight: 500;
    }
    .expense{
        color:#C70000;
    } 
    .gain{
        color:#03AC00; 
    }       
    .list-data{
        width: 100%;
        min-height: 55vh;
        display: flex;
        margin-left:25px;
        margin-right: 25px;
        margin-top:23px;
        flex-direction: collunm;
        justify-content: space-between;
        text-align: center;
    }
    .gray{
        text-align: center;
    }
    .total-balance{
        width: 100%; 
        height: 45px;
        background-color:#05AFFC;
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
          font-size:12px;
        }
     `
     
    