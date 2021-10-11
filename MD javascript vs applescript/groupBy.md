```javascript
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq =>
    // Typical usage: groupBy(on(eq)(f), xs)
    xs => {
        const ys = list(xs);

        return 0 < ys.length ? (() => {
            const [v, r] = ys.slice(1)
                .reduce(([gps, wkg], x) =>
                    fEq(wkg[0])(x) ? (
                        Tuple(gps)(wkg.concat([x]))
                    ) : Tuple(gps.concat([wkg]))([x]),
                    Tuple([])([ys[0]])
                ),
                vs = v.concat([r]);

            return "string" !== typeof xs ? (
                vs
            ) : vs.map(x => x.join(""));
        })() : [];
    };
```


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