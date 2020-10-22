```javascript
// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (...fs) =>
    // A function defined by the right-to-left
    // composition of all the functions in fs.
    fs.reduce(
        (f, g) => x => f(g(x)),
        x => x
    );
```