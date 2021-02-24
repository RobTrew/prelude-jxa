```javascript
// snd :: (a, b) -> b
const snd = tpl =>
    // Second member of a pair.
    tpl[1];
```


```applescript
-- snd :: (a, b) -> b
on snd(tpl)
    if class of tpl is record then
        |2| of tpl
    else
        item 2 of tpl
    end if
end snd
```