```javascript
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = mf =>
    // Applies wrapped functions to wrapped values,
    // for example applying a list of functions to a list
    // of values or applying:
    // Just(f) to Just(x),  Right(f) to Right(x),
    // f(x) to g(x) etc.
    mx => ({
        'Either': () => apLR,
        'Maybe': () => apMay,
        'Node': () => apTree,
        'Tuple': () => apTuple,
        'List': () => apList,
        '(a -> b)': () => apFn
    })[typeName(mx) || 'List']()(mf)(mx);
```