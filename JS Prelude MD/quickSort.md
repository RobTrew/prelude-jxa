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
            lessMore = partition(x => x <= h)(
                xs.slice(1)
            );
        return [].concat.apply(
            [], [quickSort(lessMore[0]), h, quickSort(lessMore[1])]
        );
    })() : xs;
```