```applescript
-- pureLR :: a -> Either e a
on pureLR(x)
    |Right|(x)
end pureLR
```

```js
// pureLR :: a -> Either e a
const pureLR = x => Right(x);
```