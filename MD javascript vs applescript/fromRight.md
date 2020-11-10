```applescript
-- fromRight :: b -> Either a b -> b
on fromRight(def, lr)
    if isRight(lr) then
        |Right| of lr
    else
        def
    end if
end fromRight
```


```javascript
// fromRight :: b -> Either a b -> b
const fromRight = def =>
    // The contents of a 'Right' value or otherwise a default value.
    lr => isRight(lr) ? (
        lr.Right
    ) : def;
```