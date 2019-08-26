```js
// scanl1 is a variant of scanl that has no starting value argument
```

```js
// scanl1 :: (a -> a -> a) -> [a] -> [a]
const scanl1 = f => xs =>
    xs.length > 0 ? (
        scanl(f)(
            xs[0]
        )(xs.slice(1))
    ) : [];
```