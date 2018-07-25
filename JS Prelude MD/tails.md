```js
// tails :: [a] -> [[a]]
const tails = xs => {
    const
        es = ('string' === typeof xs) ? (
            xs.split('')
        ) : xs;
    return es.map((_, i) => es.slice(i))
        .concat([
            []
        ]);
};
```