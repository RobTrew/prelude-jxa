```js
// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = (f, xs, ys) =>
    concatMap(x => concatMap(y => [f(x, y)], ys), xs);
```