```javascript
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = mf =>
    // Applies wrapped functions to wrapped values,
    // for example applying a list of functions to a list of values
    // or applying Just(f) to Just(x), Right(f) to Right(x), 
    // f(x) to g(x) etc.
    mx => {
        const t = mx.type;
        return (
            undefined !== t ? (
                'Either' === t ? (
                    apLR
                ) : 'Maybe' === t ? (
                    apMay
                ) : 'Node' === t ? (
                    apTree
                ) : 'Tuple' === t ? (
                    apTuple
                ) : apList
            ) : Array.isArray(mf) ? (
                apList
            ) : apFn
        )(mf)(mx);
    };
```