```js
// apTuple (<*>) :: (a, a0 -> b) -> (a, a0) -> (a, b)
const apTuple = tpl => 
  liftA2Tuple(x => x)(tpl)
```