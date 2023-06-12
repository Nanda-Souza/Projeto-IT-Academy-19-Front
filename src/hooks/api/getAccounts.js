import useAsync from '../useAsync';
import * as accountsApi from '../../services/accountsApi';

export default function useAccountsInfo() {

  const {
    data: accounts,
    loading: accountsLoading,
    error: accountsError,
    act: getAccounts
  } = useAsync(() => accountsApi.getAccountsInfo());  
  return {
    accounts,
    accountsLoading,
    accountsError,
    getAccounts
  };
}
  
