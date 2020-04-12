```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = p =>
    xs => Array.isArray(xs) ? (() => {
        const i = xs.findIndex(p);
        return -1 !== i ? (
            Just(xs[i])
        ) : Nothing();
    })() : (() => {
        const
            mb = until(tpl => {
                const nxt = tpl[0];
                return nxt.done || p(nxt.value);
            })(
                tpl => Tuple(tpl[1].next())(
                    tpl[1]
                )
            )(Tuple(xs.next())(xs))[0];
        return mb.done ? (
            Nothing()
        ) : Just(mb.value);
    })();
```