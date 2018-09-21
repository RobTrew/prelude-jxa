```js
// cons :: a -> [a] -> [a]
const cons = (x, xs) =>
    Array.isArray(xs) ? (
        [x].concat(xs)
    ) : (x + xs);
```