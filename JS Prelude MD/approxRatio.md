```js
// Epsilon -> Float -> Ratio
```

```js
// approxRatio :: Float -> Float -> Ratio
const approxRatio = eps => n => {
  const
    gcde = (e, x, y) => {
      const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
      return _gcd(abs(x), abs(y));
    },
    c = gcde(Boolean(eps) ? eps : (1 / 10000), 1, abs(n)),
    r = ratio(quot(abs(n))(c))(quot(1, c));
  return {
    type: 'Ratio',
    n: r.n * signum(n),
    d: r.d
  };
};
```