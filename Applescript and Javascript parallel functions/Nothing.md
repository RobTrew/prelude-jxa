```applescript
-- Nothing :: () -> Nothing
on Nothing()
    {type:"Maybe", Nothing:true}
end Nothing
```

```js
// Nothing :: () -> Nothing
const Nothing = () => ({
    type: 'Maybe',
    Nothing: true,
});
```