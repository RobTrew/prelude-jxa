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
// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = (m, n) =>
    m <= n ? iterateUntil(
        x => n <= x,
        x => 1 + x,
        m
    ) : [];
```