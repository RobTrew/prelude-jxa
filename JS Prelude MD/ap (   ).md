```js
// Applies wrapped functions to wrapped values, 
// for example applying a list of functions to a list of values
// or applying Just(f) to Just(x), Right(f) to Right(x), etc
```

```js
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = (mf, mx) => {
    const t = mx.type;
    return (undefined !== t ? (
       'Either' === t ? (
            apEither
        ) : 'Maybe' === t ? (
            apMaybe
        ) : 'Node' === t ? (
            apTree
        ) : apTuple
    ) : apList)(mf, mx);
};
```