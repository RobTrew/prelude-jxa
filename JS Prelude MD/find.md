```js
// find :: (a -> Bool) -> [a] -> Maybe a
const find = p =>
    xs => xs.constructor.constructor.name !== (
        'GeneratorFunction'
    ) ? (() => {
        const
            ys = list(xs),
            i = ys.findIndex(p);
        return -1 !== i ? (
            Just(ys[i])
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