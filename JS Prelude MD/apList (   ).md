```js
// apList (<*>) :: [a -> b] -> [a] -> [b]
const apList = fs => xs =>
    // The application of each of a list of functions,
    // to each of a list of values.
    fs.flatMap(
        f => xs.flatMap(x => [f(x)])
    );
```