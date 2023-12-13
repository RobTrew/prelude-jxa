```javascript
// find :: (a -> Bool) -> [a] -> Maybe a
const find = p =>
    // Just the first element in xs which
    // matches the predicate p, or
    // Nothing if no match is found.
    xs => "GeneratorFunction" !== (
        xs.constructor.constructor.name
    )
        ? (() => {
            const i = xs.findIndex(p);

            return -1 !== i
                ? Just(xs[i])
                : Nothing();
        })()
        : findGen(p)(xs);
```