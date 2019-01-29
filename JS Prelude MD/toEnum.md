```js
// The first argument is a sample of the type
// allowing the function to make the right mapping
```

```js
// toEnum :: a -> Int -> a
const toEnum = e => x => {
    const
        m = e.enum,
        f = {
            'number': Number,
            'string': String.fromCodePoint,
            'boolean': Boolean
        } [typeof e];
    return f ? (
        f(x)
    ) : m[m[x]];
};
```