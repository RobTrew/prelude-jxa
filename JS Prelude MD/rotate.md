```js
// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const lng = xs.length;
    return Infinity > lng ? (
        take(lng, drop(lng - n, cycle(xs)))
    ) : undefined;
};
```