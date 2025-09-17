```javascript
// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n =>
    // xs split into sublists of length n.
    // The last sublist will be short if n
    // does not evenly divide the length of xs .
    xs => {
        const pair = xs.reduce(
            ([chunks, ks], x, i) =>
                0 < i && 0 === i % n
                    ? [chunks.concat([ks]), [x]]
                    : [chunks, ks.concat(x)],
            [[], []]
        );

        return pair[0].concat([pair[1]])
    };
```