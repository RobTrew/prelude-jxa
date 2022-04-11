```javascript
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    // Nothing if xs is empty, or Just the head of xs.
    Boolean(xs.length) ? (
        Just(xs[0])
    ) : Nothing();
```


```applescript
-- listToMaybe :: [a] -> Maybe a
on listToMaybe(xs)
    -- The listToMaybe function returns Nothing on 
    -- an empty list or Just the head of the list.
    if xs ≠ {} then
        Just(item 1 of xs)
    else
        Nothing()
    end if
end listToMaybe
```