```javascript
// mappend (<>) :: Monoid a => a -> a -> a
const mappend = a =>
    // Associative operation
    // defined for various monoids.
    ({
        "(a -> b)": () => mappendFn,
        "Endo": () => mappEndo,
        "List": () => append,
        "Maybe": () => mappendMaybe,
        "Num": () => mappendOrd,
        "String": () => append,
        "Tuple": () => mappendTupleN,
        "TupleN": () => mappendTupleN
    })[typeName(a)]()(a);
```


```applescript
-- mappend (<>) :: Monoid a => a -> a -> a
on mappend(a, b)
    set ca to class of a
    if record is ca then
        script instanceMay
            on |λ|(strType)
                set mb to lookup(strType, ¬
                    {Maybe:mappendMaybe, Ordering:mappendOrdering, Tuple:mappendTuple})
            end |λ|
        end script
        set mbi to bindMay(lookup("type", a), instanceMay)
        if Nothing of mbi then
            a & b
        else
            mReturn(Just of mbi)'s |λ|(a, b)
        end if
    else if handler is ca then
        mappendFn(a, b)
    else
        a & b
    end if
end mappend
```