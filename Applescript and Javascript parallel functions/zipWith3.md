```applescript
-- zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
on zipWith3(f, xs, ys, zs)
    set lng to minimum({length of xs, length of ys, length of zs})
    if 1 > lng then return {}
    set lst to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set end of lst to |λ|(item i of xs, item i of ys, item i of zs)
        end repeat
        return lst
    end tell
end zipWith3
```

```js
// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
const zipWith3 = (f, xs, ys, zs) =>
    Array.from({
        length: Math.min(length(xs), length(ys), length(zs))
    }, (_, i) => f(xs[i], ys[i], zs[i]));
```