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
        'Either' === t ? (
            liftA2LR(f, a, b)
        ) : 'Maybe' === t ? (
            liftA2Maybe(f, a, b)
        ) : 'Tuple' === t ? (
            liftA2Tuple(f, a, b)
        ) : 'Node' === t ? (
            liftA2Tree(f, a, b)
        ) : undefined
    ) : undefined)(a.type);
```