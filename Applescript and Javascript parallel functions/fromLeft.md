```applescript
-- fromLeft :: a -> Either a b -> a
on fromLeft(def, lr)
    if isLeft(lr) then
        |Left| of lr
    else
        def
    end if
end fromLeft
```

```js
// | Return the contents of a 'Left'-value or a default value otherwise.
```

```js
// fromLeft :: a -> Either a b -> a
const fromLeft = (def, lr) =>
  isLeft(lr) ? lr.Left : def;
```