```js
// flip :: (a -> b -> c) -> b -> a -> c
const flip = f => (a, b) => f.apply(null, [b, a]);
```