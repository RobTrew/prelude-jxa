```javascript
// pureLR :: a -> Either e a
const pureLR = x =>
    // The value x lifted into the Either monad.
    Right(x);
```