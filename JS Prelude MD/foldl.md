```js
// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f => 
    a => xs => [...xs].reduce(
        (x, y) => f(x)(y),
        a
    );
```