```javascript
// curry :: ((a, b) -> c) -> a -> b -> c
const curry = f =>
    a => b => 1 < f.length ? (
        f(a, b)
    ) : f(Tuple(a)(b));
```