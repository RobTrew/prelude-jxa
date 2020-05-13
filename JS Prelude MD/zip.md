```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = xs =>
    // Use of `take` and `length` here allows for zipping with non-finite
    // lists - i.e. generators like cycle, repeat, iterate.
    ys => ((xs_, ys_) => {
        const
            lng = Math.min(length(xs_), length(ys_)),
            vs = take(lng)(ys_);
        return take(lng)(xs_).map(
            (x, i) => Tuple(x)(vs[i])
        );
    })(list(xs), list(ys));
```