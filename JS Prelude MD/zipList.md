```javascript
// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const
        n = Math.min(length(xs), length(ys)),
        vs = take(n)(list(ys));

    return take(n)(list(xs))
        .map((x, i) => Tuple(x)(vs[i]));
};
```