```applescript
-- round :: a -> Inton |round|(n)	round nend |round|
```

```js
// round :: a -> Int
const round = x => {
    const
        nr = properFraction(x),
        [n, r] = [nr[0], nr[1]]
        m = n + (r < 0 ? -1 : 1),
        sign = signum(abs(r) - 0.5);
    return sign === -1 ? n : (
        sign === 0 ? (even(n) ? n : m) : (
            sign === 1 ? m : undefined
        )
    );
};
```