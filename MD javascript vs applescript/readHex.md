```javascript
// readHex :: String -> Int
const readHex = s =>
    // Integer value of hexadecimal expression.
    parseInt(s, 16);
```


```applescript
-- readHex :: String -> Int
on readHex(s)
    -- The integer value of the given hexadecimal string.
    set ds to "0123456789ABCDEF"
    script go
        on |λ|(c, a)
            set {v, e} to a
            set i to maybe(0, my identity, elemIndex(c, ds))
            {v + (i * e), 16 * e}
        end |λ|
    end script
    item 1 of foldr(go, {0, 1}, characters of s)
end readHex
```