```js
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