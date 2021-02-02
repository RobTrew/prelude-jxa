```applescript
-- minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
on minimumByMay(f, xs)
    set lng to length of xs
    if lng < 1 then
        Nothing()
    else if lng > 1 then
        tell mReturn(f)
            set v to item 1 of xs
            repeat with x in xs
                if |λ|(x, v) < 0 then set v to contents of x
            end repeat
            return Just(v)
        end tell
    else
        Just(item 1 of xs)
    end if
end minimumByMay
```


```javascript
// minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const minimumByMay = f =>
    xs => list(xs).reduce((a, x) =>
        a.Nothing ? Just(x) : (
            f(x)(a.Just) < 0 ? (
                Just(x)
            ) : a
        ), Nothing());
```