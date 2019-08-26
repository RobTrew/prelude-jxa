```js
// Note that that the Haskell signature of foldr differs from that of
// foldl - the positions of accumulator and current value are reversed
```

```js
// foldr :: (b -> a -> a) -> a -> [b] -> a
const foldr = f => a => xs => {
    let v = a,
        i = xs.length;
    while (i--) v = f(xs[i])(v);
    return v;
};
```