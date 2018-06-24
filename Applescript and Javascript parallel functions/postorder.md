```applescript
-- Root elements of tree flattened bottom-up
-- into a postorder list.
```

```applescript
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

```js
// Root elements of tree flattened bottom-up
// into a postorder list.
```

```js
// postorder :: Tree a -> [a]
const postorder = t => {
    const go = (xs, x) =>
        x.nest.reduce(go, xs).concat(x.root);
    return go([], t);
};
```