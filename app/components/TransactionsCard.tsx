'use client'
import { useEffect, useState } from "react";
import { getTransactions } from "./actions";

type Transaction = {
    id: string;
    title: string;
    amount: number;
    type: string;
    description: string;
    // adicione os campos conforme o modelo do Prisma
};

export function TransactionsCard() {
    const [buttonClicks, setButtonClicks] = useState(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const handleButtonClick = () => {
        setButtonClicks(buttonClicks + 1);
        console.log("Button clicked", buttonClicks);
    };


    useEffect(() => {
        // Fetch transactions from the server or any other source
        console.log("Fetching transactions...");
        const fetchTransactions = async () => {
            const newTransactions = await getTransactions();
            setTransactions(newTransactions);
        };

        fetchTransactions();
    }, [buttonClicks]);

    return (
        <>
        {(transactions.length > 0) ? (
            <div className="overflow-x-auto mt-4 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 bg-gray-800 rounded-lg shadow-md border-separate" style={{ borderSpacing: 0 }}>
                    <thead className="bg-gray-700 border-b border-gray-600 border-radius-t-lg">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Description</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                        {transactions.map((transaction) => (
                            <tr
                                key={transaction.id}
                                className={`hover:bg-gray-700 transition-colors ${transaction.amount < 0 ? 'bg-red-900/60' : ''}`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{transaction.title}</td>
                                <td className={`px-6 py-4 whitespace-nowrap text-sm ${transaction.amount < 0 ? 'text-red-400 font-bold' : 'text-gray-100'}`}>{transaction.amount}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{transaction.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">{transaction.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : (
            <p className="text-gray-300">No transactions available.</p>
        )}
        </>
    );
}