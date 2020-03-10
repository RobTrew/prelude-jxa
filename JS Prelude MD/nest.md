```js
// nest :: Tree a -> [a]
const nest = tree => {
    const subs = tree.nest;
    return 'function' !== typeof subs ? (
        subs
    ) : subs(tree.root);
};
```