```applescript
-- last :: [a] -> a
on |last|(xs)
        item -1 of xs
end |last|
```

```js
// last :: [a] -> a
const last = xs =>
    0 < xs.length ? xs.slice(-1)[0] : undefined;
```