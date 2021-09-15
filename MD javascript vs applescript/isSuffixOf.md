```javascript
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = ns => hs =>
    "string" !== typeof hs ? (
        (xs, ys) => bindMay(
            dropLengthMaybe(xs)(ys)
        )(d => eq(xs)(dropLength(d)(ys)))
    )(list(ns), list(hs)) : hs.endsWith(ns);
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