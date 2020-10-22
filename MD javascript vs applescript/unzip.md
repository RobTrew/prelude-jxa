```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        (ab, xy) => Tuple(ab[0].concat(xy[0]))(
            ab[1].concat(xy[1])
        ),
        Tuple([])([])
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