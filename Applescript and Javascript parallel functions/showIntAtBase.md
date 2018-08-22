```applescript
-- showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
on showIntAtBase(base, toChr, n, rs)
    script showIt
        on |λ|(nd_, r)
            set {n, d} to ({|1|, |2|} of nd_)
            set r_ to toChr's |λ|(d) & r
            if n > 0 then
                |λ|(quotRem(n, base), r_)
            else
                r_
            end if
        end |λ|
    end script
    
    if base ≤ 1 then
        "error: showIntAtBase applied to unsupported base"
    else if n < 0 then
        "error: showIntAtBase applied to negative number"
    else
        showIt's |λ|(quotRem(n, base), rs)
    end if
end showIntAtBase
```

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