```applescript
-- zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
on zipWith(f, xs, ys)
    set lng to min(length of xs, length of ys)
    if 1 > lng then return {}
    set lst to {}
    tell mReturn(f)
        repeat with i from 1 to lng
            set end of lst to |λ|(item i of xs, item i of ys)
        end repeat
        return lst
    end tell
end zipWith
```

```js
// Use of `take` and `length` here allows zipping with non-finite lists
// i.e. generators like cycle, repeat, iterate.
```

```js
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) => {
    const
        lng = Math.min(length(xs), length(ys)),
        as = take(lng, xs),
        bs = take(lng, ys);
    return Array.from({
        length:lng
    }, (_, i) => f(as[i], bs[i], i));
};
```