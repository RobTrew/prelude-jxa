```applescript
-- fst :: (a, b) -> a
on fst(tpl)
    if class of tpl is record then
        |1| of tpl
    else
        item 1 of tpl
    end if
end fst
```


```javascript
// fst :: (a, b) -> a
const fst = tpl =>
    // First member of a pair.
    tpl[0];
```