```js
// List of (Predicate, value) tuples -> Default value 
//                        -> Value to test -> Output value
```

```js
// caseOf :: [(a -> Bool, b)] -> b -> a ->  b
const caseOf = pvs => otherwise => x => {
    const mb = pvs.reduce((a, pv) =>
        a.Nothing ? (
            pv[0](x) ? Just(pv[1]) : a
        ) : a, Nothing());
    return mb.Nothing ? otherwise : mb.Just;
};
```