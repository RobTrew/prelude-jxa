```js
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs => (
    ys => 0 < ys.length ? (
        ys.every(x => 'string' === typeof x) ? (
            ''
        ) : []
    ).concat(...ys) : ys
)(list(xs));
```