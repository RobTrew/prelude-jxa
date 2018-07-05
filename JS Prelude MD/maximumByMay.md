```js
//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
```

```js
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce((a, x) => 0 < f(x, a) ? x : a, xs[0]))
    ) : Nothing();
```