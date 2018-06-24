```applescript
-- swap :: (a, b) -> (b, a)
on swap(ab)
    if class of ab is record then
        Tuple(|2| of ab, |1| of ab)
    else
        {item 2 of ab, item 1 of ab}
    end if
end swap
```

```js
// swap :: (a, b) -> (b, a)
const swap = ab =>
    Tuple(ab[1], ab[0]);
```