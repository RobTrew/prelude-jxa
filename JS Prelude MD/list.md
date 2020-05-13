```js
// list :: StringOrArrayLike b => b -> [a]
const list = xs =>
    // xs itself, if it is an Array, 
    // or an Array derived from xs.
    Array.isArray(xs) ? (
        xs
    ) : Array.from(xs);
```