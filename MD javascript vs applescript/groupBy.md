```applescript
-- groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
on groupBy(f, xs)
    -- Typical usage: groupBy(on(eq, f), xs)
    set mf to mReturn(f)
    
    script enGroup
        on |λ|(a, x)
            if length of (active of a) > 0 then
                set h to item 1 of active of a
            else
                set h to missing value
            end if
            
            if h is not missing value and mf's |λ|(h, x) then
                {active:(active of a) & {x}, sofar:sofar of a}
            else
                {active:{x}, sofar:(sofar of a) & {active of a}}
            end if
        end |λ|
    end script
    
    if length of xs > 0 then
        set dct to foldl(enGroup, {active:{item 1 of xs}, sofar:{}}, rest of xs)
        if length of (active of dct) > 0 then
            sofar of dct & {active of dct}
        else
            sofar of dct
        end if
    else
        {}
    end if
end groupBy
```


```javascript
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = eqOp =>
    // A list of lists, each containing only elements
    // equal under the given equality operator, such
    // that the concatenation of these lists is xs.
    xs => 0 < xs.length
        ? (() => {
            const [h, ...t] = xs;
            const [groups, g] = t.reduce(
                ([gs, a], x) => eqOp(a[0])(x)
                    ? [gs, [...a, x]]
                    : [[...gs, a], [x]],
                [[], [h]]
            );

            return [...groups, g];
        })()
        : [];
```