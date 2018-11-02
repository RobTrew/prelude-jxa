```js
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = (fl, fr, e) =>
    'Either' === e.type ? (
        undefined !== e.Left ? (
            fl(e.Left)
        ) : fr(e.Right)
    ) : undefined;
```