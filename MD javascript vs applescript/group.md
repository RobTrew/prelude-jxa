```javascript
// group :: Eq a => [a] -> [[a]]
const group = xs => {
    // A list of lists, each containing only equal elements,
    // such that the concatenation of these lists is xs.
    const go = xs =>
        0 < xs.length ? (() => {
            const
                h = xs[0],
                i = xs.findIndex(x => h !== x);
            return i !== -1 ? (
                [xs.slice(0, i)].concat(go(xs.slice(i)))
            ) : [xs];
        })() : [];
    const v = go(list(xs));
    return 'string' === typeof xs ? (
        v.map(x => x.join(''))
    ) : v;
};
```


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