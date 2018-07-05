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
            if lng > 0 then
                if lng > 1 then
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
        return 0 < lng ? (
            1 < lng ? append(
                cons(
                    '│',
                    shift('├─ ', '│  ', draw(xs[0]))
                ),
                drawSubTrees(xs.slice(1))
            ) : cons('│', shift('└─ ', '   ', draw(xs[0])))
        ) : [];
    };
    return append(
        lines(node.root.toString()),
        drawSubTrees(node.nest)
    );
};
```