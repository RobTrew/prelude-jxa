```applescript
-- Just :: a -> Maybe a
on Just(x)
    {type: "Maybe", Nothing:false, Just:x}
end Just
```

```js
// Just :: a -> Maybe a
const Just = x => ({
    type: 'Maybe',
    Nothing: false,
    Just: x
});
```