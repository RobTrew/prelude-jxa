```js
// Returns Infinity over objects without finite length
// this enables zip and zipWith to choose the shorter
// argument when one is non-finite, like cycle, repeat etc
```

```js
// length :: [a] -> Int
const length = xs =>
    (Array.isArray(xs) || 'string' === typeof xs) ? (
        xs.length
    ) : Infinity;
```