```js
// drop :: Int -> [a] -> [a]
// drop :: Int -> Generator [a] -> Generator [a]
// drop :: Int -> String -> String
const drop = n => xs =>
    Infinity > length(xs) ? (
        xs.slice(n)
    ) : (take(n)(xs), xs);
```