```javascript
// levels :: Tree a -> [[a]]
const levels = tree => {
    // A list of lists, grouping the root
    // values of each level of the tree.
    const go = (a, node) => {
        const [h, ...t] = 0 < a.length ? a : [
            []
        ];

        return [
            [node.root, ...h],
            ...node.nest.reduceRight(go, t)
        ];
    };

    return go([], tree);
};
```


```applescript
-- levels :: Tree a -> [[a]]on levels(tree)    -- A list of lists, grouping the root    -- values of each level of the tree.    script go        on |λ|(node, a)            if {} ≠ a then                tell a to set {h, t} to {item 1, rest}            else                set {h, t} to {{}, {}}            end if                        {{root of node} & h} & foldr(go, t, nest of node)        end |λ|    end script        |λ|(tree, {}) of goend levels
```