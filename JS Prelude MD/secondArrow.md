```js
// secondArrow :: (a -> b) -> ((c, a) -> (c, b))
const secondArrow = f =>
    // A function over a simple value lifted
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    xy => Tuple(xy[0])(
        f(xy[1])
    );
```