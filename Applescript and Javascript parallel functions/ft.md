```applescript
-- Abbreviation for quick testing
```

```applescript
-- ft :: (Int, Int) -> [Int]
on ft(m, n)
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

```js
// Abbreviation for quick testing
```

```js
// ft :: (Int, Int) -> [Int]
const ft = (m, n) =>
    Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);
```