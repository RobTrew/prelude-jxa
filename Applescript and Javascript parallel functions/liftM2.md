```applescript
--  liftM2 (+) [0,1] [0,2] = [0,2,1,3]
```

```applescript
-- liftM2 :: (a -> b -> c) -> [a] -> [b] -> [c]
on liftM2(f, a, b)
    ap(map(curry(f), a), b)
end liftM2
```

```js
// > liftM2 (+) [0,1] [0,2] = [0,2,1,3]
// > liftM2 (+) (Just 1) Nothing = Nothing

// Control.Monad : 
// "Promote a function to a monad, scanning the monadic arguments 
// from left to right."

// Add 7, 9, or 10,  to 100 or 1000
// liftM2(plus, [7, 9, 10], [100, 1000])

// --> [107, 1007, 109, 1009, 110, 1010]

// liftM2 f xs ys = [f] <*> xs <*> ys
```

```js
// liftM2 :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftM2 = (f, a, b) =>
    Array.isArray(a) ? (
        ap(map((g => x => y => g(x, y))(f), a), b)
    ) : Object.keys(a)
    .indexOf('Nothing') !== -1 ? (
        a.Nothing || b.Nothing ? a : pureMay(f(a.Just, b.Just))
    ) : undefined;
```