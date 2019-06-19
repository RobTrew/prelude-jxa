```applescript
-- levels :: Tree a -> [[a]]
on levels(tree)
    script nextLayer
        on |λ|(xs)
            script
                on |λ|(x)
                    nest of x
                end |λ|
            end script
            concatMap(result, xs)
        end |λ|
    end script
    
    script roots
        on |λ|(xs)
            script
                on |λ|(x)
                    root of x
                end |λ|
            end script
            map(result, xs)
        end |λ|
    end script
    
    map(roots, iterateUntil(my isNull, nextLayer, {tree}))
end levels
```

```js
// levels :: Tree a -> [[a]]
const levels = tree =>
    iterateUntil(
        xs => 1 > xs.length,
        ys => [].concat(...ys.map(nest)),
        [tree]
    ).map(xs => xs.map(root));
```