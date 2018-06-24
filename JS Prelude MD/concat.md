```js
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    xs.length > 0 ? (() => {
        const unit = 'string' === typeof xs[0] ? '' : [];
        return unit.concat.apply(unit, xs);
    })() : [];
```