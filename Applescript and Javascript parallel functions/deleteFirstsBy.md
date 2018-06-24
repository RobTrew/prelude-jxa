```applescript
-- deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
on deleteFirstsBy(fnEq, xs, ys)
    script
        on |λ|(x, y)
            deleteBy(fnEq, y, x)
        end |λ|
    end script
    foldl(result, xs, ys)
end deleteFirstsBy
```

```js
// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = (fnEq, xs, ys) =>
    ys.reduce((x, y) => deleteBy(fnEq, y, x), xs);
```