export const formatINR = (value: number) => {
  if (!Number.isFinite(value)) return 'Not available';
  if (Math.abs(value) >= 1e15) return `₹${value.toExponential(2)}`;
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
};
