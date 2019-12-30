```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = xs =>
    // Use of `take` and `length` here allows for zipping with non-finite 
    // lists - i.e. generators like cycle, repeat, iterate.
    ys => {
        const
            lng = Math.min(length(xs), length(ys)),
            vs = take(lng)(ys);
        return take(lng)(xs).map(
            (x, i) => Tuple(x)(vs[i])
        );
    };
```