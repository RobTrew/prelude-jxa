```javascript
// traverseLR :: Applicative f =>
// (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = f =>
    // instance of Traversable (Either a) where
    //    traverse _ (Left x) = pure (Left x)
    //    traverse f (Right y) = Right <$> f y
    lr => undefined !== lr.Left ? (
        [lr]
    ) : fmap(Right)(
        f(lr.Right)
    );
```