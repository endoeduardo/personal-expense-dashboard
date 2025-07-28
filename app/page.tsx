import { ExpenseForm } from "./components/Form";


export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl">Personal Expense Tracker</h1>
        <div className="bg-gray-600 p-4 rounded-lg shadow-md mt-4">
          <ExpenseForm />
        </div>
      </div>
    </>
  );
}
