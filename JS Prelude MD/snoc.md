```javascript
// snoc :: [a] -> a -> [a]
const snoc = xs =>
    // The mirror image of cons
    // A new copy of the given list,
    // with an atom appended at the end.
    x => xs.concat(x);
```