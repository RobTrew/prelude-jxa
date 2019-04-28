```js
// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = (f , bop) => 
    x => bop(f(x), x)
```