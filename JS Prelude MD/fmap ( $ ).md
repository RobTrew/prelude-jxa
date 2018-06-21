```js
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = (f, fa) => {
    const t = fa.type;
    return (t !== undefined ? (
        t === 'Either' ? (
            fmapLR
        ) : t === 'Maybe' ? (
            fmapMay
        ) : t === 'Node' ? (
            fmapTree
        ) : fmapTuple
    ) : map)(f, fa);
};
```