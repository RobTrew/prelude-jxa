```js
// The first argument is a sample of the type
// allowing the function to make the right mapping
```

```js
// toEnum :: a -> Int -> a
const toEnum = e => x =>
    ({
        'number': Number,
        'string': String.fromCodePoint,
        'boolean': Boolean,
        'object': v => e.min + v
    } [typeof e])(x);
```