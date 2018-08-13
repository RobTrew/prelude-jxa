```applescript
-- findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
-- {2, 5}
```

```applescript
-- findIndices :: (a -> Bool) -> [a] -> [Int]
on findIndices(p, xs)
    script
        property f : mReturn(p)
        on |λ|(x, i, xs)
            if f's |λ|(x, i, xs) then
                {i}
            else
                {}
            end if
        end |λ|
    end script
    concatMap(result, xs)
end findIndices
```

```js
// findIndices :: (a -> Bool) -> [a] -> [Int]
const findIndices = (p, xs) =>
    concatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : [], xs);
```