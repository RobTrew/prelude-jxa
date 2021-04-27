```applescript
-- unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
on unfoldr(f, v)
    -- A lazy (generator) list unfolded from a seed value
    -- by repeated application of f to a value until no
    -- residue remains. Dual to fold/reduce.
    -- f returns either nothing (missing value) 
    -- or just (value, residue).
    script
        property valueResidue : {v, v}
        property g : mReturn(f)
        on |λ|()
            set valueResidue to g's |λ|(item 2 of (valueResidue))
            if missing value ≠ valueResidue then
                item 1 of (valueResidue)
            else
                missing value
            end if
        end |λ|
    end script
end unfoldr
```


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