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