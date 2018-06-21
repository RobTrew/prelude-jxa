```js
// isRight :: Either a b -> Bool
const isRight = lr =>
  (typeof lr !== 'undefined') && 
  lr.type === 'Either' && lr.Right !== undefined;
```