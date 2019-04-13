```applescript
-- Ordering :: Int -> Ordering
on Ordering(e)
    if e > 0 then
        set v to 1
    else if e < 0 then
        set v to -1
    else
        set v to 0
    end if
    {type:"Ordering", value:v}
end Ordering
```

```js
// Ordering :: Int -> Ordering
const Ordering = e => ({
    type: 'Ordering',
    value: 0 > e ? (
        -1
    ) : 0 < e ? (
        1
    ) : 0
});
```