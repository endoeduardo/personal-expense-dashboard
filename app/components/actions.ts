'use server';

export async function registerExpense(formData: FormData): Promise<void>  {

  const title = formData.get("title") as string;
  const amount = parseFloat(formData.get("amount") as string);
  const type = formData.get("type") as string;
  const description = formData.get("description") as string;

  // Here you would typically send the data to your backend or database
  // For demonstration, we will just log it to the console
  console.log({
    title,
    amount,
    type,
    description,
  });

  // Return a response or redirect
//   return { success: true, message: "Expense registered successfully!" };
}