```applescript
-- apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)on apTuple(tf, tx)	Tuple(mappend(|1| of tf, |1| of tx), |λ|(|2| of tx) of mReturn(|2| of tf))end apTuple
```

```js
// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = (tf, tx) =>
    Tuple(
        mappend(tf[0], tx[0]),
        tf[1](tx[1])
    );
```