```javascript
// isSortedBy :: (a -> a -> Bool) -> [a] -> Bool
const isSortedBy = p =>
    // True if all adjacent pairs of elements in
    // the list return True under the predicate p.
    xs => xs.length < 2 || all(x => x < 1)(
        zipWith(p)(
            xs
        )(tail(xs))
    );
```


```applescript
-- The 'isSortedBy' function returns true iff the predicate returns true
-- for all adjacent pairs of elements in the list.
-- isSortedBy :: (a -> a -> Bool) -> [a] -> Bool
on isSortedBy(cmp, xs)
    script LE
        on |λ|(x)
            x < 1
        end |λ|
    end script
    (length of xs < 2) or all(LE, zipWith(cmp, xs, tail(xs)))
end isSortedBy
```