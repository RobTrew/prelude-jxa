```js
// isRight :: Either a b -> Bool
const isRight = lr =>
  ('undefined' !== typeof lr) && 
  ('Either' === lr.type) && (undefined !== lr.Right);
```