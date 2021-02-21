```applescript
-- scanl1 :: (a -> a -> a) -> [a] -> [a]
on scanl1(f, xs)
    if 0 < length of xs then
        scanl(f, item 1 of xs, rest of xs)
    else
        {}
    end if
end scanl
```


```javascript
// scanl1 :: (a -> a -> a) -> [a] -> [a]
const scanl1 = f =>
    // scanl1 is a variant of scanl that has no 
    // starting value argument.
    xs => xs.length > 0 ? (
        scanl(f)(
            xs[0]
        )(xs.slice(1))
    ) : [];
```