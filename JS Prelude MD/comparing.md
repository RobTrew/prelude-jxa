```javascript
// comparing :: Ord a => (b -> a) -> b -> b -> Ordering
const comparing = f =>
    // The ordering of f(x) and f(y) as a value
    // drawn from {-1, 0, 1}, representing {LT, EQ, GT}.
    x => y => {
        const
            a = f(x),
            b = f(y);

        return a < b
            ? -1
            : a > b
                ? 1
                : 0;
    };
```