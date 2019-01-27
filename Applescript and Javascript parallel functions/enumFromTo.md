```applescript
-- enumFromTo :: Int -> Int -> [Int]
on enumFromTo(m, n)
    if m ≤ n then
        set lst to {}
        repeat with i from m to n
            set end of lst to i
        end repeat
        return lst
    else
        return {}
    end if
end enumFromTo
```

```js
// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) => {
    const
        t = typeof m,
        isNum = 'number' === t,
        isInt = isNum && (0 == m % 1),
        [x, y] = isInt ? (
            [m, n]
        ) : [m, n].map(fromEnum),
        b = x + (isNum ? m - x : 0),
        tp = isInt ? undefined : m instanceof Object ? (
            m.enum
        ) : t;
    return Array.from({
        length: 1 + (y - x)
    }, isInt ? (
        (_, i) => b + i
    ) : (_, i) => toEnum(tp)(b + i))
};
```