```javascript
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = m =>
    mf => (Array.isArray(m) ? (
        bindList(m)(mf)
    ) : ({
        'Either': () => bindLR,
        'Maybe': () => bindMay,
        'Tuple': () => bindTuple,
        'function': () => bindFn
    })[m.type || typeof m]())(m)(mf);
```