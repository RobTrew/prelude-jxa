```js
// showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
const showIntAtBase = (base, toChr, n, rs) => {
    const showIt = ([n, d], r) => {
        const r_ = toChr(d) + r;
        return n !== 0 ? (
            showIt(quotRem(n, base), r_)
        ) : r_;
    };
    return base <= 1 ? (
        'error: showIntAtBase applied to unsupported base'
    ) : n < 0 ? (
        'error: showIntAtBase applied to negative number'
    ) : showIt(quotRem(n, base), rs);
};
```