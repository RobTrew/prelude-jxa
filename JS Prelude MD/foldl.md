```js
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f => 
    a => xs => list(xs).reduce((x, y) => f(x)(y), a);
```