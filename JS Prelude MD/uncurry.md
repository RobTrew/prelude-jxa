```js
// Given a curried function, return an
// equivalent function on a tuple or list pair
```

```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f => args =>
    f(args[0])(args[1]);
```