```js
// mappend (<>) :: Monoid a => a -> a -> a
const mappend = a => b => {
    const t = a.type;
    return (
        Boolean(t) ? (
            'Maybe' === t ? (
                mappendMaybe
            ) : 'Ordering' === t ? (
                mappendOrd
            ) : mappendTuple
        ) : 'function' !== typeof a ? (
            append
        ) : mappendFn
    )(a)(b);
};
```