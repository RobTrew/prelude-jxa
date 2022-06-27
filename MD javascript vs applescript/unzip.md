```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        ([a, b], [x, y]) => [
            [...a, x],
            [...b, y]
        ],
        [
            [],
            []
        ]
    );
```


```applescript
-- unzip :: [(a,b)] -> ([a],[b])
on unzip(xys)
    set xs to {}
    set ys to {}
    repeat with xy in xys
        set end of xs to |1| of xy
        set end of ys to |2| of xy
    end repeat
    return Tuple(xs, ys)
end unzip
```