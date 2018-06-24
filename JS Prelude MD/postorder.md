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