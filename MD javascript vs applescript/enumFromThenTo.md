```applescript
-- enumFromThenTo :: Int -> Int -> Int -> [Int]
on enumFromThenTo(x1, x2, y)
    set xs to {}
    set gap to x2 - x1
    set d to max(1, abs(gap)) * (signum(gap))
    repeat with i from x1 to y by d
        set end of xs to i
    end repeat
    return xs
end enumFromThenTo
```


```javascript
// enumFromThenTo :: Int -> Int -> Int -> [Int]
const enumFromThenTo = m =>
    // Integer values enumerated from m to n
    // with a step defined by (nxt - m).
    nxt => n => {
        const d = nxt - m;

        return Array.from({
            length: (Math.floor(n - nxt) / d) + 2
        }, (_, i) => m + (d * i));
    };
```