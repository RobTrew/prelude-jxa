```applescript
-- splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
-- splitBy :: (String -> String -> Bool) -> String -> [String]
on splitBy(p, xs)
    if length of xs < 2 then
        {xs}
    else
        script f
            property mp : |λ| of mReturn(p)
            on |λ|(a, x)
                set {acc, active, prev} to a
                if mp(prev, x) then
                    {acc & {active}, {x}, x}
                else
                    {acc, active & x, x}
                end if
            end |λ|
        end script
        
        set h to item 1 of xs
        set lstParts to foldl(f, {{}, {h}, h}, items 2 thru -1 of xs)
        if class of item 1 of xs = string then
            map(concat, (item 1 of lstParts & {item 2 of lstParts}))
        else
            item 1 of lstParts & {item 2 of lstParts}
        end if
    end if
end splitBy
```

```js
// Splitting not on a delimiter, but whenever the relationship between
// two consecutive items matches a supplied predicate function
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