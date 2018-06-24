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

```js
// gcd :: Int -> Int -> Int
const gcd = (x, y) => {
    const _gcd = (a, b) => (0 === b ? a : _gcd(b, a % b));
    return _gcd(Math.abs(x), Math.abs(y));
};
```