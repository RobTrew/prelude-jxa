```applescript
-- isInfixOf :: Eq a => [a] -> [a] -> Bool
-- isInfixOf :: String -> String -> Bool
on isInfixOf(needle, haystack)
    haystack contains needle
end isInfixOf
```

```js
// isInfixOf :: Eq a => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = (needle, haystack) =>
    haystack.includes(needle);
```