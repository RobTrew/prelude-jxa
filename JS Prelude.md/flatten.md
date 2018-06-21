```js
// flatten :: NestedList a -> [a]
const flatten = t =>
    Array.isArray(t) ? (
        [].concat.apply([], t.map(flatten))
    ): t;
```