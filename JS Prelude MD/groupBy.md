```javascript
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq =>
    // Typical usage: groupBy(on(eq)(f), xs)
    xs => {
        const ys = list(xs);

        return 0 < ys.length ? (() => {
            const [v, r] = ys.slice(1)
                .reduce(([gps, wkg], x) =>
                    fEq(wkg[0])(x) ? (
                        Tuple(gps)(wkg.concat([x]))
                    ) : Tuple(gps.concat([wkg]))([x]),
                    Tuple([])([ys[0]])
                ),
                vs = v.concat([r]);

            return "string" !== typeof xs ? (
                vs
            ) : vs.map(x => x.join(""));
        })() : [];
    };
```