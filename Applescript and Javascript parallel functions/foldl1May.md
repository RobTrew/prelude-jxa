```applescript
-- foldl1May :: (a -> a -> a) -> [a] -> Maybe a
on foldl1May(f, xs)
    set lng to length of xs
    if lng > 0 then
        if lng > 1 then
            tell mReturn(f)
                set v to {item 1 of xs}
                set lng to length of xs
                repeat with i from 2 to lng
                    set v to |λ|(v, item i of xs, i, xs)
                end repeat
                return Just(v)
            end tell
        else
            Just(item 1 of xs)
        end if
    else
        Nothing()
    end if
end foldl1May
```

```js
// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce(f, xs[0]))
    ) : Nothing();
```