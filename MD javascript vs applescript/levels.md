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


```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (a, node) => {
        const [h, ...t] = 0 < a.length ? (
            a
        ) : [
            [],
            []
        ];

        return [
            [node.root, ...h],
            ...node.nest.slice(0)
            .reverse()
            .reduce(go, t)
        ];
    };
};
```