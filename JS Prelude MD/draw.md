```javascript
// draw :: Tree String -> [String]
const draw = node => {
    
    // shifted :: String -> String -> [String] -> [String]
    const shifted = (first, other, xs) =>
        xs.map((x, i) =>
            (0 < i ? other : first) + x
        );


    // drawSubTrees :: [Tree String] -> [String]
    const drawSubTrees = xs => {
        const n = xs.length;

        return 0 < n
            ? ["│"].concat(
                1 < n
                    ? shifted("├─ ", "│  ", draw(xs[0]))
                        .concat(
                            drawSubTrees(xs.slice(1))
                        )
                    : shifted("└─ ", "   ", draw(xs[0]))
            )
            : [];
    };


    return node.root.split("\n").concat(
        drawSubTrees(node.nest)
    );
};
```