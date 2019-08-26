```js
// permutationsWithRepetition :: Int -> [a] -> [[a]]
const permutationsWithRepetition = n => xs =>
    0 < xs.length ? (
        map(flatten)(
            foldl1(x => cartesianProduct(xs, x))(
                replicate(n)(xs)
            )
        )
    ) : [];
```