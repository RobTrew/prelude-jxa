```js
// Maybe f applied to Maybe x, deriving a Maybe y
```

```js
// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = mf =>
    liftA2May(x => x)(mf)
```