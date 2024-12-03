```javascript
// uncurryN :: (a -> b ... -> e) -> (a, b ...) -> e
const uncurryN = f =>
    // A function over a tuple of values, 
    // derived from a curried function absorbing 
    // any number of arguments.
    (...args) => args.reduce(
        (g, x) => g(x),
        f
    );
```