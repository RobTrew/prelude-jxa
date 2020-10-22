```javascript
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = f => fa =>
    Array.isArray(fa) ? (
        fa.map(f)
    ) : 'string' !== typeof fa ? (() => {
        const t = fa.type;
        return ('Either' === t ? (
            fmapLR(f)(fa)
        ) : 'Maybe' === t ? (
            fmapMay(f)(fa)
        ) : 'Node' === t ? (
            fmapTree(f)(fa)
        ) : 'Tuple' === t ? (
            fmapTuple(f)(fa)
        ) : undefined);
    })() : fa.split('').map(f);
```