```applescript
-- Left :: a -> Either a b
on |Left|(x)
    {type:"Either", |Left|:x, |Right|:missing value}
end |Left|
```


```javascript
// Left :: a -> Either a b
const Left = x => ({
    type: 'Either',
    Left: x
});
```