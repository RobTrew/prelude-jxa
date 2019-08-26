```js
// map :: (a -> b) -> [a] -> [b]
const map = f => xs =>
    (Array.isArray(xs) ? (
        xs
    ) : xs.split('')).map(f);
```