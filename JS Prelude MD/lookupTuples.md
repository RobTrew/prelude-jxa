```js
// lookupTuples :: Eq a => a -> [(a, b)] -> Maybe b
const lookupTuples = k =>
    kvs => bindMay(
        find(x => k === fst(x))(
            kvs
        )
    )(x => Just(snd(x)));
```