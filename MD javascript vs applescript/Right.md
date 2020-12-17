```javascript
// Right :: b -> Either a b
const Right = x => ({
    type: 'Either',
    Right: x
});
```


```applescript
-- Right :: b -> Either a b
on |Right|(x)
    {type:"Either", |Left|:missing value, |Right|:x}
end |Right|
```