```js
// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    'string' !== typeof xs ? (
        0 < xs.length ? (
            xs.every(x => 'string' === typeof x) ? (
                xs.join('')
            ) : xs.flat()
        ) : []
    ) : xs;
```