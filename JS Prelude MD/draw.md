```js
// draw :: Tree String -> [String]
const draw = node => {
    // shift :: String -> String -> [String] -> [String]
    const shift = (first, other, xs) =>
        zipWith(
            append,
            cons(first, replicate(xs.length - 1, other)),
            xs
        );
    // drawSubTrees :: [Tree String] -> [String]
    const drawSubTrees = xs => {
        const lng = xs.length;
        return lng > 0 ? (
            lng > 1 ? append(
                cons(
                    '│',
                    shift('├─ ', '│  ', draw(xs[0]))
                ),
                drawSubTrees(xs.slice(1))
            ) : cons('│', shift('└─ ', '   ', draw(xs[0])))
        ) : [];
    };
    return append(
        lines(node.root),
        drawSubTrees(node.nest)
    );
};
```