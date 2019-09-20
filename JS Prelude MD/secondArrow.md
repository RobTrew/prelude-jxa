```js
// secondArrow :: (a -> b) -> ((c, a) -> (c, b))
const secondArrow = f => xy =>
    // A function over a simple value lifted 
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    Tuple(xy[0])(
        f(xy[1])
    );
```