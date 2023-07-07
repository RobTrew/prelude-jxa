```javascript
// zeroPadded :: Int -> Int -> String
const zeroPadded = w =>
    // A string representation of the integer n,
    // zero padded at left to width w.
    n => `${n}`.padStart(w, "0");
```