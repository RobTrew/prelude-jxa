```js
// gcd :: Int -> Int -> Int
const gcd = (x, y) => {
    const _gcd = (a, b) => (b === 0 ? a : _gcd(b, a % b));
    return _gcd(Math.abs(x), Math.abs(y));
};
```