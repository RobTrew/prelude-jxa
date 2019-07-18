```applescript
-- findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
--> {2, 5}
```

```applescript
-- findIndices :: (a -> Bool) -> [a] -> [Int]
-- findIndices :: (String -> Bool) -> String -> [Int]
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
// findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
//-> {2, 5}
```

```js
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = (p, xs) =>
    xs.flatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : []);
```