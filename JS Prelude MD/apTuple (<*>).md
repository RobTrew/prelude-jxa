```javascript
// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = tpl => 
  liftA2Tuple(x => x)(tpl);
```