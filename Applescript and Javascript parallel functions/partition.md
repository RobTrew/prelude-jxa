```applescript
-- partition :: predicate -> List -> (Matches, nonMatches)
```

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

```js
// partition :: Predicate -> List -> (Matches, nonMatches)
```

```js
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = (p, xs) =>
    xs.reduce(
        (a, x) =>
        p(x) ? (
            Tuple(a[0].concat(x), a[1])
        ) : Tuple(a[0], a[1].concat(x)),
        Tuple([], [])
    );
```