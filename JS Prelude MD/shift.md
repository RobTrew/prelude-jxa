```js
// shift :: Int -> [a] -> [a]
const shift = (n, xs) => {
    const lng = length(xs);
    return Infinity > lng ? (
        take(lng, drop(n, cycle(xs)))
    ) : (drop(n, xs), xs);
};
```