```js
// Epsilon -> Real -> Ratio
```

```js
// approxRatio :: Real -> Real -> Ratio
const approxRatio = (eps, n) => {
    const
        gcde = (e, x, y) => {
            const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
            return _gcd(Math.abs(x), Math.abs(y));
        },
        c = gcde(Boolean(eps) ? eps : (1 / 10000), 1, n);
    return {
        type: 'Ratio',
        n: Math.floor(n / c),
        d: Math.floor(1 / c)
    };
};
```