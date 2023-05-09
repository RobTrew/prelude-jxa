```javascript
// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = ab =>
    // A tuple obtained by applying the function in the second
    // value of ab to the second value in an existing tuple,
    // and concatenating the first values of each tuple.
    liftA2Tuple(x => x)(ab);
```