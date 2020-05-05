```js
// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // A function from x to a tuple of (f(x), g(x))
    g => x => Tuple(f(x))(
        g(x)
    );
```