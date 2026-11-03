import { positive } from './validation';

export interface SipInput { monthlyInvestment: number; annualRate: number; years: number; annualStepUpPercent?: number }

export function calculateSip(input: SipInput) {
  const stepUpPercent = input.annualStepUpPercent ?? 0;
  const error = positive(input.monthlyInvestment, 'Monthly investment')
    || positive(input.annualRate, 'Annual return', true)
    || positive(input.years, 'Duration')
    || positive(stepUpPercent, 'Annual step-up', true);
  if (error) throw new Error(error);

  const months = input.years * 12;
  const monthlyRate = input.annualRate / 1200;
  const stepUpRate = stepUpPercent / 100;
  let invested = 0;
  let futureValue = 0;
  const monthlyValues: number[] = [];

  for (let month = 0; month < months; month++) {
    const contribution = input.monthlyInvestment * (1 + stepUpRate) ** Math.floor(month / 12);
    futureValue = futureValue * (1 + monthlyRate) + contribution;
    invested += contribution;
    monthlyValues.push(futureValue);
  }

  return { months, invested, futureValue, gain: futureValue - invested, monthlyValues };
}
