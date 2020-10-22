```javascript
// any :: (a -> Bool) -> [a] -> Bool
const any = p =>
    // True if p(x) holds for at least
    // one item in xs.
    xs => [...xs].some(p);
```