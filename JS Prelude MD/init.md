```js
// init :: [a] -> [a]
const init = xs => (
    // All elements of a list except the last.
    ys => 0 < ys.length ? (
        ys.slice(0, -1)
    ) : undefined
)(list(xs));
```