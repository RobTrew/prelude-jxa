```js
// fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
const fmapTuple = (f, tpl) =>
    Tuple(tpl[0], f(tpl[1]));
```