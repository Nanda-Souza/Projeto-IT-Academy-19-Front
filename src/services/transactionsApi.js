import api from './api';

export async function getMonthlyBalance() {
  const response = await api.get('/transactions/monthly');
  console.log(response.data);
  return response.data;
}