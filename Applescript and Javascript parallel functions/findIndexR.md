```applescript
-- findIndexR :: (a -> Bool) -> [a] -> Maybe Int
on findIndexR(f, xs)
    tell mReturn(f)
        set lng to length of xs
        repeat with i from lng to 1 by -1
            if |λ|(item i of xs) then return Just(i)
        end repeat
        return Nothing()
    end tell
end findIndexR
```

```js
// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = (p, xs) => {
    const i = reverse(xs).findIndex(p);
    return -1 !== i ? (
        Just(xs.length - (1 + i))
    ) : Nothing();
};
```