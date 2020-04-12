```js
// mappend (<>) :: Monoid a => a -> a -> a
const mappend = a =>
    // Associative operation 
    // defined for various monoid types.
    b => {
        const t = a.type;
        return (
            Boolean(t) ? (
                'Maybe' === t ? (
                    mappendMaybe
                ) : mappendTuple
            ) : 'function' !== typeof a ? (
                append
            ) : a.toString() !== 'x => y => f(y)(x)' ? (
                mappendFn
            ) : mappendOrd
        )(a)(b);
    };
```