```javascript
// drawTree2 :: Bool -> Bool -> Tree String -> String
const drawTree2 = blnCompact => blnPruned => tree => {
    // Tree design and algorithm inspired by the Haskell snippet at:
    // https://doisinkidney.com/snippets/drawing-trees.html
    const
        // Lefts, Middle, Rights
        lmrFromStrings = xs => {
            const [ls, rs] = Array.from(splitAt(
                Math.floor(xs.length / 2)
            )(xs));

            return TupleN(ls, rs[0], rs.slice(1));
        },
        stringsFromLMR = lmr =>
        Array.from(lmr).reduce((a, x) => a.concat(x), []),
        fghOverLMR = (f, g, h) => lmr => {
            const [ls, m, rs] = Array.from(lmr);

            return TupleN(ls.map(f), g(m), rs.map(h));
        };
    const lmrBuild = (f, w) => wsTree => {
        const
            leftPad = n => s => " ".repeat(n) + s,
            xs = wsTree.nest,
            lng = xs.length,
            [nChars, x] = Array.from(wsTree.root);

        // ------------------ LEAF NODE ------------------
        return 0 === lng ? (
            TupleN([], "─".repeat(w - nChars) + x, [])

            // --------- NODE WITH SINGLE CHILD ----------
        ) : 1 === lng ? (() => {
            const indented = leftPad(1 + w);

            return fghOverLMR(
                indented,
                z => `${"─".repeat(w - nChars)}${x}-${z}`,
                indented
            )(f(xs[0]));

            // NODE WITH CHILDREN -----------------------------
        })() : (() => {
            const
                cFix = y => ys => y + ys,
                treeFix = (l, m, r) => compose(
                    stringsFromLMR,
                    fghOverLMR(cFix(l), cFix(m), cFix(r))
                ),
                _x = "─".repeat(w - nChars) + x,
                indented = leftPad(w),
                lmrs = xs.map(f);

            return fghOverLMR(
                indented,
                s => _x + ({
                    "┌": "┬",
                    "├": "┼",
                    "│": "┤",
                    "└": "┴"
                })[s[0]] + s.slice(1),
                indented
            )(lmrFromStrings(
                intercalate(
                    blnCompact ? [] : ["│"]
                )(
                    [treeFix(" ", "┌", "│")(lmrs[0])]
                    .concat(init(lmrs.slice(1)).map(
                        treeFix("│", "├", "│")
                    ))
                    .concat([treeFix("│", "└", " ")(
                        lmrs[lmrs.length - 1]
                    )])
                )
            ));
        })();
    };
    const
        measuredTree = fmapTree(
            v => {
                const s = ` ${v} `;

                return Tuple(s.length)(s);
            })(tree),
        levelWidths = levels(measuredTree)
        .reduce(
            (a, level) => a.concat(maximum(level.map(fst))),
            []
        ),
        treeLines = stringsFromLMR(
            levelWidths.reduceRight(
                lmrBuild, x => x
            )(measuredTree)
        );

    return unlines(
        blnPruned ? (
            treeLines.filter(
                s => s.split("")
                .some(c => !" │".includes(c))
            )
        ) : treeLines
    );
};
```