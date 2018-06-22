```js
// Maybe f applied to Maybe x, deriving a Maybe y
```

```js
// apMaybe (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMaybe = (mf, mx) =>
    mf.Nothing || mx.Nothing ? (
        Nothing()
    ) : Just(mf.Just(mx.Just));
```