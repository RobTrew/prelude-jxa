```javascript
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = f =>
    xs => (
        ys => ys.length > 0 ? (
            Just(ys.slice(1)
                .reduce((a, y) => 0 < f(a)(y) ? (
                    a
                ) : y, ys[0]))
        ) : Nothing()
    )(list(xs));
```


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