```js
// show :: a -> String
// show :: a -> Int -> Indented String
const show = (x, n) => {
    const
        e = typeof x !== 'function' ? (
            x
        ) : {
            type: 'Function',
            f: x
        };
    return JSON.stringify(e, (_, v) => {
        const
            f = (v !== null && v !== undefined) ? (() => {
                const t = v.type;
                return t === 'Either' ? (
                    showLR
                ) : t === 'Function' ? (
                    dct => 'λ' + dct.f.toString()
                ) : t === 'Maybe' ? (
                    showMaybe
                ) : t === 'Ordering' ? (
                    showOrdering
                ) : t === 'Ratio' ? (
                    showRatio
                ) : t === 'Tuple' ? (
                    showTuple
                ) : t === 'Tuple3' ? (
                    showTuple3
                ) : t === 'Tuple4' ? (
                    showTuple4
                ) : undefined;
            })() : showUndefined;
        return Boolean(f) ? (
            f(v)
        ) : typeof v !== 'string' ? (
            v
        ) : "'" + v + "'";
    }, n)
};
```