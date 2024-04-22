```javascript
// gcd :: Integral a => a -> a -> a
const gcd = x =>
    y => {
        const zero = x.constructor(0);
        const go = (a, b) =>
            zero === b
                ? a
                : go(b, a % b);

        return go(abs(x), abs(y));
    };
```


```applescript
-- gcd :: Int -> Int -> Int
on gcd(a, b)
    set x to abs(a)
    set y to abs(b)
    repeat until y = 0
        if x > y then
            set x to x - y
        else
            set y to y - x
        end if
    end repeat
    return x
end gcd
```