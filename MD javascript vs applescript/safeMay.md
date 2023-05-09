```javascript
// safeMay :: (a -> Bool) -> (a -> b) -> Maybe b
const safeMay = p => f => x =>
    p(x) ? Just(f(x)) : Nothing();
```


```applescript
-- safeMay :: (a -> Bool) -> (a -> b) -> Maybe b
on safeMay(p, f, x)
    if p(x) then
        Just(f(x))
    else
        Nothing()
    end if
end safeMay
```