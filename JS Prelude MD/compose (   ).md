```js
// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (...fs) =>
    fs.reduce(
        (f, g) => x => f(g(x)), 
        x => x
    );
```