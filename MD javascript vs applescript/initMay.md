```applescript
-- initMay :: [a] -> Maybe [a]
-- initMay :: [String] -> Maybe [String]
on initMay(xs)
    set blnString to class of xs = string
    set lng to length of xs
    if lng > 1 then
        if blnString then
            Just(text 1 thru -2 of xs)
        else
            Just(items 1 thru -2 of xs)
        end if
    else if lng > 0 then
        if blnString then
            Just("")
        else
            Just({})
        end if
    else
        Nothing()
    end if
end initMay
```


```javascript
// initMay :: [a] -> Maybe [a]
const initMay = xs =>
    Boolean(xs.length) ? (
        Just(xs.slice(0, -1))
    ) : Nothing();
```