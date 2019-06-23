```js
// True if all elements of the list 
// satisfy the predicate.
```

```js
// all :: (a -> Bool) -> [a] -> Bool
const all = (p, xs) => xs.every(p);
```