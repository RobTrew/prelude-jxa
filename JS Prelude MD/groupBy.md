```js
// Typical usage: groupBy(on(eq, f), xs)
```

```js
// Typical usage: groupBy(on(eq)(f), xs)
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq => xs => {
    const go = lst =>
        0 < lst.length ? (() => {
            const
                x = lst[0],
                tpl = span(fEq(x))(
                    lst.slice(1)
                );
            return [
                [x].concat(tpl[0])
            ].concat(go(tpl[1]))
        })() : [];
    return go(xs);
};
```