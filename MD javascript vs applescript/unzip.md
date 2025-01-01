```javascript
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    // A list of the first items in each pair
    // of the zip, tupled with a list of all
    // the second items.
    Tuple(
        xys.map(xy => xy[0])
    )(
        xys.map(xy => xy[1])
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