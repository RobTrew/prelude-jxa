```javascript
// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = ab =>
    liftA2Tuple(x => x)(ab);
```