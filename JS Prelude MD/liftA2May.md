```js
// liftA2May :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2May = f =>
    a => b => a.Nothing ? (
        a
    ) : b.Nothing ? (
        b
    ) : Just(f(a.Just)(b.Just));
```