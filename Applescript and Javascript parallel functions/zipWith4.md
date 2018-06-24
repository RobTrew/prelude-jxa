```applescript
-- zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
on zipWith4(f, ws, xs, ys, zs)
    set lng to minimum({length of ws, length of xs, length of ys, length of zs})
    if lng < 1 then return {}
    set lst to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set end of lst to |λ|(item i of ws, item i of xs, item i of ys, item i of zs)
        end repeat
        return lst
    end tell
end zipWith4
```

```js
// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = (f, ws, xs, ys, zs) =>
    Array.from({
        length: Math.min(ws.length, xs.length, ys.length, zs.length)
    }, (_, i) => f(ws[i], xs[i], ys[i], zs[i]));
```