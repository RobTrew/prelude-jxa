```applescript
-- enumFromThenToInt :: Int -> Int -> Int -> [Int]
on enumFromThenToInt(x1, x2, y)
    set xs to {}
    set gap to x2 - x1
    set d to max(1, abs(gap)) * (signum(gap))
    repeat with i from x1 to y by d
        set end of xs to i
    end repeat
    return xs
end enumFromThenToInt
```

```js
// enumFromThenToInt :: Int -> Int -> Int -> [Int]
const enumFromThenToInt = (x1, x2, y) => {
    const d = x2 - x1;
    return Array.from({
        length: Math.floor(y - x2) / d + 2
    }, (_, i) => x1 + (d * i));
};
```