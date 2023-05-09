```javascript
// mappendFn (<>) :: Monoid b => (a -> b) -> (a -> b) -> (a -> b)
const mappendFn = f =>
    g => x => mappend(f(x))(
        g(x)
    );
```