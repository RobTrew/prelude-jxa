```js
// Applies wrapped functions to wrapped values, 
// for example applying a list of functions to a list of values
// or applying Just(f) to Just(x), Right(f) to Right(x), etc
```

```js
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = (mf, mx) => {
    const t = mx.type;
    return (t !== undefined ? (
        t === 'Either' ? (
            apEither
        ) : t === 'Maybe' ? (
            apMaybe
        ) : t === 'Node' ? (
            apTree
        ) : apTuple
    ) : apList)(mf, mx);
};
```