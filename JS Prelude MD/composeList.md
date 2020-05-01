```js
// composeList :: [(a -> a)] -> (a -> a)
const composeList = fs =>
    fs.reduce(
        (f, g) => x => f(g(x)),
        x => x
    );
```