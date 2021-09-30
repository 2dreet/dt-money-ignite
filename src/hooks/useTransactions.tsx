import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface TransactionContextProviderProps {
  // tipagem para children
  children: ReactNode;
}

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

// aqui definimos a tipagem omitindo alguns atributos
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

// aqui definimos a tipagem com quais atributos queremos
// type TransactionInput = Pick<Transaction, 'title' | 'amount'>;

interface TransactionContextProps {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>,
}

const TransactionContext = createContext<TransactionContextProps>({} as TransactionContextProps);

export function TransactionContextProvider({ children }:TransactionContextProviderProps){

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(()=>{
    api.get('transactions')
    .then( response => setTransactions(response.data.transactions))
  }, []);

  // aqui criamos a funcao de criar uma nova transacao e passamos para o contexto
  async function createTransaction(newTransaction: TransactionInput){
    const response = await api.post('transactions', newTransaction)
    const { transaction } = response.data
    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionContext.Provider>
  );
}


// aqui criamos um Hook para facilitar a utilização
// sem precisar importar o useContext e o TransactionContext
// em todos os componentes que precisarem utilizar o contexto de transacao
export function useTransactions() {
  const context = useContext(TransactionContext);

  return context;
}