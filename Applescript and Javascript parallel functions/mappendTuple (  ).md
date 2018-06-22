```applescript
-- mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)on mappendTuple(a, b)	Tuple(mappend(|1| of a, |1| of b), mappend(|2| of a, |2| of b))end mappendTuple
```

```js
// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = (t, t2) =>
    Tuple(mappend(t[0], t1[0]), mappend(t[1], t1[1]));
```