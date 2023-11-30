import AsyncStorage from '@react-native-async-storage/async-storage';
import * as type from './interfaces';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const currentBalanceStore = create<type.CurrentBalanceProps>()(
  persist(
    (set) => ({
      currentBalance: 0,
      setCurrentBalance: (value: number) => set(() => ({ currentBalance: value })),
      setDefault: () => set(() => ({
        currentBalance: 0,
      })),
    }),
    {
      name: 'current-balance-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const cashInReportStore = create<type.CashInReportProps>()(
  persist(
    (set) => ({
      cashInReportData: [],
      setCashInReportData: (data: any) => set((state) => ({ cashInReportData: [...state.cashInReportData, data] })),
      setDefault: () => set(() => ({
        cashInReportData: [],
      })),
    }),
    {
      name: 'cash-in-report-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export const expensesListStore = create<type.ExpensesListProps>()(
  persist(
    (set) => ({
      expensesData: [],
      setExpensesData: (data: any) => set((state) => ({ expensesData: [...state.expensesData, data] })),
      setDefault: () => set(() => ({
        expensesData: [],
      })),
    }),
    {
      name: 'expenses-list-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
