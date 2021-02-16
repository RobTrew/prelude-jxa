```applescript
-- zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
on zipWithN(f, rows)
    -- f applied to each tuple formed by the
    -- zipping together of each list in rows
    script go
        property mf : mReturn(f)
        on |λ|(i)
            script nth
                on |λ|(row)
                    item i of row
                end |λ|
            end script
            mf's |λ|(map(nth, rows))
        end |λ|
    end script
    map(go, enumFromTo(1, minimum(map(my |length|, rows))))
end zipWithN
```


```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
function zipWithN() {
    const
        args = Array.from(arguments),
        rows = args.slice(1).map(list),
        f = compose(uncurryN(args[0]), TupleN),
        n = Math.min(...rows.map(x => x.length));
    return 0 < n ? (
        take(n))(rows[0]).map(
        (x, i) => f(rows.flatMap(
            x => x[i]
        ))
    ) : [];
}
```