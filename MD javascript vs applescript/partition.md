```applescript
-- partition :: (a -> Bool) -> [a] -> ([a], [a])
on partition(f, xs)
    tell mReturn(f)
        set ys to {}
        set zs to {}
        repeat with x in xs
            set v to contents of x
            if |λ|(v) then
                set end of ys to v
            else
                set end of zs to v
            end if
        end repeat
    end tell
    Tuple(ys, zs)
end partition
```


```javascript
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in 
    // xs which match p, and those which don't.
    xs => list(xs).reduce(
        (a, x) => p(x) ? (
            Tuple(a[0].concat(x))(a[1])
        ) : Tuple(a[0])(a[1].concat(x)),
        Tuple([])([])
    );
```