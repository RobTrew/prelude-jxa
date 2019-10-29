```js
// Lift a binary function to actions.
// liftA2 f a b = fmap f a <*> b
```

```js
// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = f => a => b => {
    const t = typeName(a);
    return (
        'Bottom' !== t ? (
            '(a -> b)' === t ? (
                liftA2Fn
            ) : 'Either' === t ? (
                liftA2LR
            ) : 'Maybe' === t ? (
                liftA2May
            ) : 'Tuple' === t ? (
                liftA2Tuple
            ) : 'Node' === t ? (
                liftA2Tree
            ) : liftA2List
        ) : liftA2List
    )(f)(a)(b);
};
```