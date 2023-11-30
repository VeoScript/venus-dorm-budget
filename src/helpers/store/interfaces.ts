export interface CashInModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

export interface AddExpenseModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

export interface CurrentBalanceProps {
  currentBalance: number;
  setCurrentBalance: (value: number) => void;
  setDefault: () => void;
}

export interface CashInReportProps {
  cashInReportData: any[];
  setCashInReportData: (data: any) => void;
  setDefault: () => void;
}

export interface ExpensesListProps {
  expensesData: any[];
  setExpensesData: (data: any) => void;
  setDefault: () => void;
}
