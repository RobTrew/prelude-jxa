```applescript
-- last :: [a] -> a
on |last|(xs)
        item -1 of xs
end |last|
```


```javascript
// last :: [a] -> a
const last = xs => (
    // The last item of a list.
    ys => 0 < ys.length ? (
        ys.slice(-1)[0]
    ) : undefined
)(list(xs));
```