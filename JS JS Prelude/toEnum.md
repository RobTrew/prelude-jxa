```js
// toEnum :: a -> Int -> a
const toEnum = e =>
    // The first argument is a sample of the type
    // allowing the function to make the right mapping
    x => ({
        'number': Number,
        'string': String.fromCodePoint,
        'boolean': Boolean,
        'object': v => e.min + v
    } [typeof e])(x);
```