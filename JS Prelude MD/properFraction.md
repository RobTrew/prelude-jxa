```javascript
// properFraction :: Real -> (Int, Real)
const properFraction = n => {
    const i = Math.floor(n) + (n < 0 ? 1 : 0);
    return Tuple(i)(n - i);
};
```