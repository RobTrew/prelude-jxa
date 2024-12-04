```javascript
// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = xs =>
    // Triples of the values at each position of
    // xs,ys,zs up to the length of the shortest.
    ys => zs => Array.from(
        {
            length: Math.min(
                ...[xs, ys, zs].map(x => x.length)
            )
        },
        (_, i) => [xs[i], ys[i], zs[i]]
    );
```


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