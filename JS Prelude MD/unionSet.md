```javascript
// unionSet :: Ord a => Set a -> Set a -> Set a
const unionSet = s => s1 =>
    Array.from(s1.values())
    .reduce(
        (a, x) => (a.add(x), a),
        new Set(s)
    );
```