```applescript
-- Just :: a -> Maybe a
on Just(x)
    -- Constructor for an inhabited Maybe (option type) value.
    -- Wrapper containing the result of a computation.
    {type:"Maybe", Nothing:false, Just:x}
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