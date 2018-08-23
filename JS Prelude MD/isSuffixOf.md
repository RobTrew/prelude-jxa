```js
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = (ns, hs) => {
    const go = delta =>
        eq(ns, dropLength(delta, hs));
    return bindMay(dropLengthMaybe(ns, hs), go);
};
```