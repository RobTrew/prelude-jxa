```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    // Uncurried function of which the first argument is a
    // curried function, and all remaining arguments are lists.
    const go = ([f, ...rows]) => {
        const
            n = Math.min(
                ...rows.map(x => x.length)
            );

        return rows.slice(1).reduce(
            (gs, row) => gs.map(
                (g, iCol) => g(row[iCol])
            )
            .slice(0, n),
            rows[0].map(f)
        );
    };

    return 1 < args.length
        ? go(args)
        : [];
};
```


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