import {create} from 'zustand';
import * as type from './interfaces';

export const cashInModalStore = create<type.CashInModalProps>(set => ({
  isVisible: false,
  setIsVisible: (value: boolean) => set(() => ({isVisible: value})),
}));

export const addExpenseModalStore = create<type.AddExpenseModalProps>(set => ({
  isVisible: false,
  setIsVisible: (value: boolean) => set(() => ({isVisible: value})),
}));
