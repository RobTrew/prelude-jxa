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