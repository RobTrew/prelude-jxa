```js
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = (suffix, main) =>
    main.indexOf(suffix) === main.length - suffix.length;
```