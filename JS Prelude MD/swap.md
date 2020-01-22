```js
// swap :: (a, b) -> (b, a)
const swap = ab =>
    // The pair ab with its order reversed.
    Tuple(ab[1])(
        ab[0]
    );
```