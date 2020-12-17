```javascript
// flattenTree :: Tree a -> [a]
const flattenTree = tree => {
    const
        go = (xs, node) => [node.root].concat(
            node.nest.reduceRight(go, xs)
        );
    return go([], tree);
};
```


```applescript
-- flattenTree :: Tree a -> [a]
on flattenTree(node)
    -- The root elements of a tree in pre-order.
    script go
        on |λ|(x, xs)
            {root of x} & foldr(go, xs, nest of x)
        end |λ|
    end script
    go's |λ|(node, {})
end flattenTree
```