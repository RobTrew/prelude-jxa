```applescript
-- fromLeft :: a -> Either a b -> a
on fromLeft(def, lr)
    if isLeft(lr) then
        |Left| of lr
    else
        def
    end if
end fromLeft
```


```javascript
// fromLeft :: a -> Either a b -> a
const fromLeft = def =>
    // The contents of a 'Left' value,
    // or otherwise a default value.
    lr => isLeft(lr)
        ? lr.Left
        : def;
```