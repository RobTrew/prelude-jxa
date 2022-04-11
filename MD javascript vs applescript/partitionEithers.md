```javascript
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce(
        (a, x) => (
            "Left" in x ? (
                first(ys => [...ys, x.Left])
            ) : second(ys => [...ys, x.Right])
        )(a),
        Tuple([])([])
    );
```


```applescript
-- partitionEithers :: [Either a b] -> ([a],[b])
on partitionEithers(xs)
    set ys to {}
    set zs to {}
    repeat with x in xs
        if isRight(x) then
            set end of zs to x
        else
            set end of ys to x
        end if
    end repeat
    Tuple(ys, zs)
end partitionEithers
```