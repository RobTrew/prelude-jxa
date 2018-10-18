```js
// Epsilon -> Real -> Ratio
```

```js
// approxRatio :: Real -> Real -> Ratio
const approxRatio = eps => n => {
  const
    gcde = (e, x, y) => {
      const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
      return _gcd(Math.abs(x), Math.abs(y));
    },
    c = gcde(Boolean(eps) ? eps : (1 / 10000), 1, Math.abs(n)),
    r = ratio(Math.floor(Math.abs(n) / c), Math.floor(1 / c));
  return {
    type: 'Ratio',
    n: r.n * signum(n),
    d: r.d
  };
};
```