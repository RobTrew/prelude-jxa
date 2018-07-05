```applescript
-- maximumBy :: (a -> a -> Ordering) -> [a] -> a
on maximumBy(f, xs)
    set cmp to mReturn(f)
    script max
        on |λ|(a, b)
            if a is missing value or cmp's |λ|(a, b) < 0 then
                b
            else
                a
            end if
        end |λ|
    end script
    
    foldl(max, missing value, xs)
end maximumBy
```

```js
//  Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
```

```js
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = (f, xs) =>
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => 0 < f(x, a) ? x : a, xs[0])
    ) : undefined;
```