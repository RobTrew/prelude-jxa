```js
// postorder :: Tree a -> [a]
const postorder = t => {
    // List of root elements of tree flattened
    // bottom-up into a postorder list.
    const go = (xs, x) =>
        nest(x).reduce(go, xs).concat(root(x));
    return go([], t);
};
```