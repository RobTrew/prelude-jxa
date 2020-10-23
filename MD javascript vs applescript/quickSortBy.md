```applescript
-- quickSortBy(comparing(my |length|), {"alpha", "beta", "gamma", "delta", "epsilon", "zeta", "eta", "theta", "iota", "kappa", "lambda", "mu"})
-- quickSortBy :: (a -> a -> Ordering) -> [a] -> [a]
on quickSortBy(cmp, xs)
    if length of xs > 1 then
        set h to item 1 of xs
        script
            on |λ|(x)
                cmp's |λ|(x, h) ≠ 1
            end |λ|
        end script
        set {less, more} to partition(result, rest of xs)
        quickSortBy(cmp, less) & h & quickSortBy(cmp, more)
    else
        xs
    end if
end quickSortBy
```


```javascript
// quickSortBy :: (a -> a -> Ordering) -> [a] -> [a]
const quickSortBy = cmp => {
    // Included only for comparison with AppleScript.
    // sort and sortBy are faster and more flexible.
    const go = xs => xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(
                x => 1 !== cmp(x)(h)
            )(xs.slice(1));
        return [].concat.apply([], [
            go(lessMore[0]),
            h,
            go(lessMore[1])
        ]);
    })() : xs;
    return go;
};
```