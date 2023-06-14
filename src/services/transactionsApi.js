import api from './api';

export async function getMonthlyBalance() {
  const response = await api.get('/transactions/monthly');
  
  return response.data;
}


export async function getHalfYearBalance() {
  const response = await api.get('/transactions/halfyear');
  
  return response.data;
}

export async function getAccountByID(bankId) {
  
  const response = await api.post(`/transactions/bybank`, {
    bankId
  });
  
  return response.data;
}