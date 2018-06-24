```applescript
-- scanr1 :: (a -> a -> a) -> [a] -> [a]
on scanr1(f, xs)
    if length of xs > 0 then
        scanr(f, item -1 of xs, init(xs))
    else
        {}
    end if
end scanr1
```

```js
// scanr1 is a variant of scanr that has no starting value argument
```

```js
// scanr1 :: (a -> a -> a) -> [a] -> [a]
const scanr1 = (f, xs) =>
    xs.length > 0 ? scanr(f, xs.slice(-1)[0], xs.slice(0, -1)) : [];
```