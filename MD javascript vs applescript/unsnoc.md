```javascript
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    // Nothing if the list is empty, otherwise
    // Just the init and the last.
    Boolean(xs.length) ? (
        Just(Tuple(xs.slice(0, -1))(xs.slice(-1)[0]))
    ) : Nothing();
```


```applescript
-- If the list is empty returns Nothing, otherwise returns 
-- Just the init and the last.
-- unsnoc :: [a] -> Maybe ([a], a)
on unsnoc(xs)
    set blnString to class of xs is string
    set lng to length of xs
    if lng = 0 then
        Nothing()
    else
        set h to item -1 of xs
        if lng > 1 then
            if blnString then
                Just(Tuple(text 1 thru -2 of xs, h))
            else
                Just(Tuple(items 1 thru -2 of xs, h))
            end if
        else
            if blnString then
                Just(Tuple("", h))
            else
                Just(Tuple({}, h))
            end if
        end if
    end if
end unsnoc
```