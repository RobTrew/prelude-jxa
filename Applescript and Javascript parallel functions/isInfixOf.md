```applescript
-- isInfixOf :: Eq a => [a] -> [a] -> Bool
-- isInfixOf :: String -> String -> Bool
on isInfixOf(needle, haystack)
    haystack contains needle
end isInfixOf
```

```js
// isInfixOf :: (Eq a) => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = (needle, haystack) => {
    const lng = needle.length;
    const go = xs =>
        lng <= xs.length ? (
            isPrefixOf(needle, xs) || go(xs.slice(1))
        ) : false;
    return 'string' !== typeof haystack ? (
        go(haystack)
    ) : haystack.includes(needle);
};
```