```applescript
-- group :: Eq a => [a] -> [[a]]
on group(xs)
    script eq
        on |λ|(a, b)
            a = b
        end |λ|
    end script
    
    groupBy(eq, xs)
end group
```


```javascript
// group :: Eq a => [a] -> [[a]]
const group = xs => {
    // A list of lists, each containing only equal elements,
    // such that the concatenation of these lists is xs.
    const go = ys =>
        0 < ys.length ? (() => {
            const
                h = ys[0],
                i = ys.findIndex(y => h !== y);

            return i !== -1 ? (
                [ys.slice(0, i)].concat(go(ys.slice(i)))
            ) : [ys];
        })() : [];
    const v = go(list(xs));

    return "string" === typeof xs ? (
        v.map(x => x.join(""))
    ) : v;
};
```