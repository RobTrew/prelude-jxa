```javascript
// ceiling :: Num -> Int
const ceiling = x => {
    // The least integer not less than x.
    const
        nr = properFraction(x),
        n = nr[0];

    return 0 < nr[1] ? 1 + n : n;
};
```


```applescript
-- ceiling :: Num -> Int
on ceiling(x)
    set nr to properFraction(x)
    set n to |1| of nr
    if 0 < (|2| of nr) then
        n + 1
    else
        n
    end if
end ceiling
```