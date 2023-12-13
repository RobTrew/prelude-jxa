```javascript
// first :: (a -> b) -> ((a, c) -> (b, c))
const first = f =>
    // A simple function lifted to one which applies
    // to a tuple, transforming only its first item.
    ([x, y]) => Tuple(f(x))(y);
```