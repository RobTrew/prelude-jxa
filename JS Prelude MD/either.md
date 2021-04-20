```javascript
// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = fl =>
    // Application of the function fl to the
    // contents of any Left value in e, or
    // the application of fr to its Right value.
    fr => e => "Left" in e ? (
        fl(e.Left)
    ) : fr(e.Right);
```