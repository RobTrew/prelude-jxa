```javascript
// combinations :: Int -> [a] -> [[a]]
const combinations = n =>
    // All combinations, without repetition,
    // of n items drawn from xs.
    xs => {
        const go = (m, ys) =>
            1 > m
                ? [[]]
                : 0 === ys.length
                    ? []
                    : (
                        (h, rest) => [
                            ...go(m - 1, rest)
                            .map(t => [h, ...t]),
                            ...go(m, rest)
                        ]
                    )(
                        ys[0], ys.slice(1)
                    );

        return (go)(n, xs);
    };
```