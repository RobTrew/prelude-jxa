```javascript
// compareList :: [a] -> [a] -> Ordering
const compareList = xs => ys => {
    const
        nx = xs.length,
        ny = ys.length;

    return 0 === nx ? (
        0 === ny ? 0 : -1
    ) : 0 === ny ? 1 : (() => {
        const ord = compare(xs[0])(ys[0]);

        return 0 === ord ? (
            compareList(xs.slice(1))(ys.slice(1))
        ) : ord;
    })();
};
```