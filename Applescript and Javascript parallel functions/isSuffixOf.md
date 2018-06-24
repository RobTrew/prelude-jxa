```applescript
-- isSuffixOf :: Eq a => [a] -> [a] -> Bool
-- isSuffixOf :: String -> String -> Bool 
on isSuffixOf(suffix, main)
    if class of suffix is string then
        (offset of suffix in main) = 1 + (length of main) - (length of suffix)
    else
        set lngSuffix to length of suffix
        if lngSuffix = 0 then
            true
        else
            set lngMain to length of main
            set lngDelta to lngMain - lngSuffix
            if lngDelta < 0 or lngMain = 0 then
                false
            else
                repeat with i from 1 to lngSuffix
                    if item i of suffix ≠ item (lngDelta + i) of main then return false
                end repeat
                true
            end if
        end if
    end if
end isSuffixOf
```

```js
// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = (suffix, main) =>
    main.indexOf(suffix) === main.length - suffix.length;
```