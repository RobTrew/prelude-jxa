```js
// headDef :: a -> [a] -> a
const headDef = v =>
    // The first item of a non-empty list,
    // or a default value if the list is empty.
    xs => 0 < xs.length ? (
        xs[0]
    ) : v;
```