import { describe, it, expect } from 'vitest';
import { calculateTotal } from './calculateTotal';

describe('calculateTotal', () => {
  it('should sum numbers separated by commas', () => {
    expect(calculateTotal("1,2,3")).toBe(6);
  });

  it('should sums numbers separated by new lines', () => {
    expect(calculateTotal("1\n2\n3")).toBe(6);
  });

  it('should sum numbers with mixed commas and new lines', () => {
    expect(calculateTotal("1,2\n3")).toBe(6);
  });

  it('should trim whitespace and still works', () => {
    expect(calculateTotal(" 1 ,  2\n 3 ")).toBe(6);
  });

  it('returns 0 if there are non-numeric values', () => {
    expect(calculateTotal("1,2,abc")).toBe(0);
  });

  it('returns 0 for empty string', () => {
    expect(calculateTotal("")).toBe(0);
  });

  it('ignores extra commas or newlines', () => {
    expect(calculateTotal(",1,,2,\n\n3")).toBe(6);
  });

  it('handles decimal numbers', () => {
    expect(calculateTotal("1.5, 2.25")).toBeCloseTo(3.75);
  });
});
