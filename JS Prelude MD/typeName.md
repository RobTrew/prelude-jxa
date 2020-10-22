```javascript
// typeName :: a -> String
const typeName = v => {
    const t = typeof v;
    return 'object' === t ? (
        Array.isArray(v) ? (
            'List'
        ) : null !== v ? (
            v.type || 'Dict'
        ) : 'Bottom'
    ) : {
        'boolean': 'Bool',
        'number': 'Num',
        'string': 'String',
        'function' : '(a -> b)'
    } [t] || 'Bottom';
};
```