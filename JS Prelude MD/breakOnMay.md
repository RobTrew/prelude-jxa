```javascript
// breakOnMay :: String -> String -> Maybe (String, String)
const breakOnMay = needle =>
    // Maybe (prefix before match, match + rest)
    haystack => Boolean(needle)
        ? (() => {
            const xs = haystack.split(needle);

            return Just(Boolean(xs.length)
                ? Tuple(
                    xs[0]
                )(
                    haystack.slice(xs[0].length)
                )
                : Tuple(haystack)(""));
        })()
        : Nothing();
```