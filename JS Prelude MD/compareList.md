```javascript
// compareList :: [a] -> [a] -> Ordering
const compareList = xs => ys => {
    // 0 if two lists are identical.
    // -1 if xs is shorter, or has a lower leftward value.
    // 1 if xs is longer, or has a higher leftward value.
    const
        xEmpty = 0 === xs.length,
        yEmpty = 0 === ys.length;

    return xEmpty || yEmpty ? (
        compare(Number(xEmpty))(Number(yEmpty))
    ) : (() => {
        const ord = compare(xs[0])(ys[0]);

        return 0 === ord ? (
            compareList(xs.slice(1))(ys.slice(1))
        ) : ord;
    })();
};
```