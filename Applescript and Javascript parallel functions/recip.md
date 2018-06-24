```applescript
-- recip :: Num -> Num
on recip(n)
    if n ≠ 0 then
        1 / n
    else
        missing value
    end if
end recip
```

```js
// recip :: Num -> Num
const recip = n =>
    n !== 0 ? (1 / n) : undefined;
```