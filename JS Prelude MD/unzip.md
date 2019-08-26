```js
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        (a, x) => uncurry(Tuple)(...[0, 1].map(
            i => a[i].concat(x[i])
        )),
        Tuple([])([])
    );
```