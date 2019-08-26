```js
// gcd :: Int -> Int -> Int
const gcd = x => y => {
    const
        _gcd = (a, b) => (0 === b ? a : _gcd(b, a % b)),
        abs = Math.abs;
    return _gcd(abs(x), abs(y));
};
```