import useAsync from '../useAsync';
import * as transactionsApi from '../../services/transactionsApi';

export default function useHalfYearBalanceInfo() {

  const {
    data: halfYearBalance,
    loading: halfYearBalanceLoading,
    error: halfYearBalanceError,
    act: getHalfYearBalance
  } = useAsync(() => transactionsApi.getHalfYearBalance());  
  return {
    halfYearBalance,
    halfYearBalanceLoading,
    halfYearBalanceError,
    getHalfYearBalance
  };
}
  
