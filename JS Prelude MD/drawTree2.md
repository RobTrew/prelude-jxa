```js
// drawTree2 :: Bool -> Tree String -> String
const drawTree2 = blnCompressed => blnPruned => tree => {
    // Adapted from the tree design and algorithm in
    // Donnacha Oisin Kidney's Haskell snippet at:
    // https://doisinkidney.com/snippets/drawing-trees.html
    const
        lmrFromStrings = xs => {
            const [ls, rs] = Array.from(splitAt(
                Math.floor(xs.length / 2),
                xs
            ));
            return Tuple3(ls, rs[0], rs.slice(1));
        },
        stringsFromLMR = lmr =>
        Array.from(lmr).reduce((a, x) => a.concat(x), []),
        fghOverLMR = (f, g, h) => lmr => {
            const [ls, m, rs] = Array.from(lmr);
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
            return fghOverLMR(
                indented,
                z => '─'.repeat(w - nChars) + x + '─' + z,
                indented
            )(f(xs[0]));
        })() : (() => {
            const
                treeFix = (l, m, r) => compose(
                    stringsFromLMR,
                    fghOverLMR(conS(l), conS(m), conS(r))
                ),
                _x = '─'.repeat(w - nChars) + x,
                indented = leftPad(w),
                lmrs = xs.map(f);
            return fghOverLMR(
                indented,
                s => _x + ({
                    '┌': '┬',
                    '├': '┼',
                    '│': '┤',
                    '└': '┴'
                })[s[0]] + s.slice(1),
                indented
            )(lmrFromStrings(
                intercalate(
                    blnCompressed ? [] : ['│'],
                    [treeFix(' ', '┌', '│')(lmrs[0])]
                    .concat(init(lmrs.slice(1)).map(
                        treeFix('│', '├', '│')
                    ))
                    .concat([treeFix('│', '└', ' ')(
                        lmrs[lmrs.length - 1]
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
    return unlines(
        (blnPruned ? (
            curry(filter)(s => any(
                c => !'│ '.includes(c),
                chars(s)))
        ) : identity)(stringsFromLMR(
            levelWidths.reduceRight(
                lmrBuild, x => x
            )(measuredTree)
        ))
    );
};
```