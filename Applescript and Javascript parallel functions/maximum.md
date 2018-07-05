```applescript
-- maximum :: Ord a => [a] -> a
on maximum(xs)
    script
        on |λ|(a, b)
            if a is missing value or b > a then
                b
            else
                a
            end if
        end |λ|
    end script
    
    foldl(result, missing value, xs)
end maximum
```

```js
// maximum :: Ord a => [a] -> a
const maximum = xs =>
    0 < xs.length ? (
        foldl1((a, x) => x > a ? x : a, xs)
    ) : undefined;
```