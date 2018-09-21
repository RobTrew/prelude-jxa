```js
// tupleFromList :: [a] -> (a, a ...)
const tupleFromList = xs =>
    TupleN.apply(null, xs);
```