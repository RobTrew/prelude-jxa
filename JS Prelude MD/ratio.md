```javascript
// ratio :: Int -> Int -> Ratio Int
const ratio = x => y => {
  const go = (x, y) =>
    0 !== y ? (() => {
      const d = gcd(x)(y);
      return {
        type: 'Ratio',
        'n': quot(x)(d), // numerator
        'd': quot(y)(d) // denominator
      };
    })() : undefined;
  return go(x * signum(y), abs(y));
};
```