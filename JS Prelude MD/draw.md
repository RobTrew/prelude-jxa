```javascript
// draw :: Tree String -> [String]
const draw = node => {
    // shift :: String -> String -> [String] -> [String]
    const shifted = (first, other, xs) => (
        [first].concat(
            Array.from({
                length: xs.length - 1
            }, () => other)
        ).map(
            (y, i) => y.concat(xs[i])
        )
    );
    // drawSubTrees :: [Tree String] -> [String]
    const drawSubTrees = xs => {
        const lng = xs.length;
        return 0 < lng ? (
            1 < lng ? (
                ['│'].concat(
                    shifted('├─ ', '│  ', draw(xs[0]))
                )
            ).concat(
                drawSubTrees(xs.slice(1))
            ) : ['│'].concat(
                shifted('└─ ', '   ', draw(xs[0]))
            )
        ) : [];
    };
    return node.root.split('\n').concat(
        drawSubTrees(node.nest)
    );
};
```