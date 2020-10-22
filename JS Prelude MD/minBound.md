```javascript
// minBound :: a -> a
const minBound = x => {
    const e = x.enum;
    return Boolean(e) ? (
        e[e[0]]
    ) : {
        'number': Number.MIN_SAFE_INTEGER,
        'string': String.fromCodePoint(0),
        'boolean': false
    }[typeof x];
};
```