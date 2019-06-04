```applescript
-- Nothing :: Maybe a
on Nothing()
    -- Constructor for an empty Maybe (option type) value.
    -- Empty wrapper returned where a computation is not possible.
    {type:"Maybe", Nothing:true}
end Nothing
```

```js
// Nothing :: Maybe a
const Nothing = () => ({
    type: 'Maybe',
    Nothing: true,
});
```