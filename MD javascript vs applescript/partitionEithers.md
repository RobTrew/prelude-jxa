```javascript
// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    // A tuple of two lists:
    // first all the Left values in xs,
    // and then all the Right values in xs.
    xs.reduce(
        (a, x) => (
            "Left" in x
                ? first(ys => [...ys, x.Left])
                : second(ys => [...ys, x.Right])
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