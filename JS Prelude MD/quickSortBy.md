```js
// quickSortBy :: (a -> a -> Ordering) -> [a] -> [a]
const quickSortBy = cmp =>
    // Included only for comparison with AppleScript
    // sort and sortBy are faster and more flexible
    xs => xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(x => 1 !== cmp(x)(h))(
                xs.slice(1)
            );
        return [].concat.apply(
            [], [quickSortBy(cmp)(lessMore[0]), h, quickSortBy(cmp)(lessMore[1])]
        );
    })() : xs;
```