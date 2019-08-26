```js
// | True if any contained element satisfies the predicate.
```

```js
// any :: (a -> Bool) -> [a] -> Bool
const any = p => xs => xs.some(p);
```