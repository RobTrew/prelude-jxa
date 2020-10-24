```applescript
-- init :: [a] -> [a]
-- init :: [String] -> [String]
on init(xs)
    set blnString to class of xs = string
    set lng to length of xs
    
    if lng > 1 then
        if blnString then
            text 1 thru -2 of xs
        else
            items 1 thru -2 of xs
        end if
    else if lng > 0 then
        if blnString then
            ""
        else
            {}
        end if
    else
        missing value
    end if
end init

```


```javascript
// init :: [a] -> [a]
const init = xs => (
    // All elements of a list except the last.
    ys => 0 < ys.length ? (
        ys.slice(0, -1)
    ) : undefined
)(list(xs));
```