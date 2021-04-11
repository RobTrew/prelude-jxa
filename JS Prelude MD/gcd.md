```javascript
// gcd :: Integral a => a -> a -> a
const gcd = x =>
    y => {
        const zero = x.constructor(0);
        const _gcd = (a, b) =>
            zero === b ? (
                a
            ) : _gcd(b, rem(a)(b));

        return _gcd(abs(x), abs(y));
    };
```