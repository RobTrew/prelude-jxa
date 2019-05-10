```js
// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = flr => liftA2LR(id)(flr)
```