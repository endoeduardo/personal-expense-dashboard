'use client'
import { useContext } from "react";
import { useRegisterTransactionContext } from "../context/RegisterTransactionContext";

export function TransactionsCard() {
    const { transactions } = useRegisterTransactionContext();
    if (!transactions) {
        return <p className="text-gray-300">Loading transactions...</p>;
    }
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