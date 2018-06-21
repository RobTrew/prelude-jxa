```js
// liftA2Maybe :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2Maybe = (f, a, b) =>
    a.Nothing ? a : b.Nothing ? b : Just(f(a.Just, b.Just));
```