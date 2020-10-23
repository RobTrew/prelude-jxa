```applescript
-- findIndices :: (a -> Bool) -> [a] -> [Int]
on findIndices(p, xs)
    -- List of zero-based indices of 
    -- any matches for p in xs.
    script
        property f : mReturn(p)
        on |λ|(x, i, xs)
            if f's |λ|(x, i, xs) then
                {i - 1}
            else
                {}
            end if
        end |λ|
    end script
    concatMap(result, xs)
end findIndices
```


```javascript
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = p =>
    xs => (
        ys => ys.flatMap((y, i) => p(y, i, ys) ? (
            [i]
        ) : [])
    )([...xs]);
```