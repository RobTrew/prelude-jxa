```applescript
-- gt :: Ord a => a -> a -> Bool
on gt(x, y)
    set c to class of x
    if record is c or list is c then
        fst(x) > fst(y)
    else
        x > y
    end if
end gt
```

```js
// gt :: Ord a => a -> a -> Bool
const gt = (x, y) =>
    'Tuple' === x.type ? (
        x[0] > y[0]
    ) : (x > y);
```