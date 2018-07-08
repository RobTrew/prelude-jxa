```js
// traverseLR :: Applicative f => (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = (f, lr) =>
    undefined !== lr.Left ? (
        fmap(Right, f(lr.Right))
    ) : [lr]; //??
```