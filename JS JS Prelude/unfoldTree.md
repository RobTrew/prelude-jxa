```js
// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = f =>
    // A tree built from a seed value
    b => {
        const tpl = f(b);
        return Node(tpl[0])(
            unfoldForest(f)(
                tpl[1]
            )
        );
    };
```