```javascript
// zip :: [a] -> [b] -> [(a, b)]
const zip = xs =>
    // The paired members of xs and ys, up to
    // the length of the shorter of the two lists.
    ys => Array.from({
        length: Math.min(xs.length, ys.length)
    }, (_, i) => [xs[i], ys[i]]);
```


```applescript
-- zip :: [a] -> [b] -> [(a, b)]
on zip(xs, ys)
    zipWith(Tuple, xs, ys)
end zip
```