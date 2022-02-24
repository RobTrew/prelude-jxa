```applescript
-- permutations :: [a] -> [[a]]
on permutations(xs)
    script go
        on |λ|(x, a)
            script
                on |λ|(ys)
                    script infix
                        on |λ|(n)
                            if ys ≠ {} then
                                take(n, ys) & x & drop(n, ys)
                            else
                                {x}
                            end if
                        end |λ|
                    end script
                    map(infix, enumFromTo(0, (length of ys)))
                end |λ|
            end script
            concatMap(result, a)
        end |λ|
    end script
    foldr(go, {{}}, xs)
end permutations
```


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