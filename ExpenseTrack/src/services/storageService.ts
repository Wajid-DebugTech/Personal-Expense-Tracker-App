import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
    expenses: "@expense_tracker/expenses",
} as const;

export async function getItem<T>(key: string): Promise<T | null> {
    let raw: string | null;
    try {
        raw = await AsyncStorage.getItem(key);
    } catch {
        throw new Error(`Failed to read "${key}" from storage`);
    }

    if (raw === null) return null;

    try {
        return JSON.parse(raw) as T;
    } catch {
        throw new Error(`Stored data for "${key}" is corrupted`);
    }
}

export async function setItem<T>(key: string, value: T): Promise<void> {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch {
        throw new Error(`Failed to write "${key}" to storage`);
    }
}

export async function removeItem(key: string): Promise<void> {
    try {
        await AsyncStorage.removeItem(key);
    } catch {
        throw new Error(`Failed to remove "${key}" from storage`);
    }
}