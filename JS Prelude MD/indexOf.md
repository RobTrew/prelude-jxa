```javascript
// indexOf :: Eq a => [a] -> [a] -> Maybe Int
// indexOf :: String -> String -> Maybe Int
const indexOf = needle =>
    haystack => 'string' !== typeof haystack ? (
        findIndex(xs => isPrefixOf(needle)(xs))(
            tails(haystack)
        )
    ) : (() => {
        const i = haystack.indexOf(needle);
        return -1 !== i ? (
            Just(i)
        ) : Nothing();
    })();
```