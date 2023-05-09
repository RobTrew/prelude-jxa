```javascript
// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = mf =>
    // Just an application of Maybe a function to
    // to Maybe a value, or Nothing.
    liftA2May(x => x)(mf);
```