```javascript
// compareList :: [a] -> [a] -> Ordering
const compareList = xs => ys => {
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