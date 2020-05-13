```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = xs =>
    // Use of `take` and `length` here allows for zipping with non-finite
    // lists - i.e. generators like cycle, repeat, iterate.
    ys => (([xs_, ys_]) => {
        const
            n = Math.min(...[xs_, ys_].map(length)),
            vs = take(n)(ys_);
        return take(n)(xs_).map(
            (x, i) => Tuple(x)(vs[i])
        );
    })([xs, ys].map(list));
```