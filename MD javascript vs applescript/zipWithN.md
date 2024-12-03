```javascript
// zipWithN :: (a -> b -> ... -> d) -> [a], [b] ... -> [d]
const zipWithN = (f, ...xss) => {
    // Generalisation of ZipWith, ZipWith3 etc.
    // f is a curried function absorbing at least 
    // N arguments, where N is the length of xss.
    const m = 0 < xss.length
        ? Math.min(...xss.map(x => x.length))
        : 0;

    return xss.reduce(
        (gs, vs) => gs.map((g, i) => g(vs[i])),
        Array.from({ length: m }, () => f)
    );
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