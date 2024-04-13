export type Expense = {
  id: string;
  title: string;
  amount: number;
  date: Date;
};

export type Statistic = {
  minAmount: number;
  maxAmount: number;
  sum: number;
  mean: number;
};
