```js
// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = (m, mf) =>
    (Array.isArray(m) ? (
        bindList
    ) : (() => {
        const t = m.type;
        return t === 'Either' ? (
            bindEither
        ) : t === 'Maybe' ? (
            bindMaybe
        ) : t === 'Tuple' ? (
            bindTuple
        ) : x => Left('No bind instance found for type: ' + t);
    })()(m, mf));
```