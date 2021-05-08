```applescript
-- enumFromTo_ :: Enum a => a -> a -> [a]
on enumFromTo_(m, n)
    if m ≤ n then
        set x to fromEnum(m)
        set y to fromEnum(n)
        set xs to {}
        repeat with i from x to y
            set end of xs to i
        end repeat
        map(toEnum(m), xs)
    else
        return {}
    end if
end enumFromTo
```


```javascript
// enumFromTo_ :: Enum a => a -> a -> [a]
const enumFromTo_ = m => n => {
    const [x, y] = [m, n].map(fromEnum),
        b = x + (isNaN(m) ? 0 : m - x);

    return Array.from({
        length: 1 + (y - x)
    }, (_, i) => toEnum(m)(b + i));
};
```