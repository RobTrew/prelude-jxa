```js
// headMay :: [a] -> Maybe a
const headMay = xs =>
    0 < xs.length ? (
        Just(xs[0]) 
    ) : Nothing();
```