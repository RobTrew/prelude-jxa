```applescript
-- zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
on zipWith(f, xs, ys)
    set lng to min(length of xs, length of ys)
    if 1 > lng then return {}
    set lst to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set end of lst to |λ|(item i of xs, item i of ys)
        end repeat
        return lst
    end tell
end zipWith
```

```js
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) =>
    Array.from({
        length: Math.min(xs.length, ys.length)
    }, (_, i) => f(xs[i], ys[i], i));
```