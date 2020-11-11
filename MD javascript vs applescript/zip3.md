```applescript
-- zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
on zip3(xs, ys, zs)
    script
        on |λ|(x, i)
            TupleN({x, item i of ys, item i of zs})
        end |λ|
    end script
    map(result, items 1 thru ¬
        minimum({length of xs, length of ys, length of zs}) of xs)
end zip3
```


```javascript
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = xs =>
    ys => zs => list(xs)
    .slice(0, Math.min(...[xs, ys, zs].map(length)))
    .map((x, i) => TupleN(x, ys[i], zs[i]));
```