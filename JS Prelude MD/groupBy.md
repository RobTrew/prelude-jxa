```js
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq => xs =>
    // // Typical usage: groupBy(on(eq)(f), xs)
    0 < xs.length ? (() => {
        const
            tpl = xs.slice(1).reduce(
                (gw, x) => {
                    const
                        gps = gw[0],
                        wkg = gw[1];
                    return fEq(wkg[0])(x) ? (
                        Tuple(gps)(wkg.concat([x]))
                    ) : Tuple(gps.concat([wkg]))([x]);
                },
                Tuple([])([xs[0]])
            );
        return tpl[0].concat([tpl[1]])
    })() : [];
```