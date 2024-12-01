```javascript
// zipWithN :: (a -> b -> ... -> c) -> [[a], [b] ...] -> [c]
const zipWithN = f =>
    // Generalisation of ZipWith, ZipWith3 etc.
    // f is a curried function absorbing N arguments,
    // where N is the length of lists.
    // Defines a new list with the length of 
    // the shortest member of lists.
    lists => {
        const m = Math.min(...lists.map(x => x.length));

        return 0 < m
            ? lists.slice(1).reduce(
                (gs, vs) => gs.slice(0, m).map(
                    (g, i) => g(vs[i])
                ),
                lists[0].slice(0, m).map(f)
            )
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