```javascript
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = ns => hs =>
    'string' !== typeof hs ? (
        (xs, ys) => bindMay(
            dropLengthMaybe(xs)(ys)
        )(d => eq(xs)(dropLength(d)(ys)))
    )(list(ns), list(hs)) : hs.endsWith(ns);
```