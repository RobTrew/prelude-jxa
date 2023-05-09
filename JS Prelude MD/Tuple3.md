```javascript
// Tuple3 (,,) :: a -> b -> c -> (a, b, c)
const Tuple3 = a => b => c => ({
    type: "Tuple3",
    "0": a,
    "1": b,
    "2": c,
    length: 3,
    *[Symbol.iterator]() {
        for (const k in this) {
            if (!isNaN(k)) {
                yield this[k];
            }
        }
    }
});
```