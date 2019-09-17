```js
// Note that that the Haskell signature of foldr differs from that of
// foldl - the positions of accumulator and current value are reversed
```

```js
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f => a => xs => {
    let v = a,
        i = xs.length;
    while (i--) v = f(xs[i])(v);
    return v;
};
```