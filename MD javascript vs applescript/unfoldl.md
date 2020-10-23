```applescript
-- unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
on unfoldl(f, v)
    -- > unfoldl (\b -> if b == 0 then Nothing else Just (b, b-1)) 10
    -- > [1,2,3,4,5,6,7,8,9,10]
    set xr to Tuple(v, v) -- (value, remainder)
    set xs to {}
    tell mReturn(f)
        repeat -- Function applied to remainder.
            set mb to |λ|(|2| of xr)
            if Nothing of mb then
                exit repeat
            else -- New (value, remainder) tuple,
                set xr to Just of mb
                -- and value appended to output list.
                set xs to ({|1| of xr} & xs)
            end if
        end repeat
    end tell
    return xs
end unfoldl
```


```javascript
// unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
const unfoldl = f => v => {
    // Dual to reduce or foldl.
    // Where these reduce a list to a summary value, unfoldl
    // builds a list from a seed value.
    // Where f returns Just(a, b), a is appended to the list,
    // and the residual b is used as the argument for the next
    // application of f.
    // Where f returns Nothing, the completed list is returned.
    // unfoldl(x => 0 !== x ? Just([x - 1, x]) : Nothing(), 10);
    // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let
        xr = [v, v],
        xs = [];
    while (true) {
        const mb = f(xr[0]);
        if (mb.Nothing) {
            return xs;
        } else {
            xr = mb.Just;
            xs = [xr[1]].concat(xs);
        }
    }
};
```