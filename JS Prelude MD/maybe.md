```javascript
// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = v =>
    // Default value (v) if m is Nothing, or f(m.Just)
    f => m => "Just" in m ? (
        f(m.Just)
    ) : v;
```