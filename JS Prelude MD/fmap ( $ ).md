```js
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = (f, fa) =>
    Array.isArray(fa) ? (
        fa.map(f)
    ) : 'string' !== typeof fa ? (
        'Either' === t ? (
            fmapLR
        ) : 'Maybe' === t ? (
            fmapMay
        ) : 'Node' === t ? (
            fmapTree
        ) : 'Tuple' === t ? (
            fmapTuple
        ) : undefined
    )(fa) : fa.split('').map(f);
```