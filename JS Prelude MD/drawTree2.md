```js
// drawTree2 :: Bool -> Tree String -> String
const drawTree2 = blnCompact => tree => {
    // Algorithm adapted from Donnacha Oisin Kidney's:
    // https://doisinkidney.com/snippets/drawing-trees.html
    const
        lmrFromStrings = xs => {
            const [ls, rs] = Array.from(splitAt(
                Math.floor(xs.length / 2), xs
            ));
            return Tuple3(ls, rs[0], rs.slice(1));
        },
        stringsFromLMR = lxr => {
            const xs = Array.from(lxr);
            return xs[0].concat(xs[1]).concat(xs[2]);
        },
        fghApplied = (f, g, h) => triple => {
            const [ls, m, rs] = Array.from(triple);
            return Tuple3(ls.map(f), g(m), rs.map(h));
        };

    const lmrBuild = (f, w) => wsTree => {
        const
            leftPad = n => s => ' '.repeat(n) + s,
            conS = x => xs => x + xs,
            xs = wsTree.nest,
            lng = xs.length,
            [nChars, x] = Array.from(wsTree.root);
        return 0 === lng ? (
            Tuple3([], '─'.repeat(w - nChars) + x, [])
        ) : 1 === lng ? (() => {
            const indented = leftPad(1 + w);
            return fghApplied(
                indented,
                z => '─'.repeat(w - nChars) + x + '─' + z,
                indented
            )(f(xs[0]));
        })() : (() => {
            const
                treeFix = (l, m, r) => compose(
                    stringsFromLMR,
                    fghApplied(conS(l), conS(m), conS(r))
                ),
                _x = '─'.repeat(w - nChars) + x,
                indented = leftPad(w),
                ys = xs.map(f);
            return fghApplied(
                indented,
                s => _x + ({
                    '┌': '┬',
                    '│': '┤',
                    '├': '┼',
                    '└': '┴'
                })[s[0]] + s.slice(1),
                indented
            )(lmrFromStrings(
                intercalate(
                    blnCompact ? [] : ['│'],
                    [treeFix(' ', '┌', '│')(ys[0])]
                    .concat(init(ys.slice(1)).map(
                        treeFix('│', '├', '│')
                    )).concat([treeFix('│', '└', ' ')(
                        ys[ys.length - 1]
                    )])
                )
            ));
        })();
    };
    const
        measuredTree = fmapTree(
            compose(
                bindFn(length, Tuple),
                x => ' ' + x + ' '
            ), tree
        ),
        levelWidths = init(levels(measuredTree))
        .reduce(
            (a, level) => a.concat(maximum(level.map(fst))),
            []
        );
    return unlines(stringsFromLMR(
        levelWidths.reduceRight(lmrBuild, x => x)(
            measuredTree
        )
    ));
};
```