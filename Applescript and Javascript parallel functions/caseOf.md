```applescript
-- List of (Predicate, value) tuples -> Default value -> Value to test -> Output value
```

```applescript
-- caseOf :: [(a -> Bool, b)] -> b -> a ->  b
on caseOf (pvs, otherwise, x)
    repeat with tpl in pvs
        if mReturn(|1| of tpl)'s |λ|(x) then return |2| of tpl
    end repeat
    return otherwise
end caseOf
```

```js
// List of (Predicate, value) tuples -> Default value 
//                        -> Value to test -> Output value
```

```js
// caseOf :: [(a -> Bool, b)] -> b -> a ->  b
const caseOf = (pvs, otherwise, x) => {
    const mb = pvs.reduce((a, pv) =>
        a.Nothing ? (
            pv[0](x) ? Just(pv[1]) : a
        ) : a, Nothing());
    return mb.Nothing ? otherwise : mb.Just;
};
```