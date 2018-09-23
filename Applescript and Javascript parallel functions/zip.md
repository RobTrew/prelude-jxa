```applescript
-- zip :: [a] -> [b] -> [(a, b)]
on zip(xs, ys)
    set lng to min(length of xs, length of ys)
    set lst to {}
    repeat with i from 1 to lng
        set end of lst to Tuple(item i of xs, item i of ys)
    end repeat
    return lst
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