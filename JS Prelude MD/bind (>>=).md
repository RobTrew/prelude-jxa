```javascript
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = m =>
    // Two computations sequentially composed,
    // with any value produced by the first
    // passed as an argument to the second.
    mf => Array.isArray(m) ? (
        bindList(m)(mf)
    ) : (
        ({
            'Either': () => bindLR,
            'Maybe': () => bindMay,
            'Tuple': () => bindTuple,
            'function': () => bindFn
        })[m.type || typeof m]()(m)(mf)
    );
```