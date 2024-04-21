```javascript
// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = needle =>
    // Tuples breaking the string at
    // all non-overlapping instances
    // of the needle in the haystack.
    haystack => Boolean(needle)
        ? haystack.split(needle)
        .reduce((a, _, i, xs) =>
            0 < i
                ? a.concat([
                    Tuple(
                        xs.slice(0, i).join(needle)
                    )(
                        needle + xs.slice(i)
                        .join(needle)
                    )
                ])
                : a, [])
        : null;
```