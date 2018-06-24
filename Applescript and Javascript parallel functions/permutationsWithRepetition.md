```applescript
-- permutationsWithRepetition :: Int -> [a] -> [[a]]
on permutationsWithRepetition(n, xs)
    if length of xs > 0 then
        foldl1(curry(my cartesianProduct)'s |λ|(xs), replicate(n, xs))
    else
        {}
    end if
end permutationsWithRepetition
```

```js
// permutationsWithRepetition :: Int -> [a] -> [[a]]
const permutationsWithRepetition = (n, xs) =>
    xs.length > 0 ? (
        map(flatten,
            foldl1(
                x => cartesianProduct(xs, x),
                replicate(n, xs)
            )
        )
    ) : [];
```