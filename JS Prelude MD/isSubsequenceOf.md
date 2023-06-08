```javascript
// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
// isSubsequenceOf :: String -> String -> Bool
const isSubsequenceOf = xs =>
    // True if xs is a sub-sequence of ys.
    ys => {
        const go = (a, b) =>
            Boolean(a.length)
                ? Boolean(b.length)
                    ? go(
                        a[0] === b[0]
                            ? a.slice(1)
                            : a,
                        b.slice(1)
                    )
                    : false
                : true;

        return go(xs, ys);
    };
```