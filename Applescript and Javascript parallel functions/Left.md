```applescript
-- Left :: a -> Either a b
on |Left|(x)
    script
        property type : "Either"
        property |Left| : x
        property |Right| : missing value
    end script
end |Left|
```

```js
// Left :: a -> Either a b
const Left = x => ({
    type: 'Either',
    Left: x
});
```