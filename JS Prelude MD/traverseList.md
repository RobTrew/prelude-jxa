```js
// - Map each element of a structure to an action,
// - evaluate these actions from left to right,
// - and collect the results.

// traverse :: (Traversable t, Applicative f) => (a -> f b) -> t a -> f (t b)
// traverse_ f = foldr cons_f (pure [])
//   where cons_f x a = ((:) <$> (f x)) <*> a
```

```js
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f (t b)
const traverseList = (f, xs) =>
    sequenceAList(fmap(f, xs));
```