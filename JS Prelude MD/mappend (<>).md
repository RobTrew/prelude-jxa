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