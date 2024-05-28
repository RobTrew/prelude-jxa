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


```javascript
// draw :: Tree String -> [String]
const draw = node => {
    // shifted :: String -> String -> [String] -> [String]
    const shifted = (first, other, xs) => (
        [first].concat(
            Array.from({
                length: xs.length - 1
            }, () => other)
        )
        .map((y, i) => y.concat(xs[i]))
    );
    // drawSubTrees :: [Tree String] -> [String]
    const drawSubTrees = xs => {
        const lng = xs.length;

        return 0 < lng
            ? 1 < lng
                ? ["│"]
                .concat(
                    shifted("├─ ", "│  ", draw(xs[0]))
                )
                .concat(
                    drawSubTrees(xs.slice(1))
                )
                : ["│"]
                .concat(
                    shifted("└─ ", "   ", draw(xs[0]))
                )
            : [];
    };

    return node.root.split("\n").concat(
        drawSubTrees(node.nest)
    );
};
```