```js
// mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
const mappendMaybe = a => b =>
    a.Nothing ? (
        b
    ) : b.Nothing ? (
        a
    ) : Just(
        mappend(a.Just)(
            b.Just
        )
    );
```