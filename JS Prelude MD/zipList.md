```js
// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const n = Math.min(xs.length, ys.length);
    return xs.slice(0, n).map(
        (x, i) => Tuple(x)(ys[i])
    );
};
```