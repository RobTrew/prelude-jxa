```applescript
-- traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
on traverseMay(f, mb)
    if Nothing of mb then
        {mb}
    else
        fmap(my Just, mReturn(f)'s |λ|(Just of mb))
    end if
end traverseMay
```

```js
// traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMay = (f, mb) =>
    mb.Nothing ? (
       [mb]
   ) : fmap(Just, f(mb.Just));
```