```js
// apList (<*>) :: [a -> b] -> [a] -> [b]
const apList = fs =>
    // The application of each of a list of functions,
    // to each of a list of values.
    xs => liftA2List(x => x)(fs)(xs)
```