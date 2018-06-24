```applescript
-- round :: a -> Int
on |round|(n)
    round n
end |round|
```

```js
// round :: a -> Int
const round = x => {
    const
        nr = properFraction(x),
        [n, r] = [nr[0], nr[1]]
        m = n + (r < 0 ? -1 : 1),
        sign = signum(abs(r) - 0.5);
    return (-1 === sign) ? n : (
        0 === sign ? (even(n) ? n : m) : (
            1 === sign ? m : undefined
        )
    );
};
```