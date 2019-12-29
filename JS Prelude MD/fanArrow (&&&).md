```js
// Compose a function from a simple value to a tuple of
// the separate outputs of two different functions
```

```js
// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // Compose a function from a simple value to a tuple of
    // the separate outputs of two different functions.
    g => x => Tuple(f(x))(g(x));
```