```javascript
// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = ws =>
    // List of triples of the values at each position
    // of xs,ys,zs up to the length of the shortest.
    xs => ys => zs => Array.from(
        {
            length: Math.min(
                ...[ws, xs, ys, zs].map(x => x.length)
            )
        },
        (_, i) => [ws[i], xs[i], ys[i], zs[i]]
    );
```


```applescript
-- zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
on zip4(ws, xs, ys, zs)
    script
        on |λ|(w, i)
            TupleN({w, item i of xs, item i of ys, item i of zs})
        end |λ|
    end script
    map(result, items 1 thru ¬
        minimum({length of xs, length of ys, length of zs}) of xs)
end zip4
```