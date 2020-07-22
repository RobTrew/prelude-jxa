```js
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq =>
    // Typical usage: groupBy(on(eq)(f), xs)
    xs => (ys => 0 < ys.length ? (() => {
        const
            tpl = ys.slice(1).reduce(
                (gw, x) => {
                    const
                        gps = gw[0],
                        wkg = gw[1];
                    return fEq(wkg[0])(x) ? (
                        Tuple(gps)(wkg.concat([x]))
                    ) : Tuple(gps.concat([wkg]))([x]);
                },
                Tuple([])([ys[0]])
            ),
            v = tpl[0].concat([tpl[1]]);
        return 'string' !== typeof xs ? (
            v
        ) : v.map(x => x.join(''))
    })() : [])(list(xs));
```