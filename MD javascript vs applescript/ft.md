```javascript
// ft :: Int -> Int -> [Int]
const ft = m =>
    // From To.
    // An abbreviation of enumFromTo.
    n => Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);
```


```applescript
-- ft :: (Int, Int) -> [Int]
on ft(m, n)
    -- Abbreviation for quick testing
    if m ≤ n then
        set lst to {}
        repeat with i from m to n
            set end of lst to i
        end repeat
        return lst
    else
        return {}
    end if
end ft
```