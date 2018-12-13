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

```js
// Splitting not on a delimiter, but wherever the relationship
// between consecutive terms matches a binary predicate
```

```js
// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) -> String -> [String]
const splitBy = (p, xs) =>
    (xs.length < 2) ? [xs] : (() => {
        const
            bln = 'string' === typeof xs,
            ys = bln ? xs.split('') : xs,
            h = ys[0],
            parts = ys.slice(1)
            .reduce(([acc, active, prev], x) =>
                p(prev, x) ? (
                    [acc.concat([active]), [x], x]
                ) : [acc, active.concat(x), x], [
                    [],
                    [h],
                    h
                ]);
        return (bln ? (
            ps => ps.map(cs => ''.concat.apply('', cs))
        ) : x => x)(parts[0].concat([parts[1]]));
    })();
```