```js
// length :: [a] -> Int
const length = xs =>
    // Returns Infinity over objects without finite 
    // length. This enables zip and zipWith to choose 
    // the shorter argument when one is non-finite, 
    // like cycle, repeat etc
    (Array.isArray(xs) || 'string' === typeof xs) ? (
        xs.length
    ) : Infinity;
```