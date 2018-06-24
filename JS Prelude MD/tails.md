```js
// tails :: [a] -> [[a]]
const tails = xs => {
    const xs_ = ('string' === typeof xs) ? (
        xs.split('')
    ) : xs;
    return xs_.map((_, i) => xs_.slice(i))
        .concat([
            []
        ]);
};
```