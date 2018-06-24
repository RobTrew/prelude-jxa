```js
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = (lf, rf, e) =>
    'Either' === e.type ? (
        undefined !== e.Left ? (
            lf(e.Left)
        ) : rf(e.Right)
    ) : undefined;
```