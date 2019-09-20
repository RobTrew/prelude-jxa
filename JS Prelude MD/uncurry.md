```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
```

```js
const uncurry = f =>
    // Converts a function of more than one argument
    // to a function on Tuple type (Tuple ... TupleN)
    // or array which contains those arguments.
    // This implementation uses the fact that the Tuple
    // constructors create an object with a private `length` property.
    args => f.apply(null, args);
```