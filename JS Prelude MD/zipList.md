```js
// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const
        lng = Math.min(length(xs), length(ys)),
        vs = take(lng)(ys);
    return take(lng)(xs)
        .map((x, i) => Tuple(x)(vs[i]));
};
```