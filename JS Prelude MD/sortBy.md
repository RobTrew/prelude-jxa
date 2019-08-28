```js
// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f => xs =>
    xs.slice()
    .sort(uncurry(f));
```