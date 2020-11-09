```javascript
// mappend (<>) :: Monoid a => a -> a -> a
const mappend = a =>
    // Associative operation 
    // defined for various monoids.
    b => (t => (Boolean(t) ? (
        'Maybe' === t ? (
            mappendMaybe
        ) : mappendTuple
    ) : Array.isArray(a) ? (
        append
    ) : 'function' === typeof a ? (
        mappendFn
    ) : mappendOrd)(a)(b))(a.type);
```