```js
// intercalate :: [a] -> [[a]] -> [a]
// intercalate :: String -> [String] -> String
const intercalate = (sep, xs) =>
    xs.length > 0 && typeof sep === 'string' &&
    typeof xs[0] === 'string' ? (
        xs.join(sep)
    ) : concat(intersperse(sep, xs));
```