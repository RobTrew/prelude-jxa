```applescript
-- concatMap :: (a -> [b]) -> [a] -> [b]
on concatMap(f, xs)
    if class of xs is text then
        set ys to characters of xs
    else
        set ys to xs
    end if
    tell mReturn(f)
        set lng to length of ys
        set acc to {}
        repeat with i from 1 to lng
            set acc to acc & |λ|(item i of ys, i, ys)
        end repeat
    end tell
    return acc
end concatMap
```

```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) => []
    .concat.apply(
        [],
        (Array.isArray(xs) ? (
            xs
        ) : xs.split('')).map(f)
    );
```