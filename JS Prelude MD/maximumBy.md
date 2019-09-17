```js
//  Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
```

```js
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = f => xs =>
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => 0 < f(x)(a) ? x : a, xs[0])
    ) : undefined;
```