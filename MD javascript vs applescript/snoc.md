```applescript
-- Mirror image of cons
-- New copy of the list, with an atom added at the end
-- snoc :: [a] -> a -> [a]
on snoc(xs, x)
    xs & {x}
end snoc
```


```javascript
// snoc :: [a] -> a -> [a]
const snoc = xs =>
    // The mirror image of cons
    // A new copy of the given list,
    // with an atom appended at the end.
    x => list(xs).concat(x);
```