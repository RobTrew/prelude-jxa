```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = flr =>
  // Either a Left value, or the application of a
  // function in Either to a value in Either.
  liftA2LR(identity)(flr)
```