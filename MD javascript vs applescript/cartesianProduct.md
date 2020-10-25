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


```javascript
// cartesianProduct :: [a] -> [b] -> [[a, b]]
const cartesianProduct = xs =>
    ys => (
        bs => [...xs].flatMap(
            x => bs.flatMap(b => [
                [x].concat(b)
            ])
        )
    )([...ys]);
```