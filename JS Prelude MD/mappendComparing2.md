```js
// Expects functions in the argument list to be 
// paired with Bools:
//     true  -> ascending sort on that key
//     false -> descending sort on that key
```

```js
// mappendComparing2 :: [((a -> b), Bool)] -> (a -> a -> Ordering)
const mappendComparing2 = fboolPairs =>
    (x, y) => fboolPairs.reduce(
        (ordr, fb) => {
            const f = fb[0];
            return 0 !== ordr ? (
                ordr
            ) : fb[1] ? (
                compare(f(x), f(y))
            ) : compare(f(y), f(x));
        }, 0
    );
```