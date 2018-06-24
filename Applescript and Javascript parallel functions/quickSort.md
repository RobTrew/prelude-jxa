```applescript
-- Adequate for small sorts, but sort :: Ord a => [a] -> [a], (which uses the ObjC
-- sortedArrayUsingSelector) is the one to use
```

```applescript
-- quickSort :: (Ord a) => [a] -> [a]
on quickSort(xs)
    if length of xs > 1 then
        set h to item 1 of xs
        script
            on |λ|(x)
                x ≤ h
            end |λ|
        end script
        set {less, more} to partition(result, rest of xs)
        quickSort(less) & h & quickSort(more)
    else
        xs
    end if
end quickSort
```

```js
// Included only for comparison with AppleScript
// sort and sortBy are faster and more flexible
```

```js
// quickSort :: (Ord a) => [a] -> [a]
const quickSort = xs =>
    xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(x => x <= h, xs.slice(1));
        return [].concat.apply(
            [], [quickSort(lessMore[0]), h, quickSort(lessMore[1])]
        );
    })() : xs;
```