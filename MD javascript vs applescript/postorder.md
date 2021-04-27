```applescript
-- Root elements of tree flattened bottom-up
-- into a postorder list.
-- postorder :: Tree a -> [a]
on postorder(node)
    script go
        on |λ|(xs, x)
            foldl(go, xs, nest of x) & {root of x}
        end |λ|
    end script
    go's |λ|({}, node)
end postorder
```


```javascript
// postorder :: Tree a -> [a]
const postorder = t => {
    // List of root elements of tree flattened
    // bottom-up into a postorder list.
    const go = (xs, x) =>
        nest(x).reduce(go, xs)
        .concat(root(x));

    return go([], t);
};
```