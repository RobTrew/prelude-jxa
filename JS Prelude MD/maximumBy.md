```js
//  Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
```

```js
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = (f, xs) =>
    xs.length > 0 ? (
        xs.slice(1)
        .reduce((a, x) => f(x, a) > 0 ? x : a, xs[0])
    ) : undefined;
```