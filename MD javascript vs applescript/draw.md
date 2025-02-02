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


```applescript
-- draw :: Tree String -> [String]
on draw(tree)
    
    -- shift :: String -> String -> [String] -> [String]
    script shift
        on |λ|(strFirst, strOther, xs)
            zipWith(my append, ¬
                cons(strFirst, replicate((length of xs) - 1, strOther)), xs)
        end |λ|
    end script
    
    -- drawSubTrees :: [Tree String] -> [String]
    script drawSubTrees
        on |λ|(xs)
            set lng to length of xs
            if 0 < lng then
                if 1 < lng then
                    cons("│", append(shift's |λ|("├─ ", "│  ", draw(item 1 of xs)), ¬
                        |λ|(items 2 thru -1 of xs)))
                else
                    cons("│", shift's |λ|("└─ ", "   ", draw(item 1 of xs)))
                end if
            else
                {}
            end if
        end |λ|
    end script
    
    paragraphs of (root of tree) & |λ|(nest of tree) of drawSubTrees
end draw
```