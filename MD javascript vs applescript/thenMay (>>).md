```applescript
-- thenMay (>>) :: Maybe a -> Maybe b -> Maybe b
on thenMay(ma, mb)
    if Nothing of ma then
        ma
    else
        mb
    end if
end thenMay 
```


```javascript
// thenMay (>>) :: Maybe a -> Maybe b -> Maybe b
const thenMay = mbx => mby =>
    mbx.Nothing ? mbx : mby;
```