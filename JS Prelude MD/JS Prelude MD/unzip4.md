```js
// unzip4 :: [(a,b,c,d)] -> ([a],[b],[c],[d])
const unzip4 = wxyzs =>
    wxyzs.reduce(
        (a, x) => Tuple4.apply(null, [0, 1, 2, 3].map(
            i => a[i].concat(x[i])
        )),
        Tuple4([], [], [], [])
    );
```