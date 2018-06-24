```applescript
-- findIndex :: (a -> Bool) -> [a] -> Maybe Int
on findIndex(f, xs)
    tell mReturn(f)
        set lng to length of xs
        repeat with i from 1 to lng
            if |λ|(item i of xs) then return Just(i)
        end repeat
        return Nothing()
    end tell
end findIndex
```

```js
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = (p, xs) => {
    const i = xs.findIndex(p);
    return -1 !== i ? (
        Just(i)
    ) : Nothing();
};
```