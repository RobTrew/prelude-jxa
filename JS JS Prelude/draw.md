```js
// draw :: Tree String -> [String]
const draw = node => {
    // shift :: String -> String -> [String] -> [String]
    const shifted = (first, other, xs) =>
        zipWithList(append)(
            cons(first)(
              replicate(xs.length - 1)(
                other
              )
            )
        )(xs);
    // drawSubTrees :: [Tree String] -> [String]
    const drawSubTrees = xs => {
        const lng = xs.length;
        return 0 < lng ? (
            1 < lng ? append(
                cons('│')(
                    shifted('├─ ', '│  ', draw(xs[0]))
                )
            )(
                drawSubTrees(xs.slice(1))
            ) : cons('│')(
              shifted('└─ ', '   ', draw(xs[0]))
            )
        ) : [];
    };
    return append(lines(node.root))(
        drawSubTrees(node.nest)
    );
};
```