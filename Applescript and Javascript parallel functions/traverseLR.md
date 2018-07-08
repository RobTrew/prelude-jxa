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

```js
// traverseLR :: Applicative f => (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = (f, lr) =>
    undefined !== lr.Left ? (
        fmap(Right, f(lr.Right))
    ) : [lr]; //??
```