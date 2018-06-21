```js
// Tuple (,) :: a -> b -> (a, b)
const Tuple = (a, b) => ({
  type: 'Tuple',
  '0': a,
  '1': b,
  length: 2
});
```