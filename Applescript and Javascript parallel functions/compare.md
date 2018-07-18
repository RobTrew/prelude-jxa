```applescript
-- Ordering  :: (-1 | 0 | 1)
```

```applescript
-- compare :: a -> a -> Ordering
on compare(a, b)
    if a < b then
        -1
    else if a > b then
        1
    else
        0
    end if
end compare
```

```js
// compare :: a -> a -> Ordering
const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0);
```