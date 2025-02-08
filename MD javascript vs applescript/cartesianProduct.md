```javascript
// cartesianProduct :: [a] -> [b] -> [[a, b]]
const cartesianProduct = xs =>
    // Every tuple in the cartesian product
    // of xs and ys.
    ys => [...xs].flatMap(
        x => [...ys].map(
            Tuple(x)
        )
    );
```


```applescript
-- cartesianProduct :: [a] -> [b] -> [[a, b]]
on cartesianProduct(xs, ys)
    script
        on |λ|(x)
            script
                on |λ|(y)
                    {x, y}
                end |λ|
            end script
            concatMap(result, ys)
        end |λ|
    end script
    concatMap(result, xs)
end cartesianProduct
```