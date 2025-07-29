'use server';
import { PrismaClient } from '@prisma/client';

export async function registerExpense(formData: FormData): Promise<void>  {
    
    const title = formData.get("title") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const type = formData.get("type") as string;
    const description = formData.get("description") as string;
    const prisma = new PrismaClient();
    
    await prisma.expense.create({
        data: {
            title,
            amount,
            type,
            description,
        },
    });

}

export async function getTransactions(): Promise<any[]> {
    const prisma = new PrismaClient();
    const transactions = await prisma.expense.findMany();
    return transactions;
}
