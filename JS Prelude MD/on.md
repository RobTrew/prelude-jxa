```js
// e.g. sortBy(on(compare,length), xs)
```

```js
// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = f => g => a => b => f(g(a))(g(b));
```