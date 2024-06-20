```javascript
// if_ :: Bool -> a -> a -> a
const if_ = bln =>
    x => y => bln
        ? x
        : y;
```


```applescript
-- if_ :: Bool -> a -> a -> a
on if_(bool, x, y)
    if bool then
        x
    else
        y
    end if
end if_
```