```javascript
// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eqFn =>
    foldr1(intersectBy(eqFn));
```


```applescript
-- intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
on intersectListsBy(fnEq, xs)
    script
        property eq : mReturn(fnEq)
        on |λ|(a, x)
            intersectBy(eq, a, x)
        end |λ|
    end script
    foldr1(result, xs)
end intersectionBy
```