```js
// showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
const showIntAtBase = (base, toChr, n, rs) => {
    const showIt = ([n, d], r) => {
        const r_ = toChr(d) + r;
        return 0 !== n ? (
            showIt(quotRem(n, base), r_)
        ) : r_;
    };
    return 1 >= base ? (
        'error: showIntAtBase applied to unsupported base'
    ) : 0 > n ? (
        'error: showIntAtBase applied to negative number'
    ) : showIt(quotRem(n, base), rs);
};
```