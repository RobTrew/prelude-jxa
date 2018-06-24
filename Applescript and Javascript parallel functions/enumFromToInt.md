```applescript
-- enumFromToInt :: Int -> Int -> [Int]
on enumFromToInt(m, n)
    if m ≤ n then
        set lst to {}
        repeat with i from m to n
            set end of lst to i
        end repeat
        return lst
    else
        return {}
    end if
end enumFromToInt
```

```js
// enumFromToInt :: Int -> Int -> [Int]
const enumFromToInt = (m, n) =>
    m <= n ? iterateUntil(
        x => n <= x,
        x => 1 + x,
        m
    ) : [];
```