```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = flr =>
  // Either application of a possible function in Either
  // to a possible value in Either, or a Left value.
  liftA2LR(identity)(flr)
```