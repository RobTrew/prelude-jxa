```js
// gcd :: Int -> Int -> Int
const gcd = (x, y) => {
    const _gcd = (a, b) => (0 === b ? a : _gcd(b, a % b));
    return _gcd(Math.abs(x), Math.abs(y));
};
```