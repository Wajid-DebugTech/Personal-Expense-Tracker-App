import type { Expense } from "../types/expense";
import {
    STORAGE_KEYS,
    getItem,
    setItem,
} from "../services/storageService";
import mockData from "./mockData.json";

const seedExpenses = mockData as Expense[];

export async function seedIfNeeded(): Promise<void> {
    const existing = await getItem<Expense[]>(STORAGE_KEYS.expenses);
    if (existing === null) {
        await setItem(STORAGE_KEYS.expenses, seedExpenses);
    }
}

export async function resetToSeed(): Promise<void> {
    await setItem(STORAGE_KEYS.expenses, seedExpenses);
}