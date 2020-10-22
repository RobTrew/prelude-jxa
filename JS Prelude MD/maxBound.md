```javascript
// maxBound :: a -> a
const maxBound = x => {
    const e = x.enum;
    return Boolean(e) ? (
        e[e[x.max]]
    ) : {
        'number': Number.MAX_SAFE_INTEGER,
        'string': String.fromCodePoint(0x10FFFF),
        'boolean': true
    }[typeof x];
};
```