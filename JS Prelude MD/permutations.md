```javascript
// permutations :: [a] -> [[a]]
const permutations = xs =>
    // All possible orderings of the items in xs.
    // N factorial permutations, where N === length(xs).
    xs.reduceRight(
        (orderings, x) => orderings.flatMap(
            ordering => Array.from({
                length: 1 + ordering.length
            }, (_, i) => i)
            // One additional permutation for each
            // possible position of x in each
            // existing permutation.
            .map(position => [
                ...ordering.slice(0, position),
                x,
                ...ordering.slice(position)
            ])
        ), [
            []
        ]
    );
```