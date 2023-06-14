import useAsync from '../useAsync';
import * as transactionsApi from '../../services/transactionsApi';

export default function useMonthlyBalanceInfo() {

  const {
    data: monthlyBalance,
    loading: monthlyBalanceLoading,
    error: monthlyBalanceError,
    act: getMonthlyBalance
  } = useAsync(() => transactionsApi.getMonthlyBalance());  
  return {
    monthlyBalance,
    monthlyBalanceLoading,
    monthlyBalanceError,
    getMonthlyBalance
  };
}
  
