```js
// partition :: Predicate -> List -> (Matches, nonMatches)
```

```js
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p => xs =>
    xs.reduce(
        (a, x) =>
        p(x) ? (
            Tuple(a[0].concat(x))(a[1])
        ) : Tuple(a[0])(a[1].concat(x)),
        Tuple([])([])
    );
```