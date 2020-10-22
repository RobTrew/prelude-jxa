```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = p =>
    // Just the first element in xs which 
    // matches the predicate p, or
    // Nothing if no match is found.
    xs => xs.constructor.constructor.name !== (
        'GeneratorFunction'
    ) ? (() => {
        const
            ys = list(xs),
            i = ys.findIndex(p);
        return -1 !== i ? (
            Just(ys[i])
        ) : Nothing();
    })() : findGen(p)(xs);
```