```javascript
// gcd :: Int -> Int -> Int
const gcd = x =>
    y => {
        const
            _gcd = (a, b) => (0 === b ? a : _gcd(b, a % b)),
            absolute = Math.abs;

        return _gcd(absolute(x), absolute(y));
    };
```