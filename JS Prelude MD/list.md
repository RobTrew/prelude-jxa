```js
// list :: StringOrArrayLike b => b -> [a]
const list = xs =>
    Array.isArray(xs) ? (
        xs
    ) : Array.from(xs);
```