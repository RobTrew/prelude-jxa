```javascript
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = m =>
    mf => (Array.isArray(m) ? (
        bindList(m)(mf)
    ) : (() => {
        const t = m.type;
        return 'Either' === t ? (
            bindLR
        ) : 'Maybe' === t ? (
            bindMay
        ) : 'Tuple' === t ? (
            bindTuple
        ) : ('function' === typeof m) ? (
            bindFn
        ) : undefined;
    })()(m)(mf));
```