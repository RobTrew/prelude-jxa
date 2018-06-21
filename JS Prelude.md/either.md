```js
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = (lf, rf, e) =>
    e.type === 'Either' ? (
        e.Left !== undefined ? (
            lf(e.Left)
        ) : rf(e.Right)
    ) : undefined;
```