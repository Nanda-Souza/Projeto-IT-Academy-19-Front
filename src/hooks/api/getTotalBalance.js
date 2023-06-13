import useAsync from '../useAsync';
import * as accountsApi from '../../services/accountsApi';

export default function useTotalBalanceInfo() {

  const {
    data: totalBalance,
    loading: totalBalanceLoading,
    error: totalBalanceError,
    act: getTotalBalance
  } = useAsync(() => accountsApi.getTotalBalance());  
  return {
    totalBalance,
    totalBalanceLoading,
    totalBalanceError,
    getTotalBalance
  };
}
  
