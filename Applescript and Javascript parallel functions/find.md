```applescript
-- find :: (a -> Bool) -> [a] -> Maybe a
on find(p, xs)
    tell mReturn(p)
        set lng to length of xs
        repeat with i from 1 to lng
            if |λ|(item i of xs) then return Just(item i of xs)
        end repeat
        Nothing()
    end tell
end find
```

```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    const i = xs.findIndex(p);
    return -1 !== i ? (
        Just(xs[i])
    ) : Nothing();
};
```