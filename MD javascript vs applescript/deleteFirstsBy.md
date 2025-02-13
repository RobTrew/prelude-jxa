```javascript
// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = fEq =>
    // The first list purged of the first instance of
    // each predicate-matching element in the second list.
    xs => targets => {
        const d = deleteBy(fEq);

        return targets.reduce(
            (a, t) => d(t)(a),
            xs
        );
    };
```


```applescript
-- deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
on deleteFirstsBy(fnEq, xs, ys)
    script
        on |λ|(x, y)
            deleteBy(fnEq, y, x)
        end |λ|
    end script
    foldl(result, xs, ys)
end deleteFirstsBy
```