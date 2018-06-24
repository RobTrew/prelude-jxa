```applescript
-- unzip3 :: [(a,b,c)] -> ([a],[b],[c])
on unzip3(xyzs)
    set xs to {}
    set ys to {}
    set zs to {}
    repeat with xyz in xyzs
        set end of xs to |1| of xyz
        set end of ys to |2| of xyz
        set end of zs to |3| of xyz
    end repeat
    return Tuple3(xs, ys, zs)
end unzip3
```

```js
// unzip3 :: [(a,b,c)] -> ([a],[b],[c])
const unzip3 = xyzs =>
    xyzs.reduce(
        (a, x) => Tuple3.apply(null, [0, 1, 2].map(
            i => a[i].concat(x[i])
        )),
        Tuple3([], [], [])
    );
```