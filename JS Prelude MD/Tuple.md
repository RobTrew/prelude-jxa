```javascript
// Tuple (,) :: a -> b -> (a, b)
const Tuple = a =>
    b => ({
        type: "Tuple",
        "0": a,
        "1": b,
        length: 2,
        *[Symbol.iterator]() {
            for (const k in this) {
                if (!isNaN(k)) {
                    yield this[k];
                }
            }
        }
    });
```