```js
// Lift a binary function to actions.
// liftA2 f a b = fmap f a <*> b
```

```js
// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = (f, a, b) =>
    Array.isArray(a) ? (
        liftA2List(f, a, b)
    ) : (t => Boolean(t) ? (
        t === 'Either' ? (
            liftA2LR(f, a, b)
        ) : t === 'Maybe' ? (
            liftA2Maybe(f, a, b)
        ) : t === 'Tuple' ? (
            liftA2Tuple(f, a, b)
        ) : undefined
    ) : undefined)(a.type);
```