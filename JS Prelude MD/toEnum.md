```js
// toEnum :: Type -> Int -> a
const toEnum = t => x => {
    const dct = {
        'number': Number,
        'string': String.fromCodePoint,
        'boolean': Boolean
    };
    return t in dct ? (
        dct[t](x)
    ) : t[t[x]]
};
```