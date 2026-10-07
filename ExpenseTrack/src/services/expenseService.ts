import type { Expense } from "../types/expense";
import { STORAGE_KEYS, getItem } from "./storageService";

const LATENCY_MS = 500;

function delay(ms: number = LATENCY_MS): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getExpenses(): Promise<Expense[]> {
    await delay();

    try {
        const expenses = await getItem<Expense[]>(STORAGE_KEYS.expenses);
        return expenses ?? [];
    } catch {
        throw new Error("Could not load expenses. Please try again.");
    }
}