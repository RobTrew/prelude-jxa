```js
//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n)
```

```js
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f => xs =>
    list(xs).reduce((a, x) => undefined === a ? x : (
        0 > f(x)(a) ? x : a
    ), undefined);
```