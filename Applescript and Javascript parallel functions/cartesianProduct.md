```applescript
-- cartesianProduct :: [a] -> [b] -> [(a, b)]
on cartesianProduct(xs, ys)
    script
        on |λ|(x)
            script
                on |λ|(y)
                    {Tuple(x, y)}
                end |λ|
            end script
            concatMap(result, ys)
        end |λ|
    end script
    concatMap(result, xs)
end cartesianProduct
```

```js
// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = (xs, ys) =>
    concatMap((x => concatMap(y => [
        [Tuple(x, y)]
    ], ys)), xs);
```