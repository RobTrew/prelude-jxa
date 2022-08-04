```javascript
// Just :: a -> Maybe a
const Just = x => ({
    type: "Maybe",
    Just: x
});
```