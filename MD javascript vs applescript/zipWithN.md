```javascript
// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    // Uncurried function of which the first argument is a
    // curried function, and all remaining arguments are lists.

    // uncurry apZip
    const az = (fs, vs) =>
        fs.map((f, i) => f(vs[i]))
            .slice(0, Math.min(fs.length, vs.length));

    return 1 < args.length
        ? (
            ([f, ...xs]) => xs.slice(1).reduce(
                az,
                xs[0].map(f)
            )
        )(args)
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