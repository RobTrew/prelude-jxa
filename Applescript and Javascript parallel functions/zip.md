```applescript
-- zip :: [a] -> [b] -> [(a, b)]
on zip(xs, ys)
    zipWith(Tuple, xs, ys)
end zip
```

```js
// Use of `take` and `length` here allows for zipping with non-finite 
// lists - i.e. generators like cycle, repeat, iterate.
```

```js
// zip :: [a] -> [b] -> [(a, b)]
const zip = (xs, ys) => {
    const
        lng = Math.min(length(xs), length(ys)),
        bs = take(lng, ys);
    return take(lng, xs).map((x, i) => Tuple(x, bs[i]));
};
```