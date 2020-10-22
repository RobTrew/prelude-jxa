```js
// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        (ab, xy) => Tuple(ab[0].concat(xy[0]))(
            ab[1].concat(xy[1])
        ),
        Tuple([])([])
    );
```