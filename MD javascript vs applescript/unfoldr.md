```javascript
// unfoldr :: (b -> Maybe (a, b)) -> b -> Gen [a]
const unfoldr = f =>
    // A lazy (generator) list unfolded from a seed value
    // by repeated application of f to a value until no
    // residue remains. Dual to fold/reduce.
    // f returns either Nothing or Just (value, residue).
    // For a strict output list,
    // wrap with `list` or Array.from
    x => (
        function* () {
            let maybePair = f(x);

            while (!maybePair.Nothing) {
                const valueResidue = maybePair.Just;

                yield valueResidue[0];
                maybePair = f(valueResidue[1]);
            }
        }()
    );
```


```applescript
-- unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
on unfoldr(f, v)
    -- A list obtained from a simple value.
    -- Dual to foldr.
    -- unfoldr (\b -> if b == 0 then Nothing else Just (b, b-1)) 10
    -- -> [10,9,8,7,6,5,4,3,2,1] 
    set xr to {v, v} -- (value, remainder)
    set xs to {}
    tell mReturn(f)
        repeat -- Function applied to remainder.
            set mb to |λ|(snd(xr))
            if Nothing of mb then
                exit repeat
            else -- New (value, remainder) tuple,
                set xr to Just of mb
                -- and value appended to output list.
                set end of xs to fst(xr)
            end if
        end repeat
    end tell
    return xs
end unfoldr
```