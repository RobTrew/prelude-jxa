```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) =>
    xs.reduce((a, x) => a.concat(f(x)), []);
    
// Briefer but slower:
// concatMap :: (a -> [b]) -> [a] -> [b]
// const concatMap = (f, xs) =>
//     [].concat(...xs.map(f))
```