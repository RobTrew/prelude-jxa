```js
// liftA2P :: (a -> b -> c) -> 
// Parser a -> Parser b -> Parser c
const liftA2P = op =>
    // The binary function op, lifted
    // to a function over two parsers.
    p => apP(fmapP(op)(p));
```