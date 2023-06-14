import { createContext, useState } from "react";

const BankIdContext = createContext();

const BankProvider = ({ children }) => {
  const [bankAccountId, setBankAccountId] = useState(0);

  const updateBankAccount = (newValue) => {
    setBankAccountId(newValue);
  };

  return (
    <BankIdContext.Provider value={{bankAccountId, updateBankAccount}}>
      {children}    
    </BankIdContext.Provider>
  );
};

export { BankIdContext, BankProvider};


