```applescript
-- concatMap :: (a -> [b]) -> [a] -> [b]
on concatMap(f, xs)
    set lng to length of xs
    if 0 < lng and class of (item 1 of xs) is string then
        set acc to ""
    else
        set acc to {}
    end if
    tell mReturn(f)
        repeat with i from 1 to lng
            set acc to acc & |λ|(item i of xs, i, xs)
        end repeat
    end tell
    return acc
end concatMap
```

```js
// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) =>
    0 < xs.length ? (() => {
        const unit = 'string' !== typeof xs[0] ? [] : '';
        return unit.concat.apply(unit, xs.map(f))
    })() : [];
```