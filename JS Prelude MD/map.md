```js
// map :: (a -> b) -> [a] -> [b]
const map = f =>
    // The list obtained by applying f to each element of xs.
    // (The image of xs under f).
    xs => (Array.isArray(xs) ? (
        xs
    ) : xs.split('')).map(f);
```