```js
// show :: a -> String
// show :: a -> Int -> Indented String
const show = x => {
    const
        e = ('function' !== typeof x) ? (
            x
        ) : {
            type: 'Function',
            f: x
        };
    return JSON.stringify(e, (_, v) => {
        const
            f = ((null !== v) && (undefined !== v)) ? (() => {
                const t = v.type;
                return 'Either' === t ? (
                    showLR
                ) : 'Function' === t ? (
                    dct => 'λ' + dct.f.toString()
                ) : 'Maybe' === t ? (
                    showMaybe
                ) : 'Ordering' === t ? (
                    showOrdering
                ) : 'Ratio' === t ? (
                    showRatio
                ) : 'string' === typeof t && t.startsWith('Tuple') ? (
                    showTuple
                ) : undefined;
            })() : showUndefined;
        return Boolean(f) ? (
            f(v)
        ) : 'string' !== typeof v ? (
            v
        ) : v;
    })
};
```