```javascript
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = needle =>
    haystack => "string" !== typeof haystack ? (
        bindMay(
            dropLengthMaybe(needle)(haystack)
        )(
            delta => eq(needle)(
                dropLength(delta)(haystack)
            )
        )
    ) : haystack.endsWith(needle);
```