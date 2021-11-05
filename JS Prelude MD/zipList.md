```javascript
// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const
        n = Math.min(length(xs), length(ys)),
        vs = take(n)(ys);

    return take(n)(xs)
        .map((x, i) => Tuple(x)(vs[i]));
};
```