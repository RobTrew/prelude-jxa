```applescript
--    1. Map each element of a structure to an action,
--    2. evaluate these actions from |Left| to |Right|, and
--    3. collect the results.
-- 
--     traverse :: (Traversable t, Applicative f) => (a -> f b) -> t a -> f (t b)
--     traverse_ f = foldr cons_f (pure [])
--        where cons_f x a = ((:) <$> (f x)) <*> a
```

```applescript
-- traverseList :: (Applicative f) => (a -> f b) -> [a] -> f (t b)
on traverseList(f, xs)
  sequenceAList(fmap(f, xs))
end traverseList
```

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