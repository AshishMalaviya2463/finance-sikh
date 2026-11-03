import { positive } from './validation';

export interface SwpInput { initialCorpus: number; monthlyWithdrawal: number; annualRate: number; years: number }

export function calculateSwp(input: SwpInput) {
  const error = positive(input.initialCorpus, 'Initial corpus') || positive(input.monthlyWithdrawal, 'Monthly withdrawal') || positive(input.annualRate, 'Annual return', true) || positive(input.years, 'Duration');
  if (error) throw new Error(error);

  let balance = input.initialCorpus;
  let withdrawn = 0;
  let depletedMonth: number | undefined;
  const monthlyValues: number[] = [balance];
  const rate = input.annualRate / 1200;
  const months = input.years * 12;

  for (let month = 1; month <= months; month++) {
    const grown = balance * (1 + rate);
    const actual = Math.min(input.monthlyWithdrawal, grown);
    balance = grown - actual;
    withdrawn += actual;
    monthlyValues.push(balance);
    if (actual < input.monthlyWithdrawal) {
      depletedMonth = month;
      break;
    }
  }

  return { remainingCorpus: balance, totalWithdrawn: withdrawn, depletedMonth, monthlyValues };
}
