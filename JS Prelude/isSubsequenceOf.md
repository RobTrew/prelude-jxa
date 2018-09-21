```js
// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
// isSubsequenceOf :: String -> String -> Bool
const isSubsequenceOf = (xs, ys) => {
    const iss = (a, b) =>
        a.length > 0 ? (
            b.length > 0 ? (
                iss((a[0] === b[0] ? a.slice(1) : a), b.slice(1))
            ) : false
        ) : true;
    return iss.apply(
        null, 'string' === typeof xs ? [
            xs.split(''), ys.split('')
        ] : [xs, ys]
    );
};
```