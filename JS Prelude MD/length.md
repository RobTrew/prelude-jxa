```js
// length :: [a] -> Int
const length = xs =>
    // Returns Infinity over objects without 
    // finite length, enabling zip and zipWith
    // to choose the shorter argument when one 
    // is non-finite, like a cycle or repeat.
    'GeneratorFunction' !== (
        xs.constructor.constructor.name
    ) ? xs.length : Infinity;
```