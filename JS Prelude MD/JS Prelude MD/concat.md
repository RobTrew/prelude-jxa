```js
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    xs.length > 0 ? (() => {
        const unit = typeof xs[0] === 'string' ? '' : [];
        return unit.concat.apply(unit, xs);
    })() : [];
```