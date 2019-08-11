```applescript
-- Just :: a -> Maybe a
on Just(x)
    -- Constructor for an inhabited Maybe (option type) value.
    -- Wrapper containing the result of a computation.
    script
        property type : "Maybe"
        property Nothing : false
        property Just : x
    end script
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