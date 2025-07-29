import { ExpenseForm } from "./components/Form";
import { TransactionsCard } from "./components/TransactionsCard";
import { RegisterTransactionProvider } from "./context/RegisterTransactionContext";

export default function Home() {
  return (
    <>
      <RegisterTransactionProvider>
        <div className="flex flex-col items-center p-8 bg-gray-900 min-h-screen">
          <h1 className="font-bold text-2xl">Personal Expense Tracker</h1>
          <div className="bg-gray-600 p-4 rounded-lg shadow-md mt-4">
            <ExpenseForm />
            <TransactionsCard />
          </div>
        </div>
      </RegisterTransactionProvider>
    </>
  );
}
