```javascript
// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) ->
// String -> [String]
const splitBy = p =>
    // Splitting not on a delimiter, but wherever the
    // relationship between consecutive terms matches
    // a binary predicate.
    xs => 2 > xs.length
        ? [xs]
        : (() => {
            const
                [h, ...t] = xs,
                ab = t.reduce(
                    ([acc, active, prev], x) =>
                        p(prev)(x)
                            ? [acc.concat([active]), [x], x]
                            : [acc, active.concat(x), x],
                    [[], [h], h]
                );

            return ab[0].concat([ab[1]]);
        })();
```


```applescript
-- splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
-- splitBy :: (String -> String -> Bool) -> String -> [String]
on splitBy(p, xs)
    if 2 > length of xs then
        {xs}
    else
        script pairMatch
            property mp : mReturn(p)'s |λ|
            on |λ|(a, b)
                {mp(a, b), a, b}
            end |λ|
        end script
        
        script addOrSplit
            on |λ|(a, blnXY)
                set {bln, x, y} to blnXY
                if bln then
                    {item 1 of a & {item 2 of a}, {y}}
                else
                    {item 1 of a, (item 2 of a) & y}
                end if
            end |λ|
        end script
        set {a, r} to foldl(addOrSplit, ¬
            {{}, {item 1 of xs}}, ¬
            zipWith(pairMatch, xs, rest of xs))
        
        if list is class of xs then
            a & {r}
        else
            map(my concat, a & {r})
        end if
    end if
end splitBy
```