```applescript
-- levelNodes :: Tree a -> [[Tree a]]
on levelNodes(tree)
    script p
        on |λ|(xs)
            length of xs < 1
        end |λ|
    end script
    
    script f
        on |λ|(xs)
            script nest
                on |λ|(Node)
                    nest of Node
                end |λ|
            end script
            concatMap(nest, xs)
        end |λ|
    end script
    
    iterateUntil(p, f, {tree})
end levelNodes
```


```javascript
// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
    iterateUntil(xs => 1 > xs.length)(
        xs => xs.flatMap(x => x.nest)
    )([tree]);
```