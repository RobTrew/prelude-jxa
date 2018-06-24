```applescript
-- Ordering  :: (-1 | 0 | 1)
```

```applescript
-- compare :: a -> a -> Ordering
on compare(a, b)
    if a < b then
        |LT|
    else if a > b then
        |GT|
    else
        |EQ|
    end if
end compare
```

```js
// compare :: a -> a -> Ordering
const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0);
```