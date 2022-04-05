```javascript
// subTreeAtPath :: Tree String -> [String] -> Maybe Tree String
const subTreeAtPath = tree => path => {
    const go = (subNest, xs) =>
        Boolean(nest.length) && Boolean(xs.length) ? (() => {
            const h = xs[0];

            return bindMay(find(t => h === t.root, subNest))(
                t => 1 < xs.length ? (
                    go(t.nest, xs.slice(1))
                ) : Just(t)
            );
        })() : Nothing();

    return go([tree], path);
};
```