```js
// gt :: Ord a => a -> a -> Bool
const gt = (x, y) => {
    return 'Tuple' === x.type ? (
        fst(x) > fst(y)
    ) : (x > y);
};
```