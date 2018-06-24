```js
// isRight :: Either a b -> Bool
const isRight = lr =>
  (typeof lr !== 'undefined') && 
  ('Either' === lr.type) && (undefined !== lr.Right);
```