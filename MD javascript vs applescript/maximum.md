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


```javascript
// maximum :: Ord a => [a] -> a
const maximum = xs => (
    // The largest value in a non-empty list.
    ys => 0 < ys.length ? (
        ys.slice(1).reduce(
            (a, y) => y > a ? (
                y
            ) : a, ys[0]
        )
    ) : undefined
)(list(xs));
```