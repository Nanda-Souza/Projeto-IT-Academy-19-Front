import api from './api';

export async function getAccountsInfo() {
  const response = await api.get('/accounts');  

  return response.data;
}

export async function getTotalBalance() {
  const response = await api.get('/accounts');

  const accountsData = response.data;

  let totalBalance = 0;
  
  for (let i = 0; i < accountsData.length; i++) { 
    totalBalance += accountsData[i].balance;    
  } 

  return totalBalance;
}

export async function delBankAccountById(bankId) {
  
  const response = await api.delete(`/accounts/${Number(bankId)}`);
  
  return response.data;
}


export async function createBankAccount(bank, agency, accountNum) {
  
  const response = await api.post(`/accounts`, {
    bank,
    agency,
    accountNum
  });
  
  return response.data;
}
