import type { Expense } from "../types/expense";

export interface Period {
    year: number;
    month: number;
}

const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// uses local time
export function getPeriodOf(isoDate: string): Period {
    const d = new Date(isoDate);
    return { year: d.getFullYear(), month: d.getMonth() };
}

// most recent month that has data, falls back to the current month if empty
export function getLatestPeriod(expenses: Expense[]): Period {
    if (expenses.length === 0) return getPeriodOf(new Date().toISOString());

    return expenses
        .map((e) => getPeriodOf(e.date))
        .reduce((latest, p) =>
            p.year * 12 + p.month > latest.year * 12 + latest.month ? p : latest,
        );
}

export function filterByPeriod(
    expenses: Expense[],
    period: Period,
): Expense[] {
    return expenses.filter((e) => {
        const p = getPeriodOf(e.date);
        return p.year === period.year && p.month === period.month;
    });
}

export function getTotal(expenses: Expense[]): number {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
}

export function getTopCategory(expenses: Expense[]): string | null {
    const totals: Record<string, number> = {};
    for (const e of expenses) {
        totals[e.category] = (totals[e.category] ?? 0) + e.amount;
    }

    let top: string | null = null;
    let topTotal = -Infinity;
    for (const [category, total] of Object.entries(totals)) {
        if (total > topTotal) {
            top = category;
            topTotal = total;
        }
    }
    return top;
}

export function formatPeriod(period: Period): string {
    return `${MONTH_NAMES[period.month]} ${period.year}`;
}

export function formatCurrency(amount: number): string {
    const [whole, decimals] = amount.toFixed(2).split(".");
    return `$${whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimals}`;
}