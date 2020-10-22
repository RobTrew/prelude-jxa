```javascript
// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = m =>
    n => !isNaN(m) ? (
        Array.from({
            length: 1 + n - m
        }, (_, i) => m + i)
    ) : enumFromTo_(m)(n);
```


```applescript
-- enumFromTo :: Int -> Int -> [Int]
on enumFromTo(m, n)
    if m ≤ n then
        set lst to {}
        repeat with i from m to n
            set end of lst to i
        end repeat
        lst
    else
        {}
    end if
end enumFromTo
```