```js
// Use of `take` and `length` here allows for zipping with non-finite 
// lists - i.e. generators like cycle, repeat, iterate.
```

```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = xs => ys => {
    const lng = Math.min(length(xs), length(ys));
    return Infinity !== lng ? (
        zipList(xs)(ys)
    ) : zipGen(xs)(ys);
};
```