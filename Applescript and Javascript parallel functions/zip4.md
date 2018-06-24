```applescript
-- zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
on zip4(ws, xs, ys, zs)
    script
        on |λ|(w, i)
            Tuple4(w, item i of xs, item i of ys, item i of zs)
        end |λ|
    end script
    map(result, items 1 thru ¬
        minimum({length of xs, length of ys, length of zs}) of xs)
end zip4
```

```js
// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = (ws, xs, ys, zs) =>
    ws.slice(0, Math.min(
        xs.length, xs.length, ys.length, zs.length
    ))
    .map((w, i) => Tuple4(w, xs[i], ys[i], zs[i]));
```