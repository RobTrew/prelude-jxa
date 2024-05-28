```applescript
-- maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
on maximumByMay(f, xs)
    set cmp to mReturn(f)
    script max
        on |λ|(a, b)
            if a is missing value or cmp's |λ|(a, b) < 0 then
                b
            else
                a
            end if
        end |λ|
    end script
    
    foldl1May(max, xs)
end maximumByMay
```


```javascript
// maximumByMay :: (a -> a -> Ordering) ->
// [a] -> Maybe a
const maximumByMay = f =>
    // Nothing, if the list is empty,
    // or just the maximum value when compared
    // in terms of f.
    xs => 0 < xs.length
        ? Just(xs.slice(1).reduce(
            (a, x) => 0 < f(a)(x)
                ? a
                : x,
            xs[0]
        ))
        : Nothing();
```