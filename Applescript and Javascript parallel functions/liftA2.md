```applescript
-- Lift a binary function to actions.
-- e.g.
-- liftA2(mult, {1, 2, 3}, {4, 5, 6}) 
--> {4, 5, 6, 8, 10, 12, 12, 15, 18}
```

```applescript
-- liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f con liftA2(f, a, b)    set c to class of a    if c is list then        liftA2List(f, a, b)    else if c is record and keys(a) contains "type" then        set t to type of a        if t = "Either" then            liftA2LR(f, a, b)        else if t = "Maybe" then            liftA2Maybe(f, a, b)        else if t = "Tuple" then            liftA2Tuple(f, a, b)        else            missing value        end if    else        missing value    end ifend liftA2
```

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
        ) : undefined
    ) : undefined)(a.type);
```