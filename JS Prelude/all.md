```js
// Determines whether all elements of the structure 
// satisfy the predicate.
```

```js
// all :: (a -> Bool) -> [a] -> Bool
const all = (p, xs) => xs.every(p);
```