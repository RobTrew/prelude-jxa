```js
// Maybe f applied to Maybe x, deriving a Maybe y
```

```js
// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = (mf, mx) =>
    mf.Nothing || mx.Nothing ? (
        Nothing()
    ) : Just(mf.Just(mx.Just));
```