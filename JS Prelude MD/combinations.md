```javascript
// combinations :: Int -> [a] -> [[a]]
const combinations = n =>
    // All combinations, without repetition,
    // of n items drawn from xs.
    xs => {
        const go = (m, ys) =>
            1 > m ? [
                []
            ] : 0 === ys.length ? (
                []
            ) : ((h, tail) => go(m - 1, tail)
                .map(t => [h].concat(t))
                .concat(go(m, tail))
            )(ys[0], ys.slice(1));

        return (go)(n, xs);
    };
```