export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  recurrence: string;
  paymentMethod: string;
  notes?: string;
}