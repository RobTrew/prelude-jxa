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


```applescript
-- isSuffixOf :: Eq a => [a] -> [a] -> Bool
-- isSuffixOf :: String -> String -> Bool
on isSuffixOf(ns, hs)
    script go
        on |λ|(delta)
            ns = dropLength(delta, hs)
        end |λ|
    end script
    bindMay(dropLengthMaybe(ns, hs), go)
end isSuffixOf
```