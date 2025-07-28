import Form from "next/form";
import { registerExpense } from "./actions";

export function ExpenseForm() {
    return (
        <Form action={registerExpense} className="space-y-4">
            <div className="flex flex-row space-y-4">
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="title">
                    Título
                    </label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    className="w-full p-2 rounded bg-gray-600"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="amount">
                    Quantidade
                    </label>
                    <input
                    type="number"
                    id="amount"
                    name="amount"
                    className="w-full p-2 rounded bg-gray-600"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white mb-2" htmlFor="type">
                    Tipo
                    </label>
                    <select id="type" name="type" className="w-full p-2 rounded bg-gray-600">
                    <option value="enter">Entrada</option>
                    <option value="exit">Saída</option>
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2" htmlFor="description">
                Descrição da despesa ou receita (opcional)
                </label>
                <textarea
                id="description"
                name="description"
                className="w-full p-2 rounded bg-gray-600"
                />
            </div>
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                    Register Expense
                </button>
            </div>
        </Form>
    )
}