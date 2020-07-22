```js
// gt :: Ord a => a -> a -> Bool
const gt = x => y =>
    'Tuple' === x.type ? (
        x[0] > y[0]
    ) : (x > y);
```