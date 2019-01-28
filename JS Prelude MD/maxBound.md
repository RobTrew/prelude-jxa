```js
// maxBound :: a -> a
const maxBound = x => {
    const e = x.enum;
    return Boolean(e) ? (
        e[e[x.max]]
    ) : {
        'number': Number.MAX_SAFE_INTEGER,
        'string': String.fromCodePoint(65535),
        'boolean': true
    }[typeof x];
};
```