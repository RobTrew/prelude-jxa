```js
// mappend (<>) :: Monoid a => a -> a -> a
const mappend = (a, b) => {
    const t = a.type;
    return (Boolean(t) ? (
        t === 'Maybe' ? (
            mappendMaybe
        ) : t === 'Ordering' ? (
            mappendOrdering
        ) : mappendTuple
    ) : append)(a, b);
};
```