// context/ActionContext.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { getTransactions, registerExpense as apiCallToRegisterExpense } from '../components/actions';

type Transaction = {
    id: string;
    title: string;
    amount: number;
    type: string;
    description: string;
    // adicione os campos conforme o modelo do Prisma
};


type ActionContextType = {
  transactions: Transaction[]
  registerExpense: (formData: FormData) => void
}

const RegisterTransactionContext = createContext<ActionContextType | undefined>(undefined)

export function RegisterTransactionProvider({ children }: { children: React.ReactNode }) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        // Fetch transactions from the server or any other source
        console.log("Fetching transactions...");
        const fetchTransactions = async () => {
            const newTransactions = await getTransactions();
            setTransactions(newTransactions);
        };

        fetchTransactions();
    }, []);

    const registerExpense = async (data: FormData) => {
      await apiCallToRegisterExpense(data);
      const updatedTransactions = await getTransactions();
      setTransactions(updatedTransactions); // This triggers a re-render
    };

  return (
    <RegisterTransactionContext.Provider value={{ transactions, registerExpense }}>
      {children}
    </RegisterTransactionContext.Provider>
  )
}

// Custom hook to use the context
export function useRegisterTransactionContext() {
  const context = useContext(RegisterTransactionContext)
  if (!context) throw new Error('useRegisterTransactionContext must be used within RegisterTransactionProvider')
  return context
}
