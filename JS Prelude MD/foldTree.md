```js
// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = f =>
    // The catamorphism on trees. A summary
    // value obtained by a depth-first fold.
    tree => {
        const go = x => f(x.root)(
            x.nest.map(go)
        );
        return go(tree);
    };
```