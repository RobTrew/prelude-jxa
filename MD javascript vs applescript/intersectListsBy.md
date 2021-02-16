```javascript
// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eq => xs =>
    foldr1((a => x => intersectBy(eq)(a)(x)))(
        list(xs)
    );
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