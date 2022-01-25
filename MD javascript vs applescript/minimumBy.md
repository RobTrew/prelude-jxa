```javascript
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f =>
    xs => 0 < xs.length ? (
        xs.slice(1).reduce(
            (a, x) => 0 > f(x)(a) ? (
                x
            ) : a,
            xs[0]
        )
    ) : undefined;
```


```applescript
-- minimumBy :: (a -> a -> Ordering) -> [a] -> a
on minimumBy(f, xs)
    set lng to length of xs
    if lng < 1 then
        missing value
    else if lng > 1 then
        tell mReturn(f)
            set v to item 1 of xs
            repeat with x in xs
                if |λ|(x, v) < 0 then set v to contents of x
            end repeat
            return v
        end tell
    else
        item 1 of xs
    end if
end minimumBy
```