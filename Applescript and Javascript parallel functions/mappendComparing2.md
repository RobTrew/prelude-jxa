```applescript
-- mappendComparing2 :: [((a -> b), Bool)] -> (a -> a -> Ordering)
on mappendComparing2(fBools)
    script
        on |λ|(x, y)
            script
                on |λ|(ord, fb)
                    if ord ≠ |EQ| then
                        ord
                    else
                        set f to |1| of fb
                        tell mReturn(f)
                            if |2| of fb then
                                compare(|λ|(x), |λ|(y))
                            else
                                compare(|λ|(y), |λ|(x))
                            end if
                        end tell
                    end if
                end |λ|
            end script
            foldl(result, 0, fBools)
        end |λ|
    end script
end mappendComparing
```

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