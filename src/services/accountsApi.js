import api from './api';

export async function getAccountsInfo() {
  const response = await api.get('/accounts');  

  return response.data;
}

export async function delBankAccountById(bankId) {
  
  const response = await api.delete(`/accounts/${Number(bankId)}`);
  
  return response.data;
}