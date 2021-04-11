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


```javascript
// gcd :: Integral a => a -> a -> a
const gcd = x =>
    y => {
        const zero = x.constructor(0);
        const _gcd = (a, b) =>
            zero === b ? (
                a
            ) : _gcd(b, rem(a)(b));

        return _gcd(abs(x), abs(y));
    };
```