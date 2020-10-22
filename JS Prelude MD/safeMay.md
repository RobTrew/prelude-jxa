```javascript
// safeMay :: (a -> Bool) -> (a -> b) -> Maybe b
const safeMay = p => f => x =>
    p(x) ? Just(f(x)) : Nothing();
```