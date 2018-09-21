```js
// isInfixOf :: Eq a => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = (needle, haystack) =>
    haystack.includes(needle);
```