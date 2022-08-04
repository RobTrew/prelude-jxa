```javascript
// fromMaybe :: a -> Maybe a -> a
const fromMaybe = v =>
    mb => "Nothing" in mb ? (
        v
    ) : mb.Just;
```