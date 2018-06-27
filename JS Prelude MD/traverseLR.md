```js
// traverseLR :: Applicative f => (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = (f, lr) =>
    lr.Left !== undefined ? (
        [lr]
    ) : fmap(Right, f(lr.Right));
```