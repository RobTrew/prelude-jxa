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

```js
// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(
    xs => xs.length < 1,
    xs => concatMap(x => x.nest, xs), [tree]
  );
```