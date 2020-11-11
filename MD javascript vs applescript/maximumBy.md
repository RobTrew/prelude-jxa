```javascript
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = f =>
    xs => {
        const ys = list(xs);
        return 0 < ys.length ? (
            ys.slice(1).reduce(
                (a, y) => 0 < f(y)(a) ? (
                    y
                ) : a,
                ys[0]
            )
        ) : undefined;
    };
```


```applescript
-- maximumBy :: (a -> a -> Ordering) -> [a] -> a
on maximumBy(f, xs)
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
    
    foldl(max, missing value, xs)
end maximumBy
```