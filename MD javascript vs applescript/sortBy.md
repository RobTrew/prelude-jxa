```javascript
// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f =>
    xs => xs.slice()
    .sort((a, b) => f(a)(b));
```


```applescript
-- sortBy :: (a -> a -> Ordering) -> [a] -> [a]
on sortBy(f, xs)
    -- Enough for small scale sorts.
    -- Use instead sortOn (Ord b => (a -> b) -> [a] -> [a])
    -- which is equivalent to the more flexible sortBy(comparing(f), xs)
    -- and uses a much faster ObjC NSArray sort method
    if length of xs > 1 then
        set h to item 1 of xs
        set f to mReturn(f)
        script
            on |λ|(x)
                f's |λ|(x, h) ≤ 0
            end |λ|
        end script
        set lessMore to partition(result, rest of xs)
        sortBy(f, |1| of lessMore) & {h} & ¬
            sortBy(f, |2| of lessMore)
    else
        xs
    end if
end sortBy
```