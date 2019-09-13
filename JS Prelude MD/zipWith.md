```js
// Use of `take` and `length` here allows zipping with non-finite lists
// i.e. generators like cycle, repeat, iterate.
```

```js
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f => xs => ys => {
    const lng = Math.min(length(xs), length(ys));
    return Infinity > lng ? (() => {
        as = take(lng)(xs),
            bs = take(lng)(ys);
        return Array.from({
            length: lng
        }, (_, i) => f(as[i])(
            bs[i]
        ));
    })() : zipWithGen(f)(xs)(ys);
};
```