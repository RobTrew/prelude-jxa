```javascript
// isInfixOf :: (Eq a) => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = needle => haystack =>
    "string" !== typeof haystack
        ? (() => {
            const
                lng = needle.length,
                go = xs => lng <= xs.length
                    ? isPrefixOf(needle)(xs) || go(xs.slice(1))
                    : false;

            return go(haystack);
        })()
        : haystack.includes(needle);
```