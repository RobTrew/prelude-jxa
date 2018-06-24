```applescript
-- The listToMaybe function returns Nothing on 
-- an empty list or Just the head of the list.
```

```applescript
-- listToMaybe :: [a] -> Maybe a
on listToMaybe(xs)
    if xs ≠ {} then
        Just(item 1 of xs)
    else
        Nothing()
    end if
end listToMaybe
```

```js
// The listToMaybe function returns Nothing on 
// an empty list or Just the head of the list.
```

```js
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    xs.length > 0 ? (
        Just(xs[0])
    ) : Nothing();
```