```javascript
// Tuple (,) :: a -> b -> (a, b)
const Tuple = a =>
    // A pair of values, possibly of
    // different types.
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


```applescript
-- Tuple (,) :: a -> b -> (a, b)
on Tuple(a, b)
    -- Constructor for a pair of values, possibly of two different types.
    {type:"Tuple", |1|:a, |2|:b, length:2}
end Tuple
```