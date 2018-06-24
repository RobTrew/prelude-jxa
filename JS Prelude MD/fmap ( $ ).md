```js
// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = (f, fa) => {
    const t = fa.type;
    return (undefined !== t ? (
        'Either' === t ? (
            fmapLR
        ) : 'Maybe' === t ? (
            fmapMay
        ) : 'Node' === t ? (
            fmapTree
        ) : fmapTuple
    ) : map)(f, fa);
};
```