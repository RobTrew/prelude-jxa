```javascript
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n => {
    // xs split into sublists of length n.
    // The last sublist will be short if n
    // does not evenly divide the length of xs .
    const go = xs => {
        const chunk = xs.slice(0, n);

        return 0 < chunk.length
            ? [chunk].concat(
                go(xs.slice(n))
            )
            : [];
    };

    return go;
};
```