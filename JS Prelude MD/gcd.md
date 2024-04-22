```javascript
// gcd :: Integral a => a -> a -> a
const gcd = x =>
    y => {
        const zero = x.constructor(0);
        const go = (a, b) =>
            zero === b
                ? a
                : go(b, a % b);

        return go(abs(x), abs(y));
    };
```