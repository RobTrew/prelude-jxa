```js
// Given a curried/default function, returns an
// equivalent function on a tuple or list pair.
```

```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    (a, b) => f(a)(b)
```