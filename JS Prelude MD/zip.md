```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = xs => ys =>
    // The paired members of xs and ys, up to
    // the length of the shorter of the two lists.
    Array.from({
        length: Math.min(xs.length, ys.length)
    }, (_, i) => Tuple(xs[i])(ys[i]));
```