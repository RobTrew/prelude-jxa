```javascript
// nest :: Tree a -> [a]
const nest = tree => {
    // Allowing for lazy (on-demand) evaluation.
    // If the nest turns out to be a function –
    // rather than a list – that function is applied
    // here to the root, and returns a list.
    const xs = tree.nest;

    return "function" !== typeof xs ? (
        xs
    ) : xs(root(x));
};
```


```applescript
-- nest :: Tree a -> [a]
on nest(oTree)
    nest of oTree
end nest
```