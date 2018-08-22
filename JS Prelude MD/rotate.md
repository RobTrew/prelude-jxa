```js
// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const
        lng = xs.length,
        d = 0 > n ? (
            (-n) % lng
        ) : lng - (n % lng);
    return drop(d, xs).concat(take(d, xs));
};
```