```javascript
// fmapLR (<$>) :: (b -> c) -> Either a b -> Either a c
const fmapLR = f =>
    // Either f mapped into the contents of any Right
    // value in e, or e unchanged if is a Left value.
    e => "Left" in e ? (
        e
    ) : Right(f(e.Right));
```