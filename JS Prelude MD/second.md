```javascript
// second :: (a -> b) -> ((c, a) -> (c, b))
const second = f =>
    // A function over a simple value lifted
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    xy => {
        const tpl = Tuple(xy[0])(f(xy[1]));
        return Array.isArray(xy) ? (
            Array.from(tpl)
        ) : tpl;
    };
```