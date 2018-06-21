```js
// typeName :: a -> String
const typeName = v => {
    const t = typeof v;
    return t === 'object' ? (
        Array.isArray(v) ? (
            'List'
        ) : v !== null ? (
            v.type || 'Dict'
        ) : 'Bottom'
    ) : {
        'boolean': 'Bool',
        'number' : 'Num',
        'string' : 'String'
    }[t] || 'Bottom';
};
```