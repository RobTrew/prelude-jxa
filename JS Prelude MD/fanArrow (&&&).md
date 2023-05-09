```javascript
// fanArrow (&&&) ::
// (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // A combined function, given f and g,
    // from x to a tuple of (f(x), g(x))
    // ((,) . f <*> g)
    g => x => Tuple(f(x))(
        g(x)
    );
```