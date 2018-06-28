```applescript
-- intersectionBy :: (a -> a -> Bool) -> [[a]] -> [a]
on intersectionBy(fnEq, xs)
    script
        property eq : mReturn(fnEq)
        on |λ|(a, x)
            intersectBy(eq, a, x)
        end |λ|
    end script
    foldr1(result, xs)
end intersectionBy
```

```js
// intersectionBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectionBy = (eq, xs) =>
    foldr1(((a, x) => intersectBy(eq, a, x)), xs);
```