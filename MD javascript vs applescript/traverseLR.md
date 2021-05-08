```javascript
// traverseLR :: Applicative f =>
// (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = f =>
    // instance of Traversable (Either a) where
    //    traverse _ (Left x) = pure (Left x)
    //    traverse f (Right y) = Right <$> f y
    lr => "Left" in lr ? (
        [lr]
    ) : fmap(Right)(
        f(lr.Right)
    );
```


```applescript
-- traverseLR :: Applicative f => (t -> f b) -> Either a t -> f (Either a b)
on traverseLR(f, lr)
    if |Left| of lr is not missing value then
        {lr}
    else
        fmap(my |Right|, mReturn(f)'s |λ|(|Right| of lr))
    end if
end traverseLR
```