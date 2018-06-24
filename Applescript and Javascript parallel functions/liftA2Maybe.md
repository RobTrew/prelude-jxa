```applescript
-- liftA2Maybe :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
on liftA2Maybe(f, a, b)
    if Nothing of a then
        a
    else if Nothing of b then
        b
    else
        Just(|λ|(Just of a, Just of b) of mReturn(f))
    end if
end liftA2Maybe
```

```js
// liftA2Maybe :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2Maybe = (f, a, b) =>
    a.Nothing ? a : b.Nothing ? b : Just(f(a.Just, b.Just));
```