```javascript
(() => {
    "use strict";

    // Tidy a plain or nested (spanning) MultiMarkdown table

    // MultiMarkdown table in the clipboard
    // Rob Trew (c) 2018, 2022

    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF
    // ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
    // LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    // FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    // IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
    // LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    // WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    // ARISING FROM, OUT OF OR IN CONNECTION WITH THE
    // SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    // Ver 0.5

    // main :: () -> IO String
    const main = () => {
        const
            sa = standardSEAdditions(),
            rows = lines(sa.theClipboard() || ""),
            ixs = nonTableIndices(rows);

        return either(
            JSON.stringify
        )(x => x)(
            bindLR(
                bindLR(
                    rulerAndTreeFromMMDTableLR(
                        rows.reduce(
                            (a, x, i) => ixs.includes(i) ? (
                                a
                            ) : `${a + x}\n`,
                            ""
                        )
                    )
                )(
                    compose(
                        Right,
                        uncurry(mmdTableFromTree)
                    )
                )
            )(
                strTidy => {
                    const
                        xs = lines(strTidy),
                        strClip = unlines(
                            mapAccumL((a, x, i) =>
                                ixs.includes(i) ? (
                                    Tuple(a)(x)
                                ) : Tuple(1 + a)(xs[a])
                            )(0)(rows)[1]
                        );

                    return (
                        sa.setTheClipboardTo(strClip),
                        Right(strClip)
                    );
                })
        );

    };

    // ---------------- GENERIC FUNCTIONS ----------------

    // Just :: a -> Just a
    const Just = x => ({
        type: "Maybe",
        Nothing: false,
        Just: x
    });


    // Left :: a -> Either a b
    const Left = x => ({
        type: "Either",
        Left: x
    });


    // Node :: a -> [Tree a] -> Tree a
    const Node = v =>
        // Constructor for a Tree node which connects a
        // value of some kind to a list of zero or
        // more child trees.
        xs => ({
            type: "Node",
            root: v,
            nest: xs || []
        });


    // Nothing :: () -> Nothing
    const Nothing = () => ({
        type: "Maybe",
        Nothing: true
    });


    // Right :: b -> Either a b
    const Right = x => ({
        type: "Either",
        Right: x
    });


    // Tuple (,) :: a -> b -> (a, b)
    const Tuple = a =>
        // A pair of values, possibly of
        // different types.
        b => ({
            type: "Tuple",
            "0": a,
            "1": b,
            length: 2,
            *[Symbol.iterator]() {
                for (const k in this) {
                    if (!isNaN(k)) {
                        yield this[k];
                    }
                }
            }
        });


    // all :: (a -> Bool) -> [a] -> Bool
    const all = p =>
        // True if p(x) holds for every x in xs.
        xs => [...xs].every(p);


    // bindLR (>>=) :: Either a ->
    // (a -> Either b) -> Either b
    const bindLR = lr =>
        // Bind operator for the Either option type.
        // If lr has a Left value then lr unchanged,
        // otherwise the function mf applied to the
        // Right value in lr.
        mf => "Left" in lr ? (
            lr
        ) : mf(lr.Right);


    // bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
    const bindMay = mb =>
        // Nothing if mb is Nothing, or the application of the
        // (a -> Maybe b) function mf to the contents of mb.
        mf => mb.Nothing ? (
            mb
        ) : mf(mb.Just);


    // center :: Int -> Char -> String -> String
    const center = n =>
        // Size of space -> filler Char ->
        // String -> Centered String
        c => s => {
            const gap = n - s.length;

            return 0 < gap ? (() => {
                const pre = c.repeat(Math.floor(gap / 2));

                return pre + s + pre + c.repeat(gap % 2);
            })() : s;
        };


    // compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
    const compose = (...fs) =>
        // A function defined by the right-to-left
        // composition of all the functions in fs.
        fs.reduce(
            (f, g) => x => f(g(x)),
            x => x
        );


    // concat :: [[a]] -> [a]
    const concat = xs =>
        xs.flat(1);


    // either :: (a -> c) -> (b -> c) -> Either a b -> c
    const either = fl =>
        // Application of the function fl to the
        // contents of any Left value in e, or
        // the application of fr to its Right value.
        fr => e => "Left" in e ? (
            fl(e.Left)
        ) : fr(e.Right);


    // findIndex :: (a -> Bool) -> [a] -> Maybe Int
    const findIndex = p =>
        //  Just the index of the first element in
        //  xs for which p(x) is true, or
        //  Nothing if there is no such element.
        xs => {
            const i = [...xs].findIndex(p);

            return -1 !== i ? (
                Just(i)
            ) : Nothing();
        };


    // fst :: (a, b) -> a
    const fst = tpl =>
        // First member of a pair.
        tpl[0];


    // init :: [a] -> [a]
    const init = xs =>
        // All elements of a list except the last.
        0 < xs.length ? (
            xs.slice(0, -1)
        ) : null;


    // iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
    const iterateUntil = p => f => x => {
        const
            go = v => p(v) ? (
                v
            ) : [v].concat(go(f(v)));

        return go(x);
    };


    // justifyLeft :: Int -> Char -> String -> String
    const justifyLeft = n =>
        // The string s, followed by enough padding (with
        // the character c) to reach the string length n.
        c => s => n > s.length ? (
            s.padEnd(n, c)
        ) : s;


    // justifyRight :: Int -> Char -> String -> String
    const justifyRight = n =>
        // The string s, preceded by enough padding (with
        // the character c) to reach the string length n.
        c => s => Boolean(s) ? (
            s.padStart(n, c)
        ) : "";


    // last :: [a] -> a
    const last = xs => xs.length ? (
        xs.slice(-1)[0]
    ) : undefined;


    // levelNodes :: Tree a -> [[Tree a]]
    const levelNodes = tree =>
        iterateUntil(
            xs => xs.length < 1
        )(
            xs => xs.flatMap(x => x.nest)
        )([tree]);


    // lines :: String -> [String]
    const lines = s =>
        // A list of strings derived from a single
        // string delimited by newline and or CR.
        0 < s.length ? (
            s.split(/[\r\n]+/u)
        ) : [];


    // 'The mapAccumL function behaves like a combination of map and foldl;
    // it applies a function to each element of a list, passing an accumulating
    // parameter from left to right, and returning a final value of this
    // accumulator together with the new list.' (See Hoogle)
    // mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
    const mapAccumL = f =>
        acc => xs => xs.reduce((a, x, i) => {
            const pair = f(a[0], x, i);

            return Tuple(pair[0])(a[1].concat(pair[1]));
        }, Tuple(acc)([]));


    // max :: Ord a => a -> a -> a
    const max = a =>
        // b if its greater than a,
        // otherwise a.
        b => b > a ? (
            b
        ) : a;


    // maximum :: Ord a => [a] -> a
    const maximum = xs =>
        // The largest value in a non-empty list.
        0 < xs.length ? (
            xs.slice(1).reduce(
                (a, x) => x > a ? (
                    x
                ) : a,
                xs[0]
            )
        ) : undefined;


    // regexMatches :: Regex String -> String -> [[String]]
    const regexMatches = rgx =>
        // All matches for the given regular expression
        // in the supplied string s.
        s => [...s.matchAll(new RegExp(rgx, "gu"))];


    // replicate :: Int -> a -> [a]
    const replicate = n =>
        // A list of n copies of x.
        x => Array.from({
            length: n
        }, () => x);


    // replicateString :: Int -> String -> String
    const replicateString = n =>
        s => s.repeat(n);


    // snd :: (a, b) -> b
    const snd = tpl =>
        // Second member of a pair.
        tpl[1];


    // take :: Int -> [a] -> [a]
    // take :: Int -> String -> String
    const take = n =>
        // The first n elements of a list,
        // string of characters, or stream.
        xs => "GeneratorFunction" !== xs
        .constructor.constructor.name ? (
            xs.slice(0, n)
        ) : Array.from({
            length: n
        }, () => {
            const x = xs.next();

            return x.done ? [] : [x.value];
        }).flat();


    // takeCycle :: Int -> [a] -> [a]
    const takeCycle = n =>
        // First n elements of a non-finite cycle of xs.
        xs => {
            const lng = xs.length;

            return (
                n <= lng ? (
                    xs
                ) : concat(replicate(Math.ceil(n / lng))(
                    xs
                ))
            ).slice(0, n);
        };

    // // Converts a function of more than one argument
    // // to a function on Tuple type (Tuple ... TupleN)
    // // or array which contains those arguments.
    // // This implementation uses the fact that the Tuple
    // // constructors create an object with a private .length property
    // // uncurry :: (a -> b -> c) -> ((a, b) -> c)
    // const uncurry = f => args => f.apply(null, args);

    // uncurry :: (a -> b -> c) -> ((a, b) -> c)
    const uncurry = f =>
        // A function over a pair, derived
        // from a curried function.
        (...args) => {
            const [x, y] = Boolean(args.length % 2) ? (
                args[0]
            ) : args;

            return f(x)(y);
        };


    // unlines :: [String] -> String
    const unlines = xs => xs.join("\n");

    // until :: (a -> Bool) -> (a -> a) -> a -> a
    const until = p =>
        // The value resulting from repeated applications
        // of f to the seed value x, terminating when
        // that result returns true for the predicate p.
        f => x => {
            let v = x;

            while (!p(v)) {
                v = f(v);
            }

            return v;
        };


    // JXA --------------------------------------------------

    // standardSEAdditions :: () -> Application
    const standardSEAdditions = () =>
        Object.assign(Application("System Events"), {
            includeStandardAdditions: true
        });

    // MMD --------------------------------------------------

    // Write MMD --------------------------------------------

    // alignFn :: Ordering -> (Int -> Char -> String -> String)
    const alignFn = o => ([
        justifyLeft, center, justifyRight
    ][1 + o]);

    // Maximum unit text width in 'column' above each leaf
    // (dimensions for a MultiMarkdown ruler)

    // treeColWidths :: Tree -> [Int]
    const treeColWidths = oNode => {
        const go = intMax => node => {
            const
                root = node.root,
                width = 2 + (Boolean(root) ? (
                    root.text.length
                ) : 0),
                nest = node.nest,
                intPeers = nest.length;

            return intPeers > 0 ? (
                nest.flatMap(
                    go(max(intMax / intPeers)(
                        Math.ceil(width / intPeers)))
                )
            ) : [max(intMax)(width)];
        };
        const root = oNode.root;


        return go(2 + (Boolean(root) ? (
            root.text.length / max(1)(oNode.nest)
        ) : 0))(oNode);
    };

    // (Tree layers -> Decorated Tree layers )
    // withColIndices :: [[Node]] -> [[Node]]
    const withColIndices = treeLevels =>
        treeLevels.map(
            xs => {
                const tpl = mapAccumL((iCol, dctNode) => {
                    const
                        root = dctNode.root,
                        blnRoot = Boolean(root);

                    return Tuple(
                        iCol + (blnRoot ? root.leafWidth : 1)
                    )(
                        Object.assign(dctNode, {
                            root: Object.assign(blnRoot ? root : {}, {
                                col: iCol
                            })
                        })
                    );
                })(0)(xs);


                return tpl[1];
            }
        );

    // ( Tree to decorated Tree )
    // withLeafWidths :: Tree -> Tree
    const withLeafWidths = node => {
        const
            nest = node.nest,
            sub = Object.assign(
                node, {
                    nest: nest.map(withLeafWidths)
                }
            ),
            root = node.root;

        return Boolean(root) ? Object.assign(
            sub, {
                root: {
                    text: (typeof root === "string" ? (
                        root
                    ) : root.text).replace(/&%/ug, "\\|"),
                    leafWidth: nest.length > 0 ? (
                        sub.nest.reduce((a, x) => a + x.root.leafWidth, 0)
                    ) : 1
                }
            }
        ) : sub;
    };

    // MAIN TREE -> MMD WRITER

    // Ruler Tuple: (
    //    Index of ruler row
    //    sequence of Orderings (-1, 0, 1) = (Left, Centre, Right)
    // )
    // RulerTuple -> Tree -> String
    // mmdTableFromTree :: (Int, [Ordering]) -> Tree -> String
    // eslint-disable-next-line max-lines-per-function
    const mmdTableFromTree = tplRuler =>
        // eslint-disable-next-line max-lines-per-function
        oTree => {
            const
                tree = withLeafWidths(oTree),
                colWidths = treeColWidths(tree),
                leafWidth = colWidths.length;

            const
                iRuler = tplRuler[0],
                alignments = tplRuler[1],
                lng = alignments.length,

                rules = lng >= leafWidth ? (
                    alignments.slice(0, leafWidth)
                ) : takeCycle(leafWidth)(
                    lng > 0 ? (
                        alignments
                    ) : [0]
                );

            const rows = withColIndices(levelNodes(tree))
                .map(
                    cells => {
                        const row = cells.map(cell => {
                            const
                                root = cell.root,
                                iCol = root.col,
                                intLeaves = root.leafWidth;

                            return (
                                alignFn(rules[iCol])(
                                    colWidths.slice(
                                        iCol, iCol + intLeaves
                                    )
                                    .reduce(
                                        (a, x) => a + x,
                                        0
                                    )
                                )(" ")(
                                    (root.text || "")
                                )
                            ) + replicateString(
                                max(1)(intLeaves)
                            )("|");
                        }).join("");

                        return `|${row}`;
                    }
                );

            // MMD Table string
            const
                iTopRow = rows[0].includes(" ") ? 0 : 1,
                rulerRow = rules.map(
                    (x, i) => (x <= 0 ? ":" : "-") +
                    replicateString(colWidths[i] - 2)("-") +
                    (x >= 0 ? ":" : "-")
                ).join("|");

            // Initial rows ------------------------------
            return rows.slice(iTopRow, iRuler + iTopRow)
                .concat(`|${rulerRow}|`)
                .concat(

                    // Remaining rows --------------------
                    rows.slice(iTopRow + iRuler)
                )
                .join("\n");
        };

    // -------------------- READ MMD ---------------------

    // isTable :: [[String]] -> Bool
    const isTable = xs =>
        xs.length > 1 && all(x => x.length > 0)(xs);


    // nonTableIndices :: [String] -> [(Int, String)]
    const nonTableIndices = rows =>
        // Indices of any rows which lack a pipe character.
        rows.flatMap(
            (x, i) => x.includes("|") ? (
                []
            ) : [i]
        );


    // isRuler :: String -> Bool
    const isRuler = s =>
        (/^[|\-:\s]+$/u).test(s);


    // [-1:Left, 0:Center, 1:Right]
    // mmdTableAlignment :: String -> Int
    const mmdTableAlignment = s => {
        const
            l = s[0] === ":",
            r = s[s.length - 1] === ":";

        return l === r ? (
            0
        ) : r ? (
            1
        ) : -1;
    };


    // As many of the nodes (from the left) as are required
    // to reach a target leaf sum.
    // Node {leafWidth :: Int}
    // takeLeaves :: Int -> [Node] -> [Node]
    const takeLeaves = n => xs => {
        const lng = xs.length;

        return take(
            until(
                x => x.total >= n || x.index >= lng
            )(
                x => ({
                    total: x.total + xs[x.index].root.leafWidth,
                    index: x.index + 1
                })
            )({
                total: 0,
                index: 0
            }).index
        )(xs);
    };


    // rulerAndTreeFromMMDTableLR :: String ->
    //    Either String ([Ordering], Tree)
    // eslint-disable-next-line max-lines-per-function
    const rulerAndTreeFromMMDTableLR = s => {
        const
            rgxEscPipe = /\\\|/ug,
            rows = lines(s.replace(rgxEscPipe, "&%"))
            .flatMap(x => {
                const txt = x.trim();

                return 0 < txt.length && txt.includes("|") ? (
                    [txt]
                ) : [];
            });

        return isTable(rows) ? (() => {
            const
                mbiRuler = findIndex(isRuler)(rows),
                cellRows = rows.map(
                    x => regexMatches(/([^|]+)(\|*)/ug)(x)
                    .map(
                        ms => Node({
                            text: ms[1].trim(),
                            leafWidth: max(1)(ms[2].length)
                        })([])
                    )
                );

            const tplAlignmentsRows = mbiRuler.Nothing ? (
                Tuple(
                    replicate(
                        maximum(
                            cellRows.map(
                                cells => cells.reduce(
                                    (a, x) => a + x[1],
                                    0
                                )
                            )
                        )
                    )(0)
                )(cellRows)
            ) : bindMay(mbiRuler)(
                iRuler => Tuple(
                    rows[iRuler].split(/\s*\|\s*/ug)
                    .flatMap(
                        x => 0 < x.length ? (
                            [mmdTableAlignment(x)]
                        ) : []
                    )
                )(
                    cellRows.slice(0, iRuler)
                    .concat(cellRows.slice(iRuler + 1))
                )
            );

            // forest :: [Node]
            const forest = tplAlignmentsRows[1]
                .reduceRight((aBelow, xCurrent) => {
                    const intBelow = aBelow.length;

                    return intBelow > 0 ? (() => {
                        const tpl = mapAccumL(
                            (iFrom, nodeAbove) =>
                            iFrom >= intBelow ? (
                                Tuple(iFrom)(nodeAbove)
                            ) : (() => {
                                const
                                    xs = takeLeaves(
                                        nodeAbove.root.leafWidth
                                    )(aBelow.slice(iFrom));

                                return Tuple(
                                    iFrom + xs.length
                                )(
                                    Object.assign(nodeAbove, {
                                        nest: xs
                                    })
                                );
                            })()
                        )(0)(init(xCurrent));

                        // All remaining children gathered
                        // by rightmost parent

                        return snd(tpl)
                            .concat(Object.assign(last(xCurrent), {
                                nest: aBelow.slice(fst(tpl))
                            }));
                    })() : xCurrent;
                }, []),
                intNodes = forest.length;

            return intNodes > 0 ? Right(
                Tuple(
                    Tuple(mbiRuler.Just)(tplAlignmentsRows[0])
                )(
                    intNodes > 1 ? (
                        Node({})(forest)
                    ) : forest[0]
                )
            ) : Left("Could not be parsed as an MMD table");
        })() : Left("Too sparse to parse as an MMD table.");
    };

    // MAIN ---
    return main();
})();
```