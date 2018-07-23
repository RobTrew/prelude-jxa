```js
// Given a curried/default function, returns an
// equivalent function on a tuple or list pair.
```

```js
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f => args =>
    1 < f.length ? (
        f(args[0], args[1])
    ) : f(args[0])(args[1]);
```