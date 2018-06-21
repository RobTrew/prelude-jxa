```js
// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = (tf, tx) =>
    Tuple(
        mappend(tf[0], tx[0]),
        tf[1](tx[1])
    );
```