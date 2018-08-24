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

```js
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = (ns, hs) => {
    const go = delta =>
        eq(ns, dropLength(delta, hs));
    return 'string' !== typeof hs ? (
        bindMay(dropLengthMaybe(ns, hs), go)
    ) : hs.endsWith(ns);
};
```