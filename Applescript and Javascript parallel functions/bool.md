```applescript
-- bool :: a -> a -> Bool -> a
on bool(f, t, p)
    if p then
        t
    else
        f
    end if
end bool
```

```js
// bool :: a -> a -> Bool -> a
const bool = f => t => p =>
    p ? t : f;
```