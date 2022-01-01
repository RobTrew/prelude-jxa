```javascript
// last :: [a] -> a
const last = xs =>
    // The last item of a list.
    0 < xs.length ? (
        xs.slice(-1)[0]
    ) : null;
```


```applescript
-- last :: [a] -> a
on |last|(xs)
        item -1 of xs
end |last|
```