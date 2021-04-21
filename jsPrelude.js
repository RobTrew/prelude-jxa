/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

// Just :: a -> Maybe a
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

// Nothing :: Maybe a
const Nothing = () => ({
    type: "Maybe",
    Nothing: true
});

// Ratio :: Integral a => a -> a -> Ratio a
const Ratio = a => b => {
    const go = (x, y) =>
        0 !== y ? (() => {
            const d = gcd(x)(y);

            return {
                type: "Ratio",
                // numerator
                "n": quot(x)(d),
                // denominator
                "d": quot(y)(d)
            };
        })() : undefined;

    return go(a * signum(b), abs(b));
};

// Right :: b -> Either a b
const Right = x => ({
    type: "Either",
    Right: x
});

// Tuple (,) :: a -> b -> (a, b)
const Tuple = a =>
    b => ({
        type: "Tuple",
        "0": a,
        "1": b,
        length: 2
    });

// Tuple3 (,,) :: a -> b -> c -> (a, b, c)
const Tuple3 = a => b => c => ({
    type: "Tuple3",
    "0": a,
    "1": b,
    "2": c,
    length: 3
});

// TupleN :: a -> b ...  -> (a, b ... )
const TupleN = (...args) => {
    // A Tuple of an arbitrary number of items.
    const n = args.length;

    return 2 < n ? Object.assign(
        args.reduce((a, x, i) => Object.assign(a, {
            [i]: x
        }), {
            type: `Tuple${n}`,
            length: n
        })
    ) : args.reduce((f, x) => f(x), Tuple);
};

// abs :: Num -> Num
const abs =
    // Absolute value of a given number - without the sign.
    x => 0 > x ? (
        -x
    ) : x;

// add (+) :: Num a => a -> a -> a
const add = a =>
    // Curried addition.
    b => a + b;

// all :: (a -> Bool) -> [a] -> Bool
const all = p =>
    // True if p(x) holds for every x in xs.
    xs => [...xs].every(p);

// allSame :: [a] -> Bool
const allSame = xs =>
    2 > xs.length || (
        h => xs.slice(1).every(x => h === x)
    )(xs[0]);

// allTree :: (a -> Bool) -> Tree a -> Bool
const allTree = p =>
    // True if p holds for all nodes of the
    // tree to which allTree(p) is applied.
    foldTree(
        x => xs => p(x) && xs.every(Boolean)
    );

// and :: [Bool] -> Bool
const and = xs =>
    // True unless any value in xs is false.
    [...xs].every(Boolean);

// any :: (a -> Bool) -> [a] -> Bool
const any = p =>
    // True if p(x) holds for at least
    // one item in xs.
    xs => [...xs].some(p);

// anyTree :: (a -> Bool) -> Tree a -> Bool
const anyTree = p =>
    // True if p holds for any node of the
    // tree to which anyTree(p) is applied.
    foldTree(x => xs => p(x) || xs.some(Boolean));

// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = mf =>
    // Applies wrapped functions to wrapped values,
    // for example applying a list of functions to a list
    // of values or applying:
    // Just(f) to Just(x),  Right(f) to Right(x),
    // f(x) to g(x) etc.
    mx => ({
        "Either": () => apLR,
        "Maybe": () => apMay,
        "Node": () => apTree,
        "Tuple": () => apTuple,
        "List": () => apList,
        "(a -> b)": () => apFn
    })[typeName(mx) || "List"]()(mf)(mx);

// apFn :: (a -> b -> c) -> (a -> b) -> (a -> c)
const apFn = f =>
    // Applicative instance for functions.
    // f(x) applied to g(x).
    g => x => f(x)(
        g(x)
    );

// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = flr =>
    // Either a Left value, or the application of a
    // function in Either to a value in Either.
    liftA2LR(x => x)(flr);

// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = fs =>
    // The sequential application of each of a list
    // of functions to each of a list of values.
    // apList([x => 2 * x, x => 20 + x])([1, 2, 3])
    //     -> [2, 4, 6, 21, 22, 23]
    xs => fs.flatMap(f => xs.map(f));

// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = mf =>
    // Just an application of Maybe a function to
    // to Maybe a value, or Nothing.
    liftA2May(x => x)(mf);

// apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
const apTree = tf =>
    // A new tree derived by applying each of a tree
    // of functions to each node value in another tree.
    liftA2Tree(
        x => x
    )(tf);

// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = tpl =>
    liftA2Tuple(x => x)(tpl);

// append (<>) :: [a] -> [a] -> [a]
const append = xs =>
    // Two lists joined into one.
    ys => xs.concat(ys);

// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
const appendGen = xs =>
// A new generator composed from the
// concatenation of two existing generators.
    function *(ys) {
        for (const vs of [xs, ys]) {
            let nxt = vs.next();

            while (!nxt.done) {
                yield nxt.value;
                nxt = vs.next();
            }
        }
    };

// apply ($) :: (a -> b) -> a -> b
const apply = f =>
    // Application operator.
    x => f(x);

// applyN :: Int -> (a -> a) -> a -> a
const applyN = n =>
    // The value of n applications of f to x.
    // (Church numeral n)
    f => x => Array.from({
        length: n
    }, () => f)
    .reduce((a, g) => g(a), x);

// approxRatio :: Float -> Float -> Ratio
const approxRatio = epsilon =>
    // A ratio derived by approximation
    // (at granularity epsilon) to the float n.
    n => {
        const
            gcde = (e, x, y) => {
                const gcd1 = (a, b) => b < e ? (
                    a
                ) : gcd1(b, a % b);

                return gcd1(abs(x), abs(y));
            },
            c = gcde(
                Boolean(epsilon) ? (
                    epsilon
                ) : (1 / 10000), 1, abs(n)
            ),
            r = ratio(quot(abs(n))(c))(quot(1, c));

        return {
            type: "Ratio",
            n: r.n * signum(n),
            d: r.d
        };
    };

// argvLength :: Function -> Int
const argvLength = f =>
    f.length;

// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.entries(m).map(
        kv => Tuple(...kv)
    );

// bimap :: (a -> b) -> (c -> d) -> (a, c) -> (b, d)
const bimap = f =>
    // Tuple instance of bimap.
    // A tuple of the application of f and g to the
    // first and second values respectively.
    g => tpl => 2 !== tpl.length ? (
        bimapN(f)(g)(tpl)
    ) : Tuple(f(tpl[0]))(
        g(tpl[1])
    );

// bimapLR :: (a -> b) -> (c -> d) -> ֵEither ֵֵa c -> Either b d
const bimapLR = f =>
    // Instance of bimap for Either values.
    // Either the application of f to a Left value,
    // or the application of g to a Right value.
    g => lr => lr.Left ? (
        Left(f(lr.Left))
    ) : Right(g(lr.Right));

// bimapN :: (a -> b) -> (c -> d) -> TupleN -> TupleN
const bimapN = f =>
    // An n-tuple instance of bimap.
    // An n-tuple of unchanged dimension in which
    // the final value is an application of g
    // and the penultimate value is an application of f.
    g => tpln => {
        const n = tpln.length;

        return 1 < n ? (
            TupleN(
                ...Array.from(tpln).slice(0, n - 2),
                f(tpln[n - 2]), g(tpln[n - 1])
            )
        ) : null;
    };

// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = m =>
    // Two computations sequentially composed,
    // with any value produced by the first
    // passed as an argument to the second.
    mf => Array.isArray(m) ? (
        bindList(m)(mf)
    ) : (
        ({
            "Either": () => bindLR,
            "Maybe": () => bindMay,
            "Tuple": () => bindTuple,
            "function": () => bindFn
        })[m.type || typeof m]()(m)(mf)
    );

// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = f =>
    // Binary operator applied over f x and x.
    op => x => op(f(x))(x);

// bindLR (>>=) :: Either a ->
// (a -> Either b) -> Either b
const bindLR = m =>
    mf => m.Left ? (
        m
    ) : mf(m.Right);

// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = xs =>
    mf => [...xs].flatMap(mf);

// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = mb =>
    // Nothing if mb is Nothing, or the application of the
    // (a -> Maybe b) function mf to the contents of mb.
    mf => mb.Nothing ? (
        mb
    ) : mf(mb.Just);

// bindTuple (>>=) :: Monoid a => (a, a) -> (a -> (a, b)) -> (a, b)
const bindTuple = tpl =>
    f => {
        const t2 = f(tpl[1]);

        return Tuple(
            mappend(tpl[0])(t2[0])
        )(
            t2[1]
        );
    };

// bool :: a -> a -> Bool -> a
const bool = f =>
    t => p => p ? t : f;

// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    xs => {
        const i = xs.findIndex(p);

        return -1 !== i ? (
            Tuple(xs.slice(0, i))(
                xs.slice(i)
            )
        ) : Tuple(xs)([]);
    };

// breakOn :: String -> String -> (String, String)
const breakOn = pat =>
    // Needle -> Haystack -> (prefix before match, match + rest)
    src => 0 < pat.length ? (() => {
        const xs = src.split(pat);

        return 1 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)("");
    })() : null;

// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = pat =>
    src => "" !== pat ? (
        src.split(pat)
        .reduce((a, _, i, xs) =>
            0 < i ? (
                a.concat([
                    Tuple(xs.slice(0, i).join(pat))(
                        pat + xs.slice(i).join(pat)
                    )
                ])
            ) : a, [])
    ) : null;

// breakOnMay :: String -> String -> Maybe (String, String)
const breakOnMay = pat =>
    // Needle -> Haystack ->
    // maybe (prefix before match, match + rest)
    src => Boolean(pat) ? (() => {
        const xs = src.split(pat);

        return Just(0 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)(""));
    })() : Nothing();

// bulleted :: String -> String -> String
const bulleted = strTab =>
    s => s.split(/[\n\r]+/u).map(
        x => "" !== x ? (
            `${strTab}- ${x}`
        ) : x
    )
    .join("\n");

// cartesianProduct :: [a] -> [b] -> [[a, b]]
const cartesianProduct = xs =>
    ys => [...xs].flatMap(
        x => [...ys].flatMap(
            y => [
                [x].concat(y)
            ]
        )
    );

// caseOf :: [(a -> Bool, b)] -> b -> a ->  b
const caseOf = pvs =>
    // List of (Predicate, value) tuples ->
    // Default value -> Value to test -> Output value
    otherwise => x => {
        const mb = pvs.reduce((a, pv) =>
            a.Nothing ? (
                pv[0](x) ? Just(pv[1]) : a
            ) : a, Nothing());

        return mb.Nothing ? otherwise : mb.Just;
    };

// catMaybes :: [Maybe a] -> [a]
const catMaybes = mbs =>
    mbs.flatMap(m => m.Nothing ? [] : [m.Just]);

// ceiling :: Num -> Int
const ceiling = x => {
    // The least integer not less than x.
    const
        nr = properFraction(x),
        n = nr[0];

    return 0 < nr[1] ? 1 + n : n;
};

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

// chars :: String -> [Char]
const chars = s =>
    s.split("");

// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f =>
    // A segmentation of xs by tail recursion with a
    // function which returns a (prefix, residue) tuple.
    xs => {
        const go = ys =>
            0 < ys.length ? (() => {
                const [b, bs] = Array.from(f(ys));

                return [b].concat(go(bs));
            })() : [];

        return go([...xs]);
    };

// chr :: Int -> Char
const chr = x =>
    // The character at unix code-point x.
    String.fromCodePoint(x);

// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n => {
    // xs split into sublists of length n.
    // The last sublist will be short if n
    // does not evenly divide the length of xs .
    const go = xs => {
        const chunk = xs.slice(0, n);

        return 0 < chunk.length ? (
            [chunk].concat(
                go(xs.slice(n))
            )
        ) : [];
    };

    return go;
};

// combine (</>) :: FilePath -> FilePath -> FilePath
const combine = fp =>
    // Two paths combined with a path separator.
    // Just the second path if that starts with
    // a path separator.
    fp1 => Boolean(fp) && Boolean(fp1) ? (
        "/" === fp1.slice(0, 1) ? (
            fp1
        ) : "/" === fp.slice(-1) ? (
            fp + fp1
        ) : `${fp}/${fp1}`
    ) : fp + fp1;

// compare :: a -> a -> Ordering
const compare = a =>
  b => a < b ? -1 : (a > b ? 1 : 0);

// comparing :: (a -> b) -> (a -> a -> Ordering)
const comparing = f =>
    x => y => {
        const
            a = f(x),
            b = f(y);

        return a < b ? -1 : (a > b ? 1 : 0);
    };

// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (...fs) =>
    // A function defined by the right-to-left
    // composition of all the functions in fs.
    fs.reduce(
        (f, g) => x => f(g(x)),
        x => x
    );

// composeList :: [(a -> a)] -> (a -> a)
const composeList = fs =>
    fs.reduce(
        (f, g) => x => f(g(x)),
        x => x
    );

// composeListR :: [(a -> a)] -> (a -> a)
const composeListR = fs =>
    x => fs.reduce((a, f) => f(a), x);

// composeR (>>>) :: (a -> b) -> (b -> c) -> a -> c
const composeR = f =>
    g => x => f(g(x));

// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length ? (
        (
            xs.every(x => "string" === typeof x) ? (
                ""
            ) : []
        ).concat(...xs)
    ) : xs;

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    // Concatenated results of a map of f over xs.
    // f is any function which returns a list value.
    // Any empty lists returned are filtered out by
    // the concatenation.
    xs => xs.flatMap(f);

// cons :: a -> [a] -> [a]
const cons = x =>
// A list constructed from the item x,
// followed by the existing list xs.
    xs => Array.isArray(xs) ? (
        [x].concat(xs)
    ) : "GeneratorFunction" !== xs.constructor.constructor.name ? (
        x + xs
    ) : (
        function *() {
            yield x;
            let nxt = xs.next();

            while (!nxt.done) {
                yield nxt.value;
                nxt = xs.next();
            }
        }());

// constant :: a -> b -> a
const constant = k =>
    () => k;

// curry :: ((a, b) -> c) -> a -> b -> c
const curry = f =>
    a => b => f(a, b);

// curryN :: Curry a b => a -> b
const curryN = f =>
    // A curried function derived from a
    // function over a tuple of any order.
    (...args) => {
        const
            go = xs => f.length <= xs.length ? (
                f(...xs)
            ) : (...ys) => go(xs.concat(ys));

        return go(args);
    };

// cycle :: [a] -> Generator [a]
const cycle = function *(xs) {
    // An infinite repetition of xs,
    // from which an arbitrary prefix
    // may be taken.
    const lng = xs.length;
    let i = 0;

    while (true) {
        yield xs[i];
        i = (1 + i) % lng;
    }
};

// decodedPath :: Percent Encoded String -> FilePath
const decodedPath = decodeURI;

// degrees :: Float x => Radians x -> Degrees x
const degrees = r =>
    (180 / Math.PI) * r;

// delete :: Eq a => a -> [a] -> [a]
const delete_ = x => {
    // xs with first instance of x (if any) removed.
    const go = xs =>
        0 < xs.length ? (
            (x === xs[0]) ? (
                xs.slice(1)
            ) : [xs[0]].concat(go(xs.slice(1)))
        ) : [];

    return go;
};

// deleteAt :: Int -> [a] -> [a]
const deleteAt = i =>
    xs => i <= xs.length ? (() => {
        const lr = splitAt(i)(xs);

        return lr[0].concat(lr[1].slice(1));
    })() : xs;

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = fEq =>
    x => {
        const go = xs => 0 < xs.length ? (
            fEq(x)(xs[0]) ? (
                xs.slice(1)
            ) : [xs[0]].concat(go(xs.slice(1)))
        ) : [];

        return go;
    };

// deleteFirst :: a -> [a] -> [a]
const deleteFirst = x => {
    const go = xs => 0 < xs.length ? (
        x === xs[0] ? (
            xs.slice(1)
        ) : [xs[0]].concat(go(xs.slice(1)))
    ) : [];

    return go;
};

// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = fEq =>
    // The first list purged of the first instance of
    // each predicate-matching element in the second list.
    foldl(flip(deleteBy(fEq)));

// deleteKey :: String -> Dict -> Dict
const deleteKey = k =>
    // A new dictionary, without the key k.
    dct => {
        const dct2 = Object.assign({}, dct);

        return (delete dct2[k], dct2);
    };

// dictFromList :: [(k, v)] -> Dict
const dictFromList = kvs =>
    Object.fromEntries(kvs);

// difference :: Eq a => [a] -> [a] -> [a]
const difference = xs =>
    ys => {
        const s = new Set(ys);

        return xs.filter(x => !s.has(x));
    };

// differenceGen :: Gen [a] -> Gen [a] -> Gen [a]
const differenceGen = ga =>
    function *(gb) {
        // All values of generator stream ga except any
        // already seen in generator stream gb.
        const
            stream = zipGen(ga)(gb),
            sb = new Set([]);

        let xy = take(1)(stream);

        while (0 < xy.length) {
            const [x, y] = Array.from(xy[0]);

            sb.add(y);
            if (!sb.has(x)) {
                yield x;
            }
            xy = take(1)(stream);
        }
    };

// digitToInt :: Char -> Int
const digitToInt = c => {
    const
        ord = x => x.codePointAt(0),
        oc = ord(c);

    return 48 > oc || 102 < oc ? (
        null
    ) : (() => {
        const
            dec = oc - ord("0"),
            hexu = oc - ord("A"),
            hexl = oc - ord("a");

        return 9 >= dec ? (
            dec
        ) : 0 <= hexu && 5 >= hexu ? (
            10 + hexu
        ) : 0 <= hexl && 5 >= hexl ? (
            10 + hexl
        ) : null;
    })();
};

// div :: Int -> Int -> Int
const div = x =>
    y => Math.floor(x / y);

// divMod :: Int -> Int -> (Int, Int)
const divMod = n => d => {
    // Integer division, truncated toward negative infinity,
    // and integer modulus such that:
    // (x `div` y)*y + (x `mod` y) == x
    const [q, r] = [Math.trunc(n / d), n % d];

    return signum(n) === signum(-d) ? (
        Tuple(q - 1)(r + d)
    ) : Tuple(q)(r);
};

// dot (.) :: (b -> c) -> (a -> b) -> a -> c
const dot = f =>
    // The composition of two functions.
    g => x => f(g(x));

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
                ["│"].concat(
                    shifted("├─ ", "│  ", draw(xs[0]))
                )
            ).concat(
                drawSubTrees(xs.slice(1))
            ) : ["│"].concat(
                shifted("└─ ", "   ", draw(xs[0]))
            )
        ) : [];
    };

    return node.root.split("\n").concat(
        drawSubTrees(node.nest)
    );
};

// drawForest :: [Tree String] -> String
const drawForest = trees =>
    trees.map(drawTree).join("\n");

// drawTree :: Tree String -> String
const drawTree = tree =>
    draw(tree).join("\n");

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

            // ----------- NODE WITH CHILDREN ------------
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

// drop :: Int -> [a] -> [a]
// drop :: Int -> Generator [a] -> Generator [a]
// drop :: Int -> String -> String
const drop = n =>
    xs => Infinity > length(xs) ? (
        xs.slice(n)
    ) : (take(n)(xs), xs);

// dropAround :: (a -> Bool) -> [a] -> [a]
// dropAround :: (Char -> Bool) -> String -> String
const dropAround = p =>
    xs => dropWhile(p)(
        dropWhileEnd(p)(xs)
    );

// dropFileName :: FilePath -> FilePath
const dropFileName = fp =>
    "" !== fp ? (() => {
        const
            xs = (fp.split("/"))
            .slice(0, -1);

        return 0 < xs.length ? (
            `${xs.join("/")}/`
        ) : "./";
    })() : "./";

// dropLength :: [a] -> [b] -> [b]
const dropLength = xs =>
    ys => {
        const go = (x, y) =>
            0 < x.length ? (
                0 < y.length ? (
                    go(x.slice(1), y.slice(1))
                ) : []
            ) : y;

        return go(xs, ys);
    };

// dropLengthMaybe :: [a] -> [b] -> Maybe [b]
const dropLengthMaybe = xs =>
    ys => {
        const go = (x, y) =>
            0 < x.length ? (
                0 < y.length ? (
                    go(x.slice(1), y.slice(1))
                ) : Nothing()
            ) : Just(y);

        return go(xs, ys);
    };

// dropWhile :: (a -> Bool) -> [a] -> [a]
// dropWhile :: (Char -> Bool) -> String -> String
const dropWhile = p =>
    // The suffix remainining after takeWhile p xs.
    xs => {
        const n = xs.length;

        return xs.slice(
            0 < n ? until(
                i => n === i || !p(xs[i])
            )(i => 1 + i)(0) : 0
        );
    };

// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> [Char]
const dropWhileEnd = p =>
    // xs without the longest suffix for which
    // p returns true for all elements.
    xs => xs.slice(
        0,
        1 + until(
            i => (0 >= i) || !p(xs[i])
        )(
            x => x - 1
        )(xs.length - 1)
    );

// dropWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const dropWhileGen = p =>
    xs => {
        let
            nxt = xs.next(),
            v = nxt.value;

        while (!nxt.done && p(v)) {
            nxt = xs.next();
            v = nxt.value;
        }

        return cons(v)(xs);
    };

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = fl =>
    // Application of the function fl to the
    // contents of any Left value in e, or
    // the application of fr to its Right value.
    fr => e => "Left" in e ? (
        fl(e.Left)
    ) : fr(e.Right);

// elem :: Eq a => a -> [a] -> Bool
const elem = x =>
    // True if xs contains an instance of x.
    xs => {
        const t = xs.constructor.name;

        return "Array" !== t ? (
            xs["Set" !== t ? "includes" : "has"](x)
        ) : xs.some(eq(x));
    };

// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = i =>
    // Just the item at the indexed position in an array,
    // or in the lexically sorted key-values of a dict,
    // or Nothing, if the index is out of range.
    obj => {
        const
            vs = Array.isArray(obj) ? (
                obj
            ) : Object.entries(obj).sort(
                (a, b) => b[0].localeCompare(a[0])
            );

        return (0 <= i) && (i < vs.length) ? (
            Just(vs[i])
        ) : Nothing();
    };

// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = x =>
    // Just the index of x in xs, if it is found,
    // or Nothing, if xs does not contain x.
    xs => {
        const i = xs.indexOf(x);

        return -1 === i ? (
            Nothing()
        ) : Just(i);
    };

// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = x =>
    // The indices at which x occurs in xs.
    xs => [...xs].flatMap(
        (y, i) => y === x ? (
            [i]
        ) : []
    );

// elems :: Map k a -> [a]
// elems :: Set a -> [a]
const elems = x =>
    "Set" !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());

// encodedPath :: FilePath -> Percent Encoded String
const encodedPath = encodeURI;

// enumFrom :: Enum a => a -> [a]
const enumFrom = function* (x) {
    // A non-finite succession of enumerable
    // values, starting with the value x.
    let v = x;

    while (true) {
        yield v;
        v = succ(v);
    }
};

// enumFromPairs :: String -> [(String, Int)] -> Dict
const enumFromPairs = enumName =>
    kvs => {
        const
            iMax = kvs[kvs.length - 1][1],
            iMin = kvs[0][1];

        return kvs.reduce(
            (a, kv) => Object.assign(
                a, {
                    [kv[0]]: {
                        "type": "enum",
                        "name": enumName,
                        "key": kv[0],
                        "max": iMax,
                        "min": iMin,
                        "value": kv[1]
                    },
                    [kv[1]]: kv[0]
                }
            ), {}
        );
    };

// enumFromThen :: Int -> Int -> Gen [Int]
const enumFromThen = x =>
    // A non-finite stream of integers,
    // starting with x and y, and continuing
    // with the same interval.
    function* (y) {
        const d = y - x;
        let v = y + d;

        yield x;
        yield y;
        while (true) {
            yield v;
            v = d + v;
        }
    };

// enumFromThenTo :: Int -> Int -> Int -> [Int]
const enumFromThenTo = m =>
    // Integer values enumerated from m to n
    // with a step defined by (nxt - m).
    nxt => n => {
        const d = nxt - m;

        return Array.from({
            length: (Math.floor(n - nxt) / d) + 2
        }, (_, i) => m + (d * i));
    };

// enumFromThenToChar :: Char -> Char -> Char -> [Char]
const enumFromThenToChar = x1 =>
    x2 => y => {
        const [i1, i2, iY] = Array.from([x1, x2, y])
            .map(x => x.codePointAt(0)),
            d = i2 - i1;

        return Array.from({
            length: (Math.floor(iY - i2) / d) + 2
        }, (_, i) => String.fromCodePoint(i1 + (d * i)));
    };

// enumFromTo :: Int -> Int -> [Int]
const enumFromTo = m =>
    n => Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);

// enumFromToChar :: Char -> Char -> [Char]
const enumFromToChar = m => n => {
    const [intM, intN] = [m, n].map(
        x => x.codePointAt(0)
    );

    return Array.from({
        length: Math.floor(intN - intM) + 1
    }, (_, i) => String.fromCodePoint(intM + i));
};

// enumFromTo_ :: Enum a => a -> a -> [a]
const enumFromTo_ = m => n => {
    const [x, y] = [m, n].map(fromEnum),
        b = x + (isNaN(m) ? 0 : m - x);

    return Array.from({
        length: 1 + (y - x)
    }, (_, i) => toEnum(m)(b + i));
};

// eq (==) :: Eq a => a -> a -> Bool
const eq = a =>
    // True when a and b are equivalent in the terms
    // defined below for their shared data type.
    b => {
        const t = typeof a;

        return t !== typeof b ? (
            false
        ) : "object" !== t ? (
            "function" !== t ? (
                a === b
            ) : a.toString() === b.toString()
        ) : (() => {
            const kvs = Object.entries(a);

            return kvs.length !== Object.keys(b).length ? (
                false
            ) : kvs.every(([k, v]) => eq(v)(b[k]));
        })();
    };

// eqDate :: Date -> Date -> Bool
const eqDate = dte =>
    // True if the date parts of two date-time objects
    // (ignoring the time parts) are the same.
    dte1 => {
        const dayOnly = dateTime =>
            new Date(dateTime).setUTCHours(0, 0, 0, 0);

        return dayOnly(dte) === dayOnly(dte1);
    };

// evalJSLR :: String -> Either String a
const evalJSLR = s => {
    try {
        // eslint-disable-next-line no-eval
        return Right(eval(`(${s})`));
    } catch (e) {
        return Left(e.message);
    }
};

// evalJSMay :: String -> Maybe a
const evalJSMay = s => {
    try {
        // eslint-disable-next-line no-eval
        return Just(eval(`(${s})`));
    } catch (e) {
        return Nothing();
    }
};

// even :: Int -> Bool
const even = n =>
    // True if 2 is a factor of n.
    0 === n % 2;

// exp :: Float -> Float
const exp = Math.exp;

// fTable :: String -> (a -> String) ->
// (b -> String) -> (a -> b) -> [a] -> String
const fTable = s =>
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    xShow => fxShow => f => xs => {
        const
            ys = xs.map(xShow),
            w = Math.max(...ys.map(y => [...y].length)),
            table = zipWith(
                a => b => `${a.padStart(w, " ")} -> ${b}`
            )(ys)(
                xs.map(x => fxShow(f(x)))
            ).join("\n");

        return `${s}\n${table}`;
    };

// fType :: (a -> f b) -> f
const fType = g => {
    const s = g.toString();

    return s.includes("Right") ? (
        Right
    ) : s.includes("Left") ? (
        Left
    ) : s.includes("Nothing") ? (
        Just
    ) : true ? (
        constant
    ) : s.includes("Node") ? (
        flip(Node)([])
    ) : x => [x];
};

// // fType :: (a -> f b) -> f
// const fType = g => {
//     const s = g.toString();

//     return s.includes("Left") ? (
//         Right
//     ) : s.includes("Nothing") ? (
//         Just
//     ) : s.includes("Node") ? (
//         flip(Node)([])
//     ) : 1 < (s.match(/ =>/gu) || []).length ? (
//         constant
//     ) : x => [x];
// };

// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // A function from x to a tuple of (f(x), g(x))
    // ((,) . f <*> g)
    g => x => Tuple(f(x))(
        g(x)
    );

// filePathTree :: filePath -> [Tree String] -> Tree FilePath
const filePathTree = fpAnchor => trees => {
    const go = fp => tree => {
        const path = `${fp}/${tree.root}`;

        return Node(path)(
            tree.nest.map(go(path))
        );
    };

    return Node(fpAnchor)(
      trees.map(go(fpAnchor))
    );
};

// filter :: (a -> Bool) -> [a] -> [a]
const filter = p =>
    // The elements of xs which match
    // the predicate p.
    xs => [...xs].filter(p);

// filterGen :: (a -> Bool) -> Gen [a] -> Gen [a]
const filterGen = p =>
    // A stream of values which are drawn
    // from a generator, and satisfy p.
    xs => {
        const go = function* () {
            let x = xs.next();

            while (!x.done) {
                const v = x.value;

                if (p(v)) {
                    yield v;
                }
                x = xs.next();
            }
        };

        return go(xs);
    };

// filterTree (a -> Bool) -> Tree a -> [a]
const filterTree = p =>
    // List of all values in the tree
    // which match the predicate p.
    foldTree(x => xs => concat(
        p(x) ? [
            [x], ...xs
        ] : xs
    ));

// filteredSubTrees :: (Tree a -> Bool) -> Tree a -> [Tree a]
const filteredSubTrees = p => {
    const go = tree => (
        p(tree.root) ? (
            [tree]
        ) : []
    ).concat(tree.nest.flatMap(go));

    return go;
};

// filteredTree (a -> Bool) -> Tree a -> Tree a
const filteredTree = p =>
    // A tree including only those children
    // which either match the predicate p, or have
    // descendants which match the predicate p.
    foldTree(x => xs =>
        Node(x)(xs.filter(
            tree => (0 < tree.nest.length) || (
                p(tree.root)
            )
        ))
    );

// find :: (a -> Bool) -> [a] -> Maybe a
const find = p =>
    // Just the first element in xs which
    // matches the predicate p, or
    // Nothing if no match is found.
    xs => xs.constructor.constructor.name !== (
        "GeneratorFunction"
    ) ? (() => {
        const
            ys = list(xs),
            i = ys.findIndex(p);

        return -1 !== i ? (
            Just(ys[i])
        ) : Nothing();
    })() : findGen(p)(xs);

// findGen :: (a -> Bool) -> Gen [a] -> Maybe a
const findGen = p =>
    // Just the first match for the predicate p
    // in the generator stream xs, or Nothing
    // if no match is found.
    xs => {
        const
            mb = until(tpl => {
                const nxt = tpl[0];

                return nxt.done || p(nxt.value);
            })(
                tpl => Tuple(tpl[1].next())(
                    tpl[1]
                )
            )(Tuple(xs.next())(xs))[0];

        return mb.done ? (
            Nothing()
        ) : Just(mb.value);
    };

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

// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = p =>
    //  Just the index of the last element in
    //  xs for which p(x) is true, or
    //  Nothing if there is no such element.
    xs => {
        const i = reverse([...xs]).findIndex(p);

        return -1 !== i ? (
            Just(xs.length - (1 + i))
        ) : Nothing();
    };

// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = p =>
    xs => {
        const ys = [...xs];

        return ys.flatMap(
            (y, i) => p(y, i, ys) ? (
                [i]
            ) : []
        );
    };

// findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
const findTree = p => {
    // The first of any nodes in the tree which match the predicate p
    // (For all matches, see treeMatches)
    const go = tree =>
        p(tree.root) ? (
            Just(tree)
        ) : (() => {
            const
                xs = tree.nest,
                lng = xs.length;

            return 0 < lng ? until(
                tpl => lng <= tpl[0] || !tpl[1].Nothing
            )(
                tpl => Tuple(1 + tpl[0])(
                    go(xs[tpl[0]])
                )
            )(
                Tuple(0)(
                    Nothing()
                )
            )[1] : Nothing();
        })();

    return go;
};

// first :: (a -> b) -> ((a, c) -> (b, c))
const first = f =>
    // A simple function lifted to one which applies
    // to a tuple, transforming only its first item.
    xy => {
        const tpl = Tuple(f(xy[0]))(xy[1]);

        return Array.isArray(xy) ? (
            Array.from(tpl)
        ) : tpl;
    };

// flatten :: NestedList a -> [a]
const flatten = nest =>
    nest.flat(Infinity);

// flattenTree :: Tree a -> [a]
const flattenTree = tree => {
    const
        go = (xs, node) => [node.root].concat(
            node.nest.reduceRight(go, xs)
        );

    return go([], tree);
};

// flip :: (a -> b -> c) -> b -> a -> c
const flip = op =>
    // The binary function op with
    // its arguments reversed.
    1 < op.length ? (
        (a, b) => op(b, a)
    ) : (x => y => op(y)(x));

// floor :: Num -> Int
const floor = x => {
    const
        nr = (
            "Ratio" !== x.type ? (
                properFraction
            ) : properFracRatio
        )(x),
        n = nr[0];

    return 0 > nr[1] ? n - 1 : n;
};

// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = f =>
    // f mapped over the given functor.
    x => ({
        "Either": () => fmapLR,
        "(a -> b)": () => dot,
        "List": () => map,
        "Maybe": () => fmapMay,
        "Node": () => fmapTree,
        "String": () => map,
        "Tuple": () => fmapTuple
    })[typeName(x)]()(f)(x);

// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
const fmapGen = f =>
    // The map of f over a stream of generator values.
    function* (gen) {
        let v = gen.next();

        while (!v.done) {
            yield f(v.value);
            v = gen.next();
        }
    };

// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = f => lr =>
    undefined === lr.Left ? (
        Right(f(lr.Right))
    ) : lr;

// fmapMay (<$>) :: (a -> b) -> Maybe a -> Maybe b
const fmapMay = f => mb =>
    mb.Nothing ? (
        mb
    ) : Just(f(mb.Just));

// fmapTree :: (a -> b) -> Tree a -> Tree b
const fmapTree = f => {
    // A new tree. The result of a
    // structure-preserving application of f
    // to each root in the existing tree.
    const go = t => Node(
        f(t.root)
    )(
        t.nest.map(go)
    );

    return go;
};

// fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
const fmapTuple = f => tpl =>
    Tuple(tpl[0])(
        f(tpl[1])
    );

// foldList :: Monoid m => [m] -> m
const foldList = xs =>
    // The elements of xs combined.
    foldMapList(x => x)(xs);

// foldMapList :: Monoid m => (a -> m) -> t a -> m
const foldMapList = f =>
    // f mapped over the combined values of a structure.
    xs => 1 < xs.length ? (
        xs.slice(1).reduce(
            (a, x) => mappend(a)(f(x)),
            xs[0]
        )
    ) : xs.map(f);

// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = f => {
    // Result of mapping each element of the tree to
    // a monoid, and combining with mappend.
    const go = tree => {
        const
            x = root(tree),
            xs = nest(tree);

        return 0 < xs.length ? (
            mappend(
                f(x)
            )(
                foldl1(mappend)(xs.map(go))
            )
        ) : f(x);
    };

    return go;
};

// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = f => {
    // The catamorphism on trees. A summary
    // value obtained by a depth-first fold.
    const go = tree => f(
        root(tree)
    )(
        nest(tree).map(go)
    );

    return go;
};

// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f =>
    // Note that that the signature of foldl differs
    // from that of foldr - the positions of
    // accumulator and current value in f are reversed.
    a => xs => [...xs].reduce(
        (x, y) => f(x)(y),
        a
    );

// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = f =>
    // Left to right reduction of the non-empty list xs,
    // using the binary operator f, with the head of xs
    // as the initial acccumulator value.
    xs => (
        ys => 1 < ys.length ? ys.slice(1)
        .reduce(uncurry(f), ys[0]) : ys[0]
    )(list(xs));

// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = f =>
    xs => (
        ys => 0 < ys.length ? (
            Just(ys.slice(1)
                .reduce(uncurry(f), ys[0]))
        ) : Nothing()
    )(list(xs));

// foldlTree :: (b -> a -> b) -> b -> Tree a -> b
const foldlTree = f =>
    // A top-down left-right
    // accumulating traversal.
    acc => node => {
        const go = (a, x) =>
            x.nest.reduce(go, f(a)(x.root));

        return go(acc, node);
    };

// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f =>
    // Note that that the signature of foldr differs
    // from that of foldl - the positions of
    // current value and accumulator in f are reversed
    acc => xs => [...xs].reduceRight(
        (a, x) => f(x)(a),
        acc
    );

// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = f =>
    xs => (ys => 0 < ys.length ? (
        init(ys).reduceRight(
            uncurry(f),
            last(ys)
        )
    ) : [])(list(xs));

// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = f =>
    // Nothing if xs is empty, or Just a right
    // fold of f over the list using the last
    // item of xs as the initial accumulator value.
    xs => (
        ys => 0 < ys.length ? (
            Just(ys.slice(0, -1)
                .reduceRight(uncurry(f), ys.slice(-1)[0]))
        ) : Nothing()
    )(list(xs));

// foldrTree :: (a -> b -> b) -> b -> Tree a -> b
const foldrTree = f =>
    acc => node => {
        const go = (a, x) =>
            f(x.root)(
                x.nest.reduceRight(go, a)
            );

        return go(acc, node);
    };

// fromEnum :: Enum a => a -> Int
const fromEnum = x =>
    typeof x !== "string" ? (
        x.constructor === Object ? (
            x.value
        ) : parseInt(Number(x), 10)
    ) : x.codePointAt(0);

// fromLeft :: a -> Either a b -> a
const fromLeft = def =>
    // The contents of a 'Left' value, or otherwise a default value.
    lr => isLeft(lr) ? lr.Left : def;

// fromMaybe :: a -> Maybe a -> a
const fromMaybe = def =>
    mb => mb.Nothing ? def : mb.Just;

// fromRight :: b -> Either a b -> b
const fromRight = def =>
    // The contents of a 'Right' value or otherwise a default value.
    lr => isRight(lr) ? (
        lr.Right
    ) : def;

// fst :: (a, b) -> a
const fst = tpl =>
    // First member of a pair.
    tpl[0];

// ft :: (Int, Int) -> [Int]
const ft = m =>
    n => Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);

// gcd :: Integral a => a -> a -> a
const gcd = x =>
    y => {
        const zero = x.constructor(0);
        const go = (a, b) =>
            zero === b ? (
                a
            ) : go(b, rem(a)(b));

        return go(abs(x), abs(y));
    };

// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = xs =>
    i => (i < xs.length && 0 <= i) ? (
        Just(xs[i])
    ) : Nothing();

// group :: Eq a => [a] -> [[a]]
const group = xs => {
    // A list of lists, each containing only equal elements,
    // such that the concatenation of these lists is xs.
    const go = ys =>
        0 < ys.length ? (() => {
            const
                h = ys[0],
                i = ys.findIndex(y => h !== y);

            return i !== -1 ? (
                [ys.slice(0, i)].concat(go(ys.slice(i)))
            ) : [ys];
        })() : [];
    const v = go(list(xs));

    return "string" === typeof xs ? (
        v.map(x => x.join(""))
    ) : v;
};

// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq =>
    // Typical usage: groupBy(on(eq)(f), xs)
    xs => (ys => 0 < ys.length ? (() => {
        const
            tpl = ys.slice(1).reduce(
                (gw, x) => {
                    const
                        gps = gw[0],
                        wkg = gw[1];

                    return fEq(wkg[0])(x) ? (
                        Tuple(gps)(wkg.concat([x]))
                    ) : Tuple(gps.concat([wkg]))([x]);
                },
                Tuple([])([ys[0]])
            ),
            v = tpl[0].concat([tpl[1]]);

        return "string" !== typeof xs ? (
            v
        ) : v.map(x => x.join(""));
    })() : [])(list(xs));

// groupSortBy :: (a -> a -> Ordering) -> [a] -> [[a]]
const groupSortBy = f =>
    xs => compose(
        groupBy(a => b => 0 === f(a)(b)),
        sortBy(f)
    )(list(xs));

// groupSortOn :: Ord b => (a -> b) -> [a] -> [[a]]
const groupSortOn = f =>
    compose(
        map(map(snd)),
        groupBy(on(eq)(fst)),
        sortBy(comparing(fst)),
        map(fanArrow(f)(identity))
    );

// gt :: Ord a => a -> a -> Bool
const gt = x => y =>
    "Tuple" === x.type ? (
        x[0] > y[0]
    ) : (x > y);

// head :: [a] -> a
const head = xs => (
    ys => ys.length ? (
        ys[0]
    ) : undefined
)(list(xs));

// headDef :: a -> [a] -> a
const headDef = v =>
    // The first item of a non-empty list,
    // or a default value if the list is empty.
    xs => 0 < xs.length ? (
        xs[0]
    ) : v;

// headMay :: [a] -> Maybe a
const headMay = xs =>
    // Just the first item of xs, or
    // Nothing if xs is an empty list.
    0 < xs.length ? (
        Just(xs[0])
    ) : Nothing();

// identity :: a -> a
const identity = x =>
    // The identity function.
    x;

// if_ :: Bool -> a -> a -> a
const if_ = bln =>
    x => y => bln ? (
        x
    ) : y;

// indented :: String -> String -> String
const indented = strIndent =>
    s => s.split(/[\r\n]/u)
    .map(
        x => "" !== x ? strIndent + x : x
    )
    .join("\n");

// index (!!) :: [a] -> Int -> Maybe a
// index (!!) :: Generator (Int, a) -> Int -> Maybe a
// index (!!) :: String -> Int -> Maybe Char
const index = xs =>
    i => {
        const s = xs.constructor.constructor.name;

        return "GeneratorFunction" !== s ? (() => {
            const v = xs[i];

            return undefined !== v ? Just(v) : Nothing();
        })() : (take(i)(xs), xs.next().value);
    };

// indexForest :: [Tree (a,  { nodeSum :: Int })] -> Int ->
// Maybe Tree (a, { nodeSum :: Int })
const indexForest = trees =>
    // Index into a forest of measured trees.
    // (see measuredTree)
    i => 0 < trees.length ? (() => {
        const
            headNode = trees[0],
            headSize = headNode.root[1].nodeSum;

        return i > (headSize - 1) ? (
            indexForest(trees.slice(1))(i - headSize)
        ) : indexTree(headNode)(i);
    })() : Nothing();

// indexOf :: Eq a => [a] -> [a] -> Maybe Int
// indexOf :: String -> String -> Maybe Int
const indexOf = needle =>
    haystack => "string" !== typeof haystack ? (
        findIndex(xs => isPrefixOf(needle)(xs))(
            tails(haystack)
        )
    ) : (() => {
        const i = haystack.indexOf(needle);

        return -1 !== i ? (
            Just(i)
        ) : Nothing();
    })();

// indexTree :: Tree (a,  { nodeSum :: Int }) -> Int ->
// Maybe Tree (a,  { nodeSum :: Int })
const indexTree = tree =>
    // Index into a measured tree. (see measuredTree)
    i => 0 !== i ? (
        i > (tree.root[1].nodeSum - 1) ? (
            Nothing()
        ) : indexForest(tree.nest)(i - 1)
    ) : Just(tree);

// indexedTree :: Int -> Tree a -> Tree (a, Int)
const indexedTree = rootIndex =>
    // A tree in which each root value
    // is paired with a top-down
    // left-right index, where the root node
    // starts at the supplied rootIndex;
    mapAccumLTree(
        i => x => [1 + i, [x, {
            index: i
        }]]
    )(rootIndex);

// init :: [a] -> [a]
const init = xs => (
// All elements of a list except the last.
    ys => 0 < ys.length ? (
        ys.slice(0, -1)
    ) : null
)(list(xs));

// initMay :: [a] -> Maybe [a]
const initMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(0, -1))
    ) : Nothing()
)(list(xs));

// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs =>
    // All prefixes of the argument,
    // shortest first.
    [
        []
    ].concat((list(xs))
        .map((_, i, ys) => ys.slice(0, 1 + i)));

// insert :: Ord a => a -> [a] -> [a]
const insert = x =>
    ys => {
        const [pre, post] = Array.from(
            break_(y => y >= x)(ys)
        );

        return [...pre, x, ...post];
    };

// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp =>
    x => xs => {
        const go = y => ys =>
            0 < ys.length ? (
                0 < cmp(y)(ys[0]) ? (
                    cons(ys[0])(
                        go(y)(ys.slice(1))
                    )
                ) : cons(y)(ys)
            ) : [y];

        return go(x)(list(xs));
    };

// insertDict :: String -> a -> Dict -> Dict
const insertDict = k => v => dct =>
    Object.assign({}, dct, {
        [k]: v
    });

// intToDigit :: Int -> Char
const intToDigit = n =>
    n >= 0 && n < 16 ? (
        "0123456789ABCDEF".charAt(n)
    ) : "?";

// intercalate :: [a] -> [[a]] -> [a]
// intercalate :: String -> [String] -> String
const intercalate = sep => xs =>
    0 < xs.length && "string" === typeof sep &&
    "string" === typeof xs[0] ? (
        xs.join(sep)
    ) : concat(intersperse(sep)(xs));

// intercalateS :: String -> [String] -> String
const intercalateS = s =>
    // The concatenation of xs
    // interspersed with copies of s.
    xs => xs.join(s);

// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = xs =>
    // The intersection of lists xs and ys.
    ys => xs.filter(x => ys.includes(x));

// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = eqFn =>
    // The intersection of the lists xs and ys
    // in terms of the equality defined by eq.
    xs => ys => {
        const zs = list(ys);

        return list(xs).filter(
            x => zs.some(eqFn(x))
        );
    };

// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eqFn => xs =>
    foldr1(
        (a => x => intersectBy(eqFn)(a)(x))
    )(list(xs));

// intersection :: Ord a => Set a -> Set a -> Set a
const intersection = s => s1 =>
    new Set([...s].filter(x => s1.has(x)));

// intersperse :: a -> [a] -> [a]
// intersperse :: Char -> String -> String
const intersperse = sep => xs => {
    // intersperse(0, [1,2,3]) -> [1, 0, 2, 0, 3]
    const bln = "string" === typeof xs;

    return xs.length > 1 ? (
        (bln ? concat : x => x)(
            (bln ? (
                xs.split("")
            ) : xs)
            .slice(1)
            .reduce((a, x) => a.concat([sep, x]), [xs[0]])
        )) : xs;
};

// isAlpha :: Char -> Bool
const isAlpha = c =>
    (/[A-Za-z\u00C0-\u00FF]/u).test(c);

// isAlphaNum :: Char -> Bool
const isAlphaNum = c => {
    const n = c.codePointAt(0);

    return (48 <= n && 57 >= n) || (
        (/[A-Za-z\u00C0-\u00FF]/u).test(c)
    );
};

// isBigInt :: Num -> Bool
const isBigInt = n =>
    ("undefined" !== typeof BigInt) && (
        "bigint" === typeof n
    );

// isChar :: a -> Bool
const isChar = x =>
    ("string" === typeof x) && (1 === x.length);

// isDigit :: Char -> Bool
const isDigit = c => {
    const n = c.codePointAt(0);

    return 48 <= n && 57 >= n;
};

// isInfixOf :: (Eq a) => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = needle => haystack =>
    "string" !== typeof haystack ? (() => {
        const
            lng = needle.length,
            go = xs => lng <= xs.length ? (
                isPrefixOf(needle)(xs) || go(xs.slice(1))
            ) : false;

        return go(haystack);
    })() : haystack.includes(needle);

// isLeft :: Either a b -> Bool
const isLeft = lr =>
    ("Either" === lr.type) && (undefined !== lr.Left);

// isLower :: Char -> Bool
const isLower = c =>
    // True if c is a lower case character.
    (/[a-z]/u).test(c);

// isMaybe :: a -> Bool
const isMaybe = x =>
    "Maybe" === x.type;

// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
// True if xs is empty.
    1 > xs.length;

// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = xs =>
    // True if and only if xs is a prefix of ys.
    ys => {
        const go = (vs, ws) => {
            const intX = vs.length;

            return 0 < intX ? (
                ws.length >= intX ? vs[0] === ws[0] && go(
                    vs.slice(1), ws.slice(1)
                ) : false
            ) : true;
        };

        return "string" !== typeof xs ? (
            go(xs, ys)
        ) : ys.startsWith(xs);
    };

// isRight :: Either a b -> Bool
const isRight = lr =>
  ("undefined" !== typeof lr) &&
  ("Either" === lr.type) && (undefined !== lr.Right);

// isSortedBy :: (a -> a -> Bool) -> [a] -> Bool
const isSortedBy = p =>
    // True if all adjacent pairs of elements in
    // the list return True under the predicate p.
    xs => xs.length < 2 || all(x => x < 1)(
        zipWith_(p)(
            xs
        )(tail(xs))
    );

// isSpace :: Char -> Bool
const isSpace = c =>
    // True if c is a white space character.
    (/\s/u).test(c);

// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
// isSubsequenceOf :: String -> String -> Bool
const isSubsequenceOf = xs =>
    // True if xs is a sub-sequence of ys.
    ys => {
        const go = a => b =>
            0 < a.length ? (
                0 < b.length ? (
                    go(
                        a[0] === b[0] ? (
                            a.slice(1)
                        ) : a
                    )(b.slice(1))
                ) : false
            ) : true;

        return go(list(xs))(
            list(ys)
        );
    };

// isSubsetOf :: Ord a => Set a -> Set a -> Bool
const isSubsetOf = a => b => {
    for (const x of a) {
        if (!b.has(x)) {
            return false;
        }
    }

    return true;
};

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = ns => hs =>
    "string" !== typeof hs ? (
        (xs, ys) => bindMay(
            dropLengthMaybe(xs)(ys)
        )(d => eq(xs)(dropLength(d)(ys)))
    )(list(ns), list(hs)) : hs.endsWith(ns);

// isUpper :: Char -> Bool
const isUpper = c =>
    // True if c is an upper case character.
    (/[A-Z]/u).test(c);

// iso8601Local :: Date -> String
const iso8601Local = dte =>
    new Date(dte - (6E4 * dte.getTimezoneOffset()))
    .toISOString();

// iterate :: (a -> a) -> a -> Gen [a]
const iterate = f =>
    // An infinite list of repeated applications of f to x.
    function* (x) {
        let v = x;

        while (true) {
            yield v;
            v = f(v);
        }
    };

// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p =>
    f => function*(x) {
        let v = x;

        while (!p(v)) {
            yield v;
            v = f(v);
        }
    };

// join :: Monad m => m (m a) -> m a
const join = x =>
    bind(x)(identity);

// jsonFromTree :: Tree a -> String
const jsonFromTree = tree => {
    // A recursive [root, nest] JSON format,
    // in which `root` is a value string, and `nest`
    // is a possibly empty list of [`root`, `nest`] pairs.
    const go = node => [node.root, node.nest.map(go)];

    return JSON.stringify(go(tree));
};

// jsonLog :: a -> IO ()
const jsonLog = (...args) =>
    // eslint-disable-next-line no-console
    console.log(
        args
        .map(JSON.stringify)
        .join(" -> ")
    );

// jsonParseLR :: String -> Either String a
const jsonParseLR = s => {
    // Either a message, or a JS value obtained
    // from a successful parse of s.
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(
            `${e.message} (line:${e.line} col:${e.column})`
        );
    }
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
    c => s => n > s.length ? (
        s.padStart(n, c)
    ) : s;

// kCompose (>=>) :: Monad m =>
// [(a -> m a)] -> (a -> m a)
const kCompose = (...fs) =>
    // Left Right composition of a sequence
    // of functions which lift a raw value
    // of the same type into the same monad.
    x => 0 < fs.length ? (
        fs.slice(1).reduce(
            (m, f) => bind(m)(f),
            fs[0](x)
        )
    ) : x;

// keys :: Dict -> [String]
const keys = Object.keys;

// kleisliCompose (>=>) :: Monad m => (a -> m b) ->
// (b -> m c) -> (a -> m c)
const kleisliCompose = f =>
    // Kleisli composition of two functions which
    // each lift their values into the same monad.
    g => x => bind(f(x))(g);

// last :: [a] -> a
const last = xs =>
    // The last item of a list.
    0 < xs.length ? (
        xs.slice(-1)[0]
    ) : null;

// lastMay :: [a] -> Maybe a
const lastMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(-1)[0])
    ) : Nothing()
)(list(xs));

// lcm :: Int -> Int -> Int
const lcm = x =>
    // The smallest positive integer divisible
    // without remainder by both x and y.
    y => (x === 0 || y === 0) ? (
        0
    ) : Math.abs(Math.floor(x / gcd(x)(y)) * y);

// le :: Ord a => a -> a -> a
const le = x =>
    // True if x <= y;
    y => x <= y;

// lefts :: [Either a b] -> [a]
const lefts = xs =>
    xs.flatMap(
        x => ("Either" === x.type) && (
            undefined !== x.Left
        ) ? [x.Left] : []
    );

// length :: [a] -> Int
const length = xs =>
    // Returns Infinity over objects without finite
    // length. This enables zip and zipWith to choose
    // the shorter argument when one is non-finite,
    // like cycle, repeat etc
    "GeneratorFunction" !== xs.constructor
    .constructor.name ? (
        xs.length
    ) : Infinity;

// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(xs => 1 > xs.length)(
    xs => xs.flatMap(x => x.nest)
  )([tree]);

// levels :: Tree a -> [[a]]
const levels = tree =>
    // A list of lists, grouping the
    // root values of each level
    // of the tree.
    cons([tree.root])(
        tree.nest
        .map(levels)
        .reduce(
            uncurry(zipWithLong(append)),
            []
        )
    );

// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = f =>
    // Lift a binary function to actions.
    // liftA2 f a b = fmap f a <*> b
    a => b => ({
        "(a -> b)": () => liftA2Fn,
        "Either": () => liftA2LR,
        "Maybe": () => liftA2May,
        "Tuple": () => liftA2Tuple,
        "Node": () => liftA2Tree,
        "List": () => liftA2List,
        "Bottom": () => liftA2List
    }[typeName(a) || "List"]())(f)(a)(b);

// liftA2Fn :: (a0 -> b -> c) -> (a -> a0) -> (a -> b) -> a -> c
const liftA2Fn = op =>
    // Lift a binary function to a composition
    // over two other functions.
    // liftA2 (*) (+ 2) (+ 3) 7 == 90
    f => g => x => op(f(x))(
        g(x)
    );

// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = f =>
    // The binary function f lifted to a
    // function over two Either values.
    a => b => bindLR(a)(
        x => bindLR(b)(
            compose(Right, f(x))
        )
    );

// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = op =>
    // The binary operator op applied to each pair of arguments 
    // in the cartesian product of xs and ys.
    // A binary operator lifed to a function over two lists. 
    xs => ys => list(xs).flatMap(
        x => list(ys).map(op(x))
    );

// liftA2May :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2May = f =>
    a => b => a.Nothing ? (
        a
    ) : b.Nothing ? (
        b
    ) : Just(f(a.Just)(b.Just));

// liftA2Tree :: (a -> b -> c) -> Tree a -> Tree b -> Tree c
const liftA2Tree = f =>
    tx => ty => {
        const go = t =>
            Node(f(t.root)(ty.root))(
                Boolean(ty.nest) ? (
                    ty.nest.map(
                        fmapTree(f(t.root))
                    )
                    .concat(t.nest.map(go))
                ) : []
            );

        return go(tx);
    };

// liftA2Tuple :: Monoid m =>
// (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = f =>
    a => b => Tuple(mappend(a[0])(b[0]))(
        f(a[1])(b[1])
    );

// lines :: String -> [String]
const lines = s =>
// A list of strings derived from a single
// string delimited by newline and or CR.
    0 < s.length ? (
        s.split(/[\r\n]+/u)
    ) : [];

// list :: StringOrArrayLike b => b -> [a]
const list = xs =>
    // xs itself, if it is an Array,
    // or an Array derived from xs.
    Array.isArray(xs) ? (
        xs
    ) : Array.from(xs || []);

// listFromMaybe :: Maybe a -> [a]
const listFromMaybe = mb =>
    // A singleton list derived from a Just value,
    // or an empty list derived from Nothing.
    mb.Nothing ? [] : [mb.Just];

// listFromTree :: Tree a -> [a]
const listFromTree = tree => {
    const go = x => [
        x.root,
        ...[].concat(...x.nest.map(go))
    ];

    return go(tree);
};

// listFromTuple :: (a, a ...) -> [a]
const listFromTuple = tpl =>
    Array.from(tpl);

// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    // Nothing if xs is empty, or Just the head of xs.
    0 < xs.length ? (
        Just(xs[0])
    ) : Nothing();

// log :: Float -> Float
const log = Math.log;

// lookup :: Eq a => a -> Container -> Maybe b
const lookup = k =>
    // Just of value of the key k in m,
    // or Nothing if m does not contain k.
    m => (Array.isArray(m) ? (
        lookupTuples
    ) : lookupDict)(k)(m);

// lookupDict :: a -> Dict -> Maybe b
const lookupDict = k =>
    dct => {
        const v = dct[k];

        return undefined !== v ? (
            Just(v)
        ) : Nothing();
    };

// lookupTuples :: Eq a => a -> [(a, b)] -> Maybe b
const lookupTuples = k =>
    kvs => {
        const i = kvs.findIndex(kv => k === kv[0]);

        return -1 !== i ? (
            Just(kvs[i][1])
        ) : Nothing();
    };

// lt (<) :: Ord a => a -> a -> Bool
const lt = a =>
    b => a < b;

// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = x =>
    // Not required in JS, which has first functions by default.
    // Included only for comparison with AS, which has to derive
    // first class functions by lifting 'handlers' into 'scripts'
    // as anonymous |λ|() functions.
    // In JS, mReturn is just an alias of identity.
    identity(x);

// map :: (a -> b) -> [a] -> [b]
const map = f =>
    // The list obtained by applying f
    // to each element of xs.
    // (The image of xs under f).
    xs => [...xs].map(f);

// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from left to right.
    acc => xs => [...xs].reduce(
        (a, x) => second(
            append(snd(a))
        )(
            f(fst(a))(x)
        ), [acc, []]
    );

// mapAccumLTree :: (acc -> x -> (acc, y)) ->
// acc -> Tree -> (acc, Tree)
const mapAccumLTree = f => {
    const go = a => x => {
        const
            pair = f(a)(root(x)),
            tpl = mapAccumL(go)(pair[0])(nest(x));

        return Tuple(tpl[0])(
            Node(pair[1])(tpl[1])
        );
    };

    return go;
};

// mapAccumR :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumR = f =>
    // A tuple of an accumulation and a list
    // obtained by a combined map and fold,
    // with accumulation from right to left.
    acc => xs => [...xs].reduceRight((a, x) => {
        const pair = f(a[0])(x);

        return Tuple(pair[0])(
            [pair[1]].concat(a[1])
        );
    }, Tuple(acc)([]));

// mapFromList :: [(String, a)] -> Dict
const mapFromList = kvs =>
    Object.fromEntries(kvs);

// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = f =>
    // A function mapped over the keys of a record,
    // defining a new record.
    dct => Object.fromEntries(
        Object.entries(dct)
        .map(kv => [f(kv[0]), kv[1]])
    );

// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = mf =>
    // A filtered map, retaining only the contents
    // of Just values. (Nothing values discarded).
    xs => list(xs).reduce(
        (a, x) => maybe(a)(
            j => a.concat(j)
        )(mf(x)),
        []
    );

// mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
const mapMaybeGen = mf =>
    // A filtered map over a generator, returning only the
    // contents of Just values. (Nothing values discarded).
    function*(gen) {
        let v = take(1, gen);

        while (0 < v.length) {
            const mb = mf(v[0]);

            if (!mb.Nothing) {
                yield mb.Just;
            }
            v = take(1, gen);
        }
    };

// mappend (<>) :: Monoid a => a -> a -> a
const mappend = a =>
    // Associative operation
    // defined for various monoids.
    ({
        "(a -> b)": () => mappendFn,
        "List": () => append,
        "Maybe": () => mappendMaybe,
        "Num": () => mappendOrd,
        "String": () => append,
        "Tuple": () => mappendTupleN,
        "TupleN": () => mappendTupleN
    })[typeName(a)]()(a);

// mappendComparing (<>) :: (a -> a -> Bool)
// (a -> a -> Bool) -> (a -> a -> Bool)
const mappendComparing = cmp =>
    cmp1 => a => b => {
        const x = cmp(a)(b);

        return 0 !== x ? (
            x
        ) : cmp1(a)(b);
    };

// mappendFn (<>) :: Monoid b => (a -> b) -> (a -> b) -> (a -> b)
const mappendFn = f =>
    g => x => mappend(f(x))(
        g(x)
    );

// mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
const mappendMaybe = a =>
     b => a.Nothing ? (
        b
    ) : b.Nothing ? (
        a
    ) : Just(
        mappend(a.Just)(
            b.Just
        )
    );

// mappendOrd (<>) :: Ordering -> Ordering -> Ordering
const mappendOrd = x =>
    y => 0 !== x ? (
        x
    ) : y;

// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = t => t1 =>
    Tuple(
        mappend(t[0])(t1[0])
    )(
        mappend(t[1])(t1[1])
    );

// mappendTupleN (<>) ::
// (a, b, ...) -> (a, b, ...) -> (a, b, ...)
const mappendTupleN = t => t1 => {
    const lng = t.length;

    return lng === t1.length ? (
        TupleN(
            ...Array.from(t)
            .map((x, i) => mappend(x)(t1[i]))
        )
    ) : undefined;
};

// matching :: [a] -> (a -> Int -> [a] -> Bool)
const matching = pat => {
    // A sequence-matching function for findIndices etc
    // findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
    // -> [1, 4]
    const
        lng = pat.length,
        bln = 0 < lng,
        h = bln ? pat[0] : undefined;

    return x => i => src =>
        bln && h === x && eq(pat)(
            src.slice(i, lng + i)
        );
};

// max :: Ord a => a -> a -> a
const max = a =>
    // b if its greater than a,
    // otherwise a.
    b => gt(b)(a) ? (
        b
    ) : a;

// maxBound :: a -> a
const maxBound = x => {
    const e = x.enum;

    return Boolean(e) ? (
        e[e[x.max]]
    ) : {
        "number": Number.MAX_SAFE_INTEGER,
        "string": String.fromCodePoint(0x10FFFF),
        "boolean": true
    }[typeof x];
};

// maximum :: Ord a => [a] -> a
const maximum = xs => (
    // The largest value in a non-empty list.
    ys => 0 < ys.length ? (
        ys.slice(1).reduce(
            (a, y) => y > a ? (
                y
            ) : a, ys[0]
        )
    ) : undefined
)(list(xs));

// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = f =>
    xs => {
        const ys = list(xs);

        return 0 < ys.length ? (
            ys.slice(1).reduce(
                (a, y) => 0 < f(y)(a) ? (
                    y
                ) : a,
                ys[0]
            )
        ) : undefined;
    };

// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = f =>
    xs => (
        ys => ys.length > 0 ? (
            Just(ys.slice(1)
                .reduce((a, y) => 0 < f(a)(y) ? (
                    a
                ) : y, ys[0]))
        ) : Nothing()
    )(list(xs));

// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1)
            .reduce((a, y) => (y > a ? y : a), ys[0]))
    ) : Nothing()
)(list(xs));

// maximumOn :: (Ord b) => (a -> b) -> [a] -> a
const maximumOn = f =>
    // The item in xs for which f
    // returns the highest value.
    xs => 0 < xs.length ? (
        xs.slice(1).reduce(
            (tpl, x) => {
                const v = f(x);

                return v > tpl[1] ? [
                    x, v
                ] : tpl;
            },
            (h => [h, f(h)])(xs[0])
        )[0]
    ) : undefined;

// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = v =>
    // Default value (v) if m is Nothing, or f(m.Just)
    f => m => m.Nothing ? (
        v
    ) : f(m.Just);

// mconcatOrd :: [Ordering] -> Ordering
const mconcatOrd = cmps =>
    // A sort compare function derived from
    // a list of such functions, providing
    // for composition of n-ary sorts.
    0 < cmps.length ? (
        foldl(
            mappendOrd
        )(cmps[0])(cmps.slice(1))
    ) : compare;

// mean :: [Num] -> Num
const mean = xs => (
    ys => ys.reduce((a, y) => a + y, 0) / ys.length
)(list(xs));

// measuredTree :: Tree a -> 
// Tree (a, {leafSum::Int, layerSum::Int,
//           nodeSum::Int, index::Int})
const measuredTree = tree => {
    // A tree in which each node is tupled with
    // a (leafSum, layerSum, nodeSum) measure of its sub-tree,
    // where leafSum is the number of descendant leaves,
    // and layerSum is the number of descendant levels,
    // and nodeSum counts all nodes, including the root.
    // Index is a position in a zero-based top-down
    // left to right series.
    // For additional parent indices, see parentIndexedTree.
    const whni = (w, h, n, i) => ({
        leafSum: w,
        layerSum: h,
        nodeSum: n,
        index: i
    });
    let i = 0;

    return foldTree(
        x => {
            // eslint-disable-next-line no-plusplus
            const topDown = i++;

            return xs => Node(
                Tuple(x)(
                    0 < xs.length ? (() => {
                        const dct = xs.reduce(
                            (a, node) => {
                                const dimns = node.root[1];

                                return whni(
                                    a.leafSum + dimns.leafSum,
                                    max(a.layerSum)(
                                        dimns.layerSum
                                    ),
                                    a.nodeSum + dimns.nodeSum,
                                    topDown
                                );
                            }, whni(0, 0, 0, topDown)
                        );

                        return whni(
                            dct.leafSum,
                            1 + dct.layerSum,
                            1 + dct.nodeSum,
                            topDown
                        );
                    })() : whni(1, 0, 1, topDown)
                )
            )(xs);
        }
    )(tree);
};

// member :: Key -> Dict -> Bool
const member = k =>
    // True if dict contains the key k.
    dict => k in dict;

// mempty :: a -> a
const mempty = v => {
    const t = typeName(v);

    return ({
        "List": () => [],
        "Maybe": () => Nothing(),
        "Num": () => 0,
        "String": () => "",
        "Tuple": () => Tuple(
            mempty(v[0])
        )(
            mempty(v[1])
        ),
        "Node": () => Node(mempty(root(v)))([])
    })[t]();
};

// merge :: Ord a => [a] -> [a] -> [a]
const merge = xs =>
    // An ordered list derived by merging
    // two other ordered lists.
    mergeBy(compare)(xs);

// mergeBy :: (a -> a -> Ordering) -> [a] -> [a] -> [a]
const mergeBy = f =>
    // A single list defined by the ordered
    // merging of xs and ys in terms of the
    // given comparator function.
    xs => ys => {
        const go = (as, bs) =>
            0 < bs.length ? (
                0 < as.length ? (
                    1 !== f(as[0])(bs[0]) ? (
                        [as[0]].concat(
                            go(as.slice(1), bs)
                        )
                    ) : [bs[0]].concat(
                        go(as, bs.slice(1))
                    )
                ) : bs
            ) : as;

        return [].concat(...go(xs, ys));
    };

// min :: Ord a => a -> a -> a
const min = a =>
    b => b < a ? b : a;

// minBound :: a -> a
const minBound = x => {
    const e = x.enum;

    return Boolean(e) ? (
        e[e[0]]
    ) : {
        "number": Number.MIN_SAFE_INTEGER,
        "string": String.fromCodePoint(0),
        "boolean": false
    }[typeof x];
};

// minimum :: Ord a => [a] -> a
const minimum = xs => (
    // The least value of xs.
    ys => 0 < ys.length ? (
        ys.slice(1)
        .reduce((a, y) => y < a ? y : a, ys[0])
    ) : null
)(list(xs));

// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f =>
    xs => {
        const ys = list(xs);

        return 0 < ys.length ? (
            ys.slice(1).reduce(
                (a, y) => 0 > f(y)(a) ? (
                    y
                ) : a,
                ys[0]
            )
        ) : undefined;
    };

// minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const minimumByMay = f =>
    xs => list(xs).reduce((a, x) =>
        a.Nothing ? Just(x) : (
            f(x)(a.Just) < 0 ? (
                Just(x)
            ) : a
        ), Nothing());

// minimumMay :: [a] -> Maybe a
const minimumMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1)
            .reduce((a, y) => y < a ? y : a, ys[0])
        )
    ) : Nothing()
)(list(xs));

// minimumOn :: (Ord b) => (a -> b) -> [a] -> a
const minimumOn = f =>
    // The item in xs for which f
    // returns the highest value.
    xs => 0 < xs.length ? (
        xs.slice(1).reduce(
            (tpl, x) => {
                const v = f(x);

                return v < tpl[1] ? [
                    x, v
                ] : tpl;
            },
            (h => [h, f(h)])(xs[0])
        )[0]
    ) : undefined;

// mod :: Int -> Int -> Int
const mod = n =>
    // Inherits the sign of the *divisor* for non zero
    // results. Compare with `rem`, which inherits
    // the sign of the *dividend*.
    d => (n % d) + (
        signum(n) === signum(-d) ? (
            d
        ) : 0
    );

// mul (*) :: Num a => a -> a -> a
const mul = a =>
    b => a * b;

// ne :: a -> a -> Bool
const ne = a =>
    b => a !== b;

// negate :: Num -> Num
const negate = n =>
    -n;

// nest :: Tree a -> [a]
const nest = tree => {
    // Allowing for lazy (on-demand) evaluation.
    // If the nest turns out to be a function –
    // rather than a list – that function is applied
    // here to the root, and returns a list.
    const xs = tree.nest;

    return "function" !== typeof xs ? (
        xs
    ) : xs(root(tree));
};

// not :: Bool -> Bool
const not = b =>
    !b;

// notElem :: Eq a => a -> [a] -> Bool
const notElem = x =>
    xs => !xs.includes(x);

// nub :: [a] -> [a]
const nub = xs =>
    [...new Set(xs)]

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = p =>
    // A sublist of xs from which all duplicates,
    //  (as defined by the equality predicate p)
    //   are excluded.
    xs => xs.reduce(
        (acc, x) => acc.some(p(x)) ? (
            acc
        ) : [x].concat(acc),
        []
    );

// odd :: Int -> Bool
const odd = n =>
    !even(n);

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = f =>
    // e.g. groupBy(on(eq)(length))
    g => a => b => f(g(a))(g(b));

// or :: [Bool] -> Bool
const or = xs =>
    xs.some(Boolean);

// ord :: Char -> Int
const ord = c =>
    // Unicode ordinal value of the character.
    c.codePointAt(0);

// ordering :: () -> Ordering
const
    ordering = enumFromPairs(
        "Ordering",
        [["LT", -1], ["EQ", 0], ["GT", 1]]
    ),
    LT = ordering.LT,
    EQ = ordering.EQ,
    GT = ordering.GT;

// outdented :: String -> String
const outdented = s => {
    // All lines in the string outdented by the same amount
    // (just enough to ensure that the least indented lines
    //  have no remaining indent)
    // All relative indents are left unchanged
    const
        // Leading space characters.
        rgx = /^ */u,
        xs = lines(s),
        n = length(minimumBy(comparing(length))(
            xs.map(txt => rgx.exec(txt)[0])
        ));

    return unlines(map(drop(n))(xs));
};

// parentIndexedTree :: Tree (a, {...index :: Int}) ->
// Tree (a, {...index :: Int, parent :: Maybe Int})
const parentIndexedTree = tree => {
    // A tree additionally decorated with parent indices,
    // derived from a measured tree already decorated with
    // node indices. (See measuredTree).
    const go = mb => node => {
        const
            x = root(node),
            measures = x[1];

        return Node(
            Tuple(x[0])(
                Object.assign(measures, {
                    parent: mb
                })
            )
        )(nest(node).map(go(Just(measures.index))));
    };

    return go(Nothing())(tree);
};

// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p =>
    // A tuple of two lists - those elements in
    // xs which match p, and those which do not.
    xs => list(xs).reduce(
        (a, x) => p(x) ? (
            Tuple(a[0].concat(x))(a[1])
        ) : Tuple(a[0])(a[1].concat(x)),
        Tuple([])([])
    );

// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce(
        (a, x) => undefined !== x.Left ? (
            Tuple(a[0].concat(x.Left))(a[1])
        ) : Tuple(a[0])(a[1].concat(x.Right)),
        Tuple([])([])
    );

// permutations :: [a] -> [[a]]
const permutations = xs => (
    ys => ys.reduceRight(
        (a, y) => a.flatMap(
            zs => Array.from({
                length: 1 + zs.length
            }, (_, i) => i)
            .map(n => zs.slice(0, n)
                .concat(y)
                .concat(zs.slice(n))
            )
        ), [[]]
    )
)(list(xs));

// pi :: Float
const pi = Math.PI;

// plural :: String -> Int -> String
const plural = k =>
    // Singular or plural EN inflection
    // of a given word.
    n => 1 !== n ? (
        `${k}s`
    ) : k;

// plus :: Num -> Num -> Num
const plus = a =>
    // The sum of a and b.
    b => a + b;

// postorder :: Tree a -> [a]
const postorder = t => {
    // List of root elements of tree flattened
    // bottom-up into a postorder list.
    const go = (xs, x) =>
        nest(x).reduce(go, xs)
        .concat(root(x));

    return go([], t);
};

// pred :: Enum a => a -> a
const pred = x => {
    const t = typeof x;

    return "number" !== t ? (() => {
        const [i, mn] = [x, minBound(x)].map(fromEnum);

        return i > mn ? (
            toEnum(x)(i - 1)
        ) : Error("succ :: enum out of range.");
    })() : x > Number.MIN_SAFE_INTEGER ? (
        x - 1
    ) : Error("succ :: Num out of range.");
};

// predMay :: Enum a => a -> Maybe a
const predMay = x => {
    const t = typeof x;

    return "number" !== t ? (() => {
        const [i, mn] = [x, minBound(x)].map(fromEnum);

        return i > mn ? (
            Just(toEnum(x)(i - 1))
        ) : Nothing();
    })() : x > Number.MIN_SAFE_INTEGER ? (
        Just(x - 1)
    ) : Nothing();
};

// print :: a -> IO ()
const print = x => {
    const s = show(x);

    return (
        typeof document !== "undefined" ? (
            document.writeln(s)
        ) : typeof draft !== "undefined" ? (
            editor.setText(
                `${editor.getText()}\n${s}`
            )
        ) : (
            // eslint-disable-next-line no-console
            console.log(s),
            s
        )
    );
};

// product :: [Num] -> Num
const product = xs =>
    list(xs).reduce((a, x) => a * x, 1);

// properFracRatio :: Ratio -> (Int, Ratio)
const properFracRatio = nd => {
    const [q, r] = Array.from(quotRem(nd.n, nd.d));

    return Tuple(q, ratio(r, nd.d));
};

// properFraction :: Real -> (Int, Real)
const properFraction = n => {
    const i = Math.floor(n) + (n < 0 ? 1 : 0);

    return Tuple(i)(n - i);
};

// pureLR :: a -> Either e a
const pureLR = x =>
    // The value x lifted into the Either monad.
    Right(x);

// pureList :: a -> [a]
const pureList = x =>
    [x];

// pureMay :: a -> Maybe a
const pureMay = x =>
    Just(x);

// pureT :: String -> f a -> (a -> f a)
const pureT = t =>
    // Given a type name string, returns a
    // specialised "pure", where
    // "pure" lifts a value into a particular functor.
    ({
        "Either": () => pureLR,
        "(a -> b)": () => constant,
        "Maybe": () => pureMay,
        "Node": () => pureTree,
        "Tuple": () => pureTuple,
        "List": () => pureList
    })[t || "List"]();

// pureTree :: a -> Tree a
const pureTree = x =>
    Node(x)([]);

// pureTuple :: a -> (a, a)
const pureTuple = x =>
    Tuple("")(x);

// quickSort :: (Ord a) => [a] -> [a]
const quickSort = xs =>
    // Included only for comparison with AppleScript
    // sort and sortBy are faster and more flexible
    xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(x => x <= h)(
                xs.slice(1)
            );

        return [].concat(...[
            quickSort(lessMore[0]),
            h,
            quickSort(lessMore[1])
        ]);
    })() : xs;

// quickSortBy :: (a -> a -> Ordering) -> [a] -> [a]
const quickSortBy = cmp => {
    // Included only for comparison with AppleScript.
    // sort and sortBy are faster and more flexible.
    const go = xs => xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(
                x => 1 !== cmp(x)(h)
            )(xs.slice(1));

        return [].concat(...[
            go(lessMore[0]),
            h,
            go(lessMore[1])
        ]);
    })() : xs;

    return go;
};

// quot :: Integral a => a -> a -> a
const quot = n =>
    m => [n, m].some(isBigInt) ? (
        BigInt(n) / BigInt(m)
    ) : Math.trunc(n / m);

// quotRem :: Integral a => a -> a -> (a, a)
const quotRem = m =>
    // The quotient, tupled with the remainder.
    n => Tuple(
        quot(m)(n)
    )(rem(m)(n));

// quoted :: Char -> String -> String
const quoted = c =>
    // A string flanked on both sides
    // by a specified quote character.
    s => c + s + c;

// radians :: Float x => Degrees x -> Radians x
const radians = x =>
    (Math.PI / 180) * x;

// raise :: Num -> Int -> Num
const raise = x =>
    // X to the power of n.
    n => x ** n;

// randomRInt :: Int -> Int -> IO () -> Int
const randomRInt = low =>
    // The return value of randomRInt is itself
    // a function, which, whenever evaluated,
    // yields a a new pseudo-random integer
    // in the range [low..high].
    high => () => low + Math.floor(
        Math.random() * (1 + (high - low))
    );

// range :: Ix a => (a, a) -> [a]
const range = (...args) => {
    // The list of values in the subrange defined by a bounding pair.
    // range([0, 2]) -> [0,1,2]
    // range([[0,0], [2,2]])
    //  -> [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
    // range([[0,0,0],[1,1,1]])
    //  -> [[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]]
    const
        ab = 1 !== args.length ? (
            args
        ) : args[0],
        [as, bs] = [ab[0], ab[1]].map(
            x => Array.isArray(x) ? (
                x
            ) : (undefined !== x.type) &&
            (x.type.startsWith("Tuple")) ? (
                listFromTuple(x)
            ) : [x]
        ),
        an = as.length;

    return (an === bs.length) ? (
        1 < an ? (
            traverseList(x => x)(
                as.map((_, i) => enumFromTo(as[i])(bs[i]))
            )
        ) : enumFromTo(as[0])(bs[0])
    ) : [];
};

// ratioDiv :: Rational -> Rational -> Rational
const ratioDiv = n1 => n2 => {
    const [r1, r2] = [n1, n2].map(rational);

    return Ratio(r1.n * r2.d)(
        r1.d * r2.n
    );
};

// ratioMinus :: Rational -> Rational -> Rational
const ratioMinus = n1 => n2 => {
    const [r1, r2] = [n1, n2].map(rational);
    const d = lcm(r1.d)(r2.d);

    return ratio((r1.n * (d / r1.d)) - (r2.n * (d / r2.d)))(
        d
    );
};

// ratioMult :: Rational -> Rational -> Rational
const ratioMult = n1 => n2 => {
    const [r1, r2] = map(rational)(
        [n1, n2]
    );

    return ratio(r1.n * r2.n)(
        r1.d * r2.d
    );
};

// ratioPlus :: Rational -> Rational -> Rational
const ratioPlus = n1 =>
    n2 => {
        const [r1, r2] = [n1, n2].map(rational);
        const d = lcm(r1.d)(r2.d);

        return ratio(
            (r1.n * (d / r1.d)) + (
                r2.n * (d / r2.d)
            )
        )(d);
    };

// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x) ? x : Number.isInteger(x) ? (
        ratio(x)(1)
    ) : approxRatio(undefined)(x);

// read :: Read a => String -> a
const read = JSON.parse;

// readHex :: String -> Int
const readHex = s =>
    // Integer value of hexadecimal expression.
    parseInt(s, 16);

// readLR :: Read a => String -> Either String a
const readLR = s => {
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(e.message);
    }
};

// recip :: Num -> Num
const recip = n =>
    0 !== n ? (1 / n) : undefined;

// recipMay :: Num -> Maybe Num
const recipMay = n =>
    0 === n ? (
        Nothing()
    ) : Just(1 / n);

// regexMatches :: Regex String -> String -> [[String]]
const regexMatches = rgx =>
    // All matches for the given regular expression
    // in the supplied string s.
    s => [...s.matchAll(new RegExp(rgx, "gu"))];

// rem :: Integral a => a -> a -> a
const rem = n =>
    // Inherits the sign of the *dividend* for non-zero
    // results. Compare with `mod`, which inherits
    // the sign of the *divisor*.
    m => [n, m].some(isBigInt) ? (
        BigInt(n) % BigInt(m)
    ) : n % m;

// repeat :: a -> Generator [a]
const repeat = function* (x) {
    while (true) {
        yield x;
    }
};

// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = needle =>
    strNew => strHaystack => strHaystack.replace(
        "string" !== typeof needle ? (
            needle
        ) : new RegExp(needle, "gu"),
        strNew
    );

// replicate :: Int -> a -> [a]
const replicate = n =>
    // A list of n copies of x.
    x => Array.from({
        length: n
    }, () => x);

// replicateM :: Int -> [a] -> [[a]]
const replicateM = n =>
    // Instance for lists (arrays) only here.
    xs => {
        const go = x => 0 >= x ? [
            []
        ] : liftA2List(cons)(
            list(xs)
        )(go(x - 1));

        return go(n);
    };

// replicateString :: Int -> String -> String
const replicateString = n =>
    s => s.repeat(n);

// reverse :: [a] -> [a]
const reverse = xs =>
    "string" === typeof xs ? (
        xs.split("").reverse()
        .join("")
    ) : xs.slice(0).reverse();

// rights :: [Either a b] -> [b]
const rights = xs =>
    xs.flatMap(
        x => ("Either" === x.type) && (
            undefined !== x.Right
        ) ? [x.Right] : []
    );

// root :: Tree a -> a
const root = tree =>
    // The value attached to a tree node.
    tree.root;

// rotate :: Int -> [a] -> [a]
const rotate = n => xs => {
    // Rightward rotation of xs by n positions.
    const lng = xs.length;

    return Infinity > lng ? (
        take(lng)(
            drop(lng - n)(
                cycle(xs)
            )
        )
    ) : undefined;
};

// round :: a -> Int
const round = x => {
    const
        nr = properFraction(x),
        [n, r] = [nr[0], nr[1]],
        m = n + (r < 0 ? -1 : 1),
        sign = signum(abs(r) - 0.5);

    return (-1 === sign) ? n : (
        0 === sign ? (even(n) ? n : m) : (
            1 === sign ? m : undefined
        )
    );
};

// roundTo :: Int -> Float -> Float
const roundTo = n => x => {
    const d = 10 ** n;

    return Math.round(x * d) / d;
};

// runAction :: Action a -> a
const runAction = act =>
    // Evaluation of an action.
    act.act(act.arg);

// safeMay :: (a -> Bool) -> (a -> b) -> Maybe b
const safeMay = p => f => x =>
    p(x) ? Just(f(x)) : Nothing();

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f => startValue => xs =>
    // The series of interim values arising
    // from a catamorphism. Parallel to foldl.
    xs.constructor.constructor.name !== (
        "GeneratorFunction"
    ) ? (
        xs.reduce((a, x) => {
            const v = f(a[0])(x);

            return [v, a[1].concat(v)];
        }, [startValue, [startValue]])[1]
    ) : scanlGen(f)(startValue)(xs);

// scanl1 :: (a -> a -> a) -> [a] -> [a]
const scanl1 = f =>
    // scanl1 is a variant of scanl that has no
    // starting value argument.
    xs => xs.length > 0 ? (
        scanl(f)(
            xs[0]
        )(xs.slice(1))
    ) : [];

// scanlGen :: (b -> a -> b) -> b -> Gen [a] -> [b]
const scanlGen = f =>
    // The series of interim values arising
    // from a catamorphism over an infinite list.
    startValue => function* (gen) {
        let
            a = startValue,
            x = gen.next();

        yield a;
        while (!x.done) {
            a = f(a)(x.value);
            yield a;
            x = gen.next();
        }
    };

// scanr :: (a -> b -> b) -> b -> [a] -> [b]
const scanr = f =>
    startValue => xs => list(xs).reduceRight(
        (a, x) => {
            const v = f(x)(a[0]);

            return Tuple(v)([v].concat(a[1]));
        }, Tuple(startValue)([startValue])
    )[1];

// scanr1 :: (a -> a -> a) -> [a] -> [a]
const scanr1 = f =>
    // scanr1 is a variant of scanr that has no
    // seed-value argument, and assumes that
    // xs is not empty.
    xs => xs.length > 0 ? (
        scanr(f)(
            xs.slice(-1)[0]
        )(xs.slice(0, -1))
    ) : [];

// second :: (a -> b) -> ((c, a) -> (c, b))
const second = f =>
    // A function over a simple value lifted
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    xy => {
        const tpl = Tuple(xy[0])(f(xy[1]));

        return Array.isArray(xy) ? (
            Array.from(tpl)
        ) : tpl;
    };

// sequenceA :: (Applicative f, Traversable t) => t (f a) -> f (t a)
const sequenceA = tfa =>
    traverse(x => x)(
        tfa
    );

// setFromList :: Ord a => [a] -> Set a
const setFromList = xs =>
    new Set(xs);

// setInsert :: Ord a => a -> Set a -> Set a
const setInsert = x => oSet =>
    oSet.add(x);

// setMember :: Ord a => a -> Set a -> Bool
const setMember = x => oSet =>
    oSet.has(x);

// setSize :: Set a -> Int
const setSize = oSet =>
    oSet.size;

// shift :: Int -> [a] -> [a]
const shift = n => xs => {
    const lng = length(xs);

    return Infinity > lng ? (
        take(lng)(
            drop(n)(cycle(xs))
        )
    ) : (drop(n)(xs), xs);
};

// show :: a -> String
// show :: a -> Int -> Indented String
const show = x => {
    const
        instances = {
            "(a -> b)": () => showFn,
            "Bool": () => str,
            "Bottom": () => showUndefined,
            "Date": () => a => a,
            "Dict": () => a => a,
            "Either": () => showLR,
            "List": () => showList,
            "Maybe": () => showMaybe,
            "Node": () => a => a,
            "Num": () => str,
            "Ratio": () => showRatio,
            "String": () => str,
            "Tuple": () => showTuple
        },
        str = y => y.toString(),
        t = typeName(x);

    const instance = instances[
        (/^Tuple/u).test(t) ? (
            "Tuple"
        ) : t
    ];

    return Boolean(instance) ? (
        JSON.stringify(
            x,
            (_, v) => instance()(v)
        )
    ) : `No Show instance has been defined for ${t}.`;
};

// showBinary :: Int -> String
const showBinary = n => {
    const
        binaryChar = m => 0 !== m ? (
            "1"
        ) : "0";

    return showIntAtBase(2)(
        binaryChar
    )(n)("");
};

// showDate :: Date -> String
const showDate = dte =>
    dte.toJSON;

// showDict :: Dict -> String
const showDict = show;

// showFn :: (a -> b) -> String
const showFn = f =>
    `λ${f}`;

// showForest :: [Tree a] -> String
const showForest = xs =>
    unlines(xs.map(x => drawTree2(false)(true)(
        fmapTree(show)(
            x
        )
    )));

// showHex :: Int -> String
const showHex = n =>
    // Hexadecimal string for a given integer.
    `0x${n.toString(16)}`;

// showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
const showIntAtBase = base =>
    toChr => n => rs => {
        const go = ([x, d], r) => {
            const r_ = toChr(d) + r;

            return 0 !== x ? (
                go(Array.from(quotRem(n)(base)), r_)
            ) : r_;
        };

        return 1 >= base ? (
            "error: showIntAtBase applied to unsupported base"
        ) : 0 > n ? (
            "error: showIntAtBase applied to negative number"
        ) : go(Array.from(quotRem(n)(base)), rs);
    };

// showJSON :: a -> String
const showJSON = x =>
    // Indented JSON representation of the value x.
    JSON.stringify(x, null, 2);

// showLR :: Either a b -> String
const showLR = lr => {
    const k = undefined !== lr.Left ? (
        "Left"
    ) : "Right";

    return `${k}(${unQuoted(show(lr[k]))})`;
};

// showList :: [a] -> String
const showList = xs => {
    const
        s = xs.map(show)
        .join(", ")
        .replace(/[\\"]/gu, "");

    return `[${s}]`;
};

// showLog :: a -> IO ()
const showLog = (...args) =>
    // eslint-disable-next-line no-console
    console.log(
        args
        .map(JSON.stringify)
        .join(" -> ")
    );

// showMaybe :: Maybe a -> String
const showMaybe = mb =>
    mb.Nothing ? (
        "Nothing"
    ) : `Just(${unQuoted(show(mb.Just))})`;

// showMenuLR :: Bool -> String -> String ->
// [String] -> String -> Either String [String]
const showMenuLR = blnMult =>
    // An optionally multi-choice menu, with
    // a given title and prompt string.
    // Listing the strings in xs, with
    // the string `selected` pre-selected
    // if found in xs.
    menuTitle => prompt => selected => xs =>
    0 < xs.length ? (() => {
        const sa = Object.assign(
            Application("System Events"), {
                includeStandardAdditions: true
            });

        sa.activate();

        const v = sa.chooseFromList(xs, {
            withTitle: menuTitle,
            withPrompt: prompt,
            defaultItems: xs.includes(selected) ? (
                [selected]
            ) : [xs[0]],
            okButtonName: "OK",
            cancelButtonName: "Cancel",
            multipleSelectionsAllowed: blnMult,
            emptySelectionAllowed: false
        });

        return Array.isArray(v) ? (
            Right(v)
        ) : Left(`User cancelled ${title} menu.`);
    })() : Left(`${title}: No items to choose from.`);

// showOrdering :: Ordering -> String
const showOrdering = e =>
    0 < e.value ? (
        "GT"
    ) : 0 > e.value ? (
        "LT"
    ) : "EQ";

// showOutline :: Tree String -> String
const showOutline = tree => {
    const go = indent => x =>
        unlines(
            [indent + x.root].concat(
                x.nest.flatMap(go(`    ${indent}`))
            )
        );

    return go("")(tree);
};

// showPrecision :: Int -> Float -> String
const showPrecision = n => x => {
    // A string showing a floating point number
    // at a given degree of precision.
    const d = 10 ** n;

    return str(Math.round(d * x) / d);
};

// showRatio :: Ratio -> String
const showRatio = r =>
    "Ratio" !== r.type ? (
        r.toString()
    ) : r.n.toString() + (
        1 !== r.d ? (
            `/${r.d}`
        ) : ""
    );

// showSet :: Set a -> String
const showSet = oSet => {
    const
        s = Array.from(oSet)
        .map(x => x.toString())
        .join(",");

    return `{${s}}`;
};

// showTree :: Tree a -> String
const showTree = x =>
    drawTree(
        fmapTree(show)(x)
    );

// showTuple :: Tuple -> String
const showTuple = tpl => {
    const
        s = enumFromTo(0)(tpl.length - 1)
        .map(x => unQuoted(show(tpl[x])))
        .join(",");

    return `(${s})`;
};

// showUndefined :: () -> String
const showUndefined = () =>
    "(⊥)";

// signum :: Num -> Num
const signum = n =>
    // | Sign of a number.
    n.constructor(
        0 > n ? (
            -1
        ) : (
            0 < n ? 1 : 0
        )
    );

// sj :: a -> String
const sj = (...args) =>
    // Abbreviation of showJSON for quick testing.
    // Default indent size is two, which can be
    // overriden by any integer supplied as the
    // first argument of more than one.
    JSON.stringify.apply(
        null,
        1 < args.length && !isNaN(args[0]) ? [
            args[1], null, args[0]
        ] : [args[0], null, 2]
    );

// snd :: (a, b) -> b
const snd = tpl =>
    // Second member of a pair.
    tpl[1];

// snoc :: [a] -> a -> [a]
const snoc = xs =>
    // The mirror image of cons
    // A new copy of the given list,
    // with an atom appended at the end.
    x => list(xs).concat(x);

// sort :: Ord a => [a] -> [a]
const sort = xs =>
    // An A-Z sorted copy of xs.
    list(xs).slice()
    .sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));

// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f =>
    xs => list(xs).slice()
    .sort((a, b) => f(a)(b));

// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // Equivalent to sortBy(comparing(f)), but with f(x)
    // evaluated only once for each x in xs.
    // ('Schwartzian' decorate-sort-undecorate).
    xs => xs.map(
        x => Tuple(f(x))(x)
    )
    .sort(uncurry(comparing(fst)))
    .map(snd);

// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p =>
    // Longest prefix of xs consisting of elements which
    // all satisfy p, tupled with the remainder of xs.
    xs => {
        const i = xs.findIndex(x => !p(x));

        return -1 !== i ? (
            Tuple(xs.slice(0, i))(
                xs.slice(i)
            )
        ) : Tuple(xs)([]);
    };

// splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
const splitArrow = f =>
    // The functions f and g combined in a single function
    // from a tuple (x, y) to a tuple of (f(x), g(y))
    // (see bimap)
    g => tpl => Tuple(f(tpl[0]))(
        g(tpl[1])
    );

// splitAt :: Int -> [a] -> ([a], [a])
const splitAt = n =>
    xs => Tuple(xs.slice(0, n))(
        xs.slice(n)
    );

// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) ->
// String -> [String]
const splitBy = p =>
    // Splitting not on a delimiter, but wherever the
    // relationship between consecutive terms matches
    // a binary predicate.
    xs => (xs.length < 2) ? [xs] : (() => {
        const
            bln = "string" === typeof xs,
            ys = bln ? xs.split("") : xs,
            h = ys[0],
            parts = ys.slice(1)
            .reduce(([acc, active, prev], x) =>
                p(prev)(x) ? (
                    [acc.concat([active]), [x], x]
                ) : [acc, active.concat(x), x], [
                    [],
                    [h],
                    h
                ]);

        return (bln ? (
            ps => ps.map(cs => "".concat(...cs))
        ) : x => x)(parts[0].concat([parts[1]]));
    })();

// splitExtension :: FilePath -> (String, String)
const splitExtension = fp => {
    // A tuple of the basename and the extension,
    // in which the latter includes the "."
    const
        xs = fp.split("."),
        lng = xs.length;

    return 1 < lng ? (
        Tuple(
            xs.slice(0, -1).join(".")
        )(
            `.${xs[lng - 1]}`
        )
    ) : Tuple(fp)("");
};

// splitFileName :: FilePath -> (String, String)
const splitFileName = strPath =>
    // Tuple of directory and file name, derived from file path.
    // Inverse of combine.
    ("" !== strPath) ? (
        ("/" !== strPath[strPath.length - 1]) ? (() => {
            const
                xs = strPath.split("/"),
                stem = xs.slice(0, -1);

            return stem.length > 0 ? (
                Tuple(
                    `${stem.join("/")}/`
                )(xs.slice(-1)[0])
            ) : Tuple("./")(xs.slice(-1)[0]);
        })() : Tuple(strPath)("")
    ) : Tuple("./")("");

// splitOn :: [a] -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = pat => src =>
    // A list of the strings delimited by
    // instances of a given pattern in s.
    ("string" === typeof src) ? (
        src.split(pat)
    ) : (() => {
        const
            lng = pat.length,
            tpl = findIndices(matching(pat))(src).reduce(
                (a, i) => Tuple(
                    fst(a).concat([src.slice(snd(a), i)])
                )(lng + i),
                Tuple([])(0)
            );

        return fst(tpl).concat([src.slice(snd(tpl))]);
    })();

// splitRegex :: Regex -> String -> [String]
const splitRegex = needle =>
    haystack => haystack.split(needle);

// sqrt :: Num -> Num
const sqrt = n =>
    (0 <= n) ? Math.sqrt(n) : undefined;

// sqrtLR :: Num -> Either String Num
const sqrtLR = n =>
    0 > n ? (
        Left(`Square root of negative number: ${n}`)
    ) : Right(Math.sqrt(n));

// sqrtMay :: Num -> Maybe Num
const sqrtMay = n =>
    0 > n ? (
        Nothing()
    ) : Just(Math.sqrt(n));

// str :: a -> String
const str = x =>
    Array.isArray(x) && x.every(
        v => ("string" === typeof v) && (1 === v.length)
    ) ? (
        // [Char] -> String
        x.join("")
    ) : null === x ? (
        "null"
    ) : x.toString();

// strip :: String -> String
const strip = s =>
    s.trim();

// stripEnd :: String -> String
const stripEnd = s =>
    s.trimEnd();

// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
const stripPrefix = pfx =>
    s => {
        const
            blnString = "string" === typeof pfx,
            [vs, ws] = blnString ? (
                [pfx.split(""), s.split("")]
            ) : [pfx, s];

        const
            sp_ = (xs, ys) => 0 === xs.length ? (
                Just(blnString ? ys.join("") : ys)
            ) : (0 === ys.length || xs[0] !== ys[0]) ? (
                Nothing()
            ) : sp_(xs.slice(1), ys.slice(1));

        return sp_(vs, ws);
    };

// stripStart :: String -> String
const stripStart = s =>
    s.trimStart();

// subTreeAtPath :: Tree String -> [String] -> Maybe Tree String
const subTreeAtPath = tree => path => {
    const go = (subNest, xs) =>
        0 < nest.length && 0 < xs.length ? (() => {
            const h = xs[0];

            return bindMay(find(t => h === t.root, subNest))(
                t => 1 < xs.length ? (
                    go(t.nest, xs.slice(1))
                ) : Just(t)
            );
        })() : Nothing();

    return go([tree], path);
};

// subsequences :: [a] -> [[a]]
// subsequences :: String -> [String]
const subsequences = qs => {
    // subsequences([1,2,3]) -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
    // subsequences('abc') -> ["","a","b","ab","c","ac","bc","abc"]
    const
        // nonEmptySubsequences :: [a] -> [[a]]
        nonEmptySubsequences = xxs => {
            if (xxs.length < 1) {
                return [];
            }
            const [x, xs] = [xxs[0], xxs.slice(1)];
            const f = (r, ys) => cons(ys)(cons(cons(x)(ys))(r));

            return cons([x])(nonEmptySubsequences(xs)
                .reduceRight(f, []));
        };

    return ("string" === typeof qs) ? (
        cons("")(nonEmptySubsequences(qs.split(""))
            .map(q => "".concat(...q)))
    ) : cons([])(nonEmptySubsequences(qs));
};

// subsets :: [a] -> [[a]]
const subsets = xs => {
    const go = ys =>
        0 < ys.length ? (() => {
            const
                h = ys[0],
                zs = go(ys.slice(1));

            return zs.concat(
                zs.map(z => [h].concat(z))
            );
        })() : [
            []
        ];

    return go(xs);
};

// subtract :: Num -> Num -> Num
const subtract = x =>
    y => y - x;

// succ :: Enum a => a -> a
const succ = x => {
    const t = typeof x;

    return "number" !== t ? (
        "bigint" !== t ? (
            (() => {
                const [i, mx] = [x, maxBound(x)].map(fromEnum);

                return i < mx ? (
                    toEnum(x)(1 + i)
                ) : Error("succ :: enum out of range.");
            })()
        ) : BigInt(1) + x
    ) : x < Number.MAX_SAFE_INTEGER ? (
        1 + x
    ) : Error("succ :: Num out of range.");
};

// succMay :: Enum a => a -> Maybe a
const succMay = x => {
    const t = typeof x;

    return "number" !== t ? (() => {
        const [i, mx] = [x, maxBound(x)].map(fromEnum);

        return i < mx ? (
            Just(toEnum(x)(1 + i))
        ) : Nothing();
    })() : x < Number.MAX_SAFE_INTEGER ? (
        Just(1 + x)
    ) : Nothing();
};

// sum :: [Num] -> Num
const sum = xs =>
    // The numeric sum of all values in xs.
    xs.reduce((a, x) => a + x, 0);

// swap :: (a, b) -> (b, a)
const swap = ab =>
    // The pair ab with its order reversed.
    Tuple(ab[1])(
        ab[0]
    );

// tail :: [a] -> [a]
const tail = xs =>
    // A new list consisting of all
    // items of xs except the first.
    "GeneratorFunction" !== xs.constructor
    .constructor.name ? (
        (ys => 0 < ys.length ? ys.slice(1) : [])(
            list(xs)
        )
    ) : (take(1)(xs), xs);

// tailMay :: [a] -> Maybe [a]
const tailMay = xs => (
    ys => 0 < ys.length ? (
        Just(ys.slice(1))
    ) : Nothing()
)(list(xs));

// tails :: [a] -> [[a]]
const tails = xs => (
    es => es.map((_, i) => es.slice(i))
    .concat([
        []
    ])
)(list(xs));

// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = n =>
    // The first n elements of a list,
    // string of characters, or stream.
    xs => "GeneratorFunction" !== xs
    .constructor.constructor.name ? (
        xs.slice(0, n)
    ) : [].concat(...Array.from({
        length: n
    }, () => {
        const x = xs.next();

        return x.done ? [] : [x.value];
    }));

// takeAround :: (a -> Bool) -> [a] -> [a]
const takeAround = p => xs => {
    const ys = takeWhile(p)(xs);

    return ys.length < xs.length ? (
        ys.concat(takeWhileR(p)(xs))
    ) : ys;
};

// takeBaseName :: FilePath -> String
const takeBaseName = fp =>
    ("" !== fp) ? (
        ("/" !== fp[fp.length - 1]) ? (() => {
            const fn = fp.split("/").slice(-1)[0];

            return fn.includes(".") ? (
                fn.split(".").slice(0, -1)
                .join(".")
            ) : fn;
        })() : ""
    ) : "";

// takeCycle :: Int -> [a] -> [a]
const takeCycle = n =>
    // First n elements of a non-finite cycle of xs.
    xs => {
        const lng = xs.length;

        return (
            n <= xs ? (
                xs
            ) : concat(
                replicate(Math.ceil(n / lng))(
                    xs
                )
            )
        ).slice(0, n);
    };

// takeDirectory :: FilePath -> FilePath
const takeDirectory = fp =>
    "" !== fp ? (
        (xs => xs.length > 0 ? xs.join("/") : ".")(
            fp.split("/").slice(0, -1)
        )
    ) : ".";

// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = n =>
    // N Members of an infinite cycle of xs, starting from index I
    i => xs => drop(i)(
        take(n + i)(cycle(xs))
    );

// takeExtension :: FilePath -> String
const takeExtension = fp => (
    fs => {
        const fn = last(fs);

        return fn.includes(".") ? (
            `.${last(fn.split("."))}`
        ) : "";
    }
)(fp.split("/"));

// takeFileName :: FilePath -> FilePath
const takeFileName = fp =>
    "" !== fp ? (
        "/" !== fp[fp.length - 1] ? (
            fp.split("/").slice(-1)[0]
        ) : ""
    ) : "";

// takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
const takeFromThenTo = a => b => z => xs => {
    const ixs = enumFromThenTo(a)(b)(z);

    return "GeneratorFunction" !== xs.constructor
        .constructor.name ? (
            ixs.map(i => xs[i])
        ) : (() => {
            const g = zipGen(enumFrom(0))(
                take(z)(xs)
            );

            return ixs.flatMap(i => {
                const mb = index(g)(i);

                return mb.Nothing ? [] : [mb.Just];
            });
        })();
};

// takeIterate n f x == [x, f x, f (f x), ...]
// takeIterate :: Int -> (a -> a) -> a -> [a]
const takeIterate = n => f => x =>
    snd(mapAccumL(a => _ => i => {
        const v = 0 !== i ? f(a) : x;

        return [v, v];
    }, x, Array.from({
        length: n
    })));

// takeWhile :: (a -> Bool) -> [a] -> [a]
// takeWhile :: (Char -> Bool) -> String -> String
const takeWhile = p =>
    // The longest prefix of xs in which
    // every element satisfies p.
    xs => xs.constructor.constructor.name !==
    "GeneratorFunction" ? (() => {
        const n = xs.length;

        return xs.slice(
            0, 0 < n ? until(
                i => n === i || !p(xs[i])
            )(i => 1 + i)(0) : 0
        );
    })() : takeWhileGen(p)(xs);

// takeWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const takeWhileGen = p => xs => {
    const ys = [];
    let
        nxt = xs.next(),
        v = nxt.value;

    while (!nxt.done && p(v)) {
        ys.push(v);
        nxt = xs.next();
        v = nxt.value;
    }

    return ys;
};

// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p =>
    // The longest suffix of xs in which
    // all elements satisfy p.
    xs => {
        const ys = list(xs);

        return ys.slice(
            1 + until(
                i => !p(ys[i])
            )(
                i => 1 + i
            )(ys.length)
        );
    };

// taskPaperDateString :: Date -> String
const taskPaperDateString = dte => {
    const [d, t] = iso8601Local(dte).split("T");

    return [d, t.slice(0, 5)].join(" ");
};

// taskPaperDayString :: Date -> String
const taskPaperDayString = dte =>
    take(10)(
        taskPaperDateString(dte)
    );

// toEnum :: a -> Int -> a
const toEnum = e =>
    // The first argument is a sample of the type
    // allowing the function to make the right mapping
    x => ({
        "number": Number,
        "string": String.fromCodePoint,
        "boolean": Boolean,
        "object": v => e.min + v
    } [typeof e])(x);

// toLower :: String -> String
const toLower = s =>
    // Lower-case version of string.
    s.toLocaleLowerCase();

// toRatio :: Real -> Ratio
const toRatio = n =>
    approxRatio(1e-12)(n);

// toSentence :: String -> String
const toSentence = s =>
    // Sentence case - initial char capitalized
    // and rest lowercase.
    (0 < s.length) ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;

// toTitle :: String -> String
const toTitle = s =>
    0 < s.length ? (
        `${toUpper(s[0])}${toLower(s.slice(1))}`
    ) : "";

// toUpper :: String -> String
const toUpper = s =>
    s.toLocaleUpperCase();

// transpose :: [[a]] -> [[a]]
const transpose = rows => {
    // If any rows are shorter than those that follow,
    // their elements are skipped:
    // > transpose [[10,11],[20],[],[30,31,32]]
    //             == [[10,20,30],[11,31],[32]]
    const go = xss =>
        0 < xss.length ? (() => {
            const
                h = xss[0],
                t = xss.slice(1);

            return 0 < h.length ? [
                [h[0]].concat(t.reduce(
                    (a, xs) => a.concat(
                        0 < xs.length ? (
                            [xs[0]]
                        ) : []
                    ),
                    []
                ))
            ].concat(go([h.slice(1)].concat(
                t.map(xs => xs.slice(1))
            ))) : go(t);
        })() : [];

    return go(rows);
};

// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input transposed
    // into new rows.
    // Simpler version of transpose, assuming input
    // rows of even length.
    0 < rows.length ? rows[0].map(
        (x, i) => rows.flatMap(
            v => v[i]
        )
    ) : [];

// traverse :: (Applicative f" Traversable t) ->
// (a -> f b) -> t a -> f (t b)
const traverse = f =>
    // Each element of a structure mapped to an
    // a functor-wrapped value, with evaluation from
    // from left to right, and the results collected
    // in a single instance of the target functor.
    tx => ({
        "Either": () => traverseLR,
        "Maybe": () => traverseMay,
        "Node": () => traverseTree,
        "Tuple": () => traverseTuple,
        "List": () => traverseList
    })[tx.type || "List"]()(f)(tx);

// traverseLR :: Applicative f =>
// (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = f =>
    // instance of Traversable (Either a) where
    //    traverse _ (Left x) = pure (Left x)
    //    traverse f (Right y) = Right <$> f y
    lr => "Left" in lr ? (
        [lr]
    ) : fmap(Right)(
        f(lr.Right)
    );

// traverseList :: (Applicative f) => (a -> f b) ->
// [a] -> f [b]
const traverseList = f =>
    // Collected results of mapping each element
    // of a structure to an action, and evaluating
    // these actions from left to right.
    xs => (
        zs => 0 < zs.length ? (() => {
            const
                vLast = f(zs.slice(-1)[0]),
                t = typeName(vLast);

            return zs.slice(0, -1).reduceRight(
                (ys, z) => liftA2(cons)(f(z))(ys),
                liftA2(cons)(vLast)(pureT(t)([]))
            );
        })() : fType(f)([])
    )(list(xs));

// traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMay = f => mb =>
    mb.Nothing ? (
        [mb]
    ) : fmap(Just)(
        f(mb.Just)
    );

// traverseTree :: Applicative f => (a -> f b) ->
// Tree a -> f (Tree b)
const traverseTree = f => {
    // traverse f (Node x ts) =
    // liftA2 Node (f x) (traverse (traverse f) ts)
    const go = tree =>
        liftA2(Node)(f(tree.root))(
            traverseList(go)(
                tree.nest
            )
        );

    return go;
};

// traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
const traverseTuple = f => tpl =>
    fmap(Tuple(tpl[0]))(
        f(tpl[1])
    );

// treeFromDict :: String -> Dict -> Tree String
const treeFromDict = rootLabel =>
    dict => {
        const go = x =>
            "object" !== typeof x ? [] : (
                Array.isArray(x) ? (
                    x.flatMap(go)
                ) : keys(x).map(
                    k => Node(k)(
                        go(x[k])
                    )
                )
            );

        return Node(rootLabel)(
            go(dict)
        );
    };

// treeFromJSON :: JSON String -> Tree a
const treeFromJSON = json => {
    // Assumes a recursive [root, nest] JSON format,
    // in which `root` is a parseable value string, and `nest`
    // is a possibly empty list of [`root`, `nest`] pairs.
    const go = ([rootValue, subNest]) =>
        Node(rootValue)(subNest.map(go));

    return go(JSON.parse(json));
};

// treeFromNestedDict -> Dict -> Either String Tree Dict
const treeFromNestedDict = dict => {
    // A generic Tree structure from a dict
    // with keys assumed to include no more than
    // one key to a *list* value,
    // with this pattern applied recursively
    // to each child dictionary in such a list.
    const go = dct => {
        const
            kvs = Object.entries(dct),
            lists = kvs.filter(
                ([_, v]) => Array.isArray(v)
            ),
            lng = lists.length;

        return 0 < lng ? (
            1 < lng ? (() => {
                const
                    listing = bulleted("    ")(
                        unlines(lists.map(fst))
                    ),
                    msg = `Ambiguous structure :: ${lng}` + (
                        ` multiple sublists in:\n${dct.name}`
                    );

                return Left(`${msg}:\n${listing}`);
            })() : (() => {
                const [nestName, xs] = lists[0];

                return bindLR(traverseList(go)(xs))(
                    vs => Right(
                        Node(
                            Object.assign(
                                deleteKey(nestName)(
                                    dct
                                ), {
                                    "List title": nestName
                                }
                            )
                        )(vs)
                    )
                );
            })()
        ) : Right(Node(dct)([]));
    };

    return go(dict);
};

// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
    const subNest = tree.nest;

    return (0 < nest.length) ? (
        subNest.flatMap(treeLeaves)
    ) : [tree];
};

// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => {
    // A list of all nodes in the tree which match
    // a predicate p.
    // For the first match only, see findTree.
    const go = tree =>
        p(tree.root) ? (
            [tree]
        ) : tree.nest.flatMap(go);

    return go;
};

// treeMenu :: Tree String -> IO [String]
const treeMenu = tree => {
    const go = t => {
        const
            strTitle = t.root,
            subs = t.nest,
            menu = subs.map(root),
            blnMore = 0 < subs.flatMap(nest).length;

        return until(tpl => !fst(tpl) || !isNull(snd(tpl)))(
            tpl => either(
                x => Tuple(false)([])
            )(
                Tuple(true)
            )(
                bindLR(
                    showMenuLR(!blnMore)(strTitle)(menu)
                )(ks => {
                    const
                        k = ks[0],
                        msg = `${k}: not found in ${ks}`;

                    return maybe(
                        Left(msg)
                    )(Right)(
                        bindMay(
                            find(x => k === x.root)(
                                subs
                            )
                        )(
                            chosen => Just(
                                isNull(chosen.nest) ? (
                                    ks
                                ) : go(chosen)
                            )
                        )
                    );
                })
            )
        )(Tuple(true)([]))[1];
    };

    return go(tree);
};

// treeMenuBy :: (a -> String) Tree a -> IO [a]
const treeMenuBy = fNodeKey => {
    const go = tree => {
        const
            strTitle = fNodeKey(tree.root),
            subTrees = nest(tree),
            menu = subTrees.map(
                compose(fNodeKey, root)
            ).sort();

        return until(
            tpl => !fst(tpl) || !isNull(snd(tpl))
        )(
            tpl => either(
                x => Tuple(false)([])
            )(
                Tuple(true)
            )(
                bindLR(
                    showMenuLR(true)(strTitle)(menu)
                )(
                    ks => {
                        const
                            k0 = ks[0],
                            msg = `${k0}: not found in ${ks}`;

                        return maybe(
                            Left(msg)
                        )(Right)(
                            bindMay(
                                find(
                                    x => k0 === fNodeKey(
                                        x.root
                                    )
                                )(subTrees)
                            )(
                                firstChosen => Just(
                                    isNull(
                                        nest(firstChosen)
                                    ) ? (
                                        ks.map(
                                            k => find(
                                                x => k === fNodeKey(
                                                    x.root
                                                )
                                            )(subTrees).Just
                                        )
                                    ) : go(firstChosen)
                                )
                            )
                        );
                    }
                )
            )
        )(Tuple(true)([]))[1];
    };

    return go;
};

// truncate :: Num -> Int
const truncate = x =>
    "Ratio" === x.type ? (
        properFracRatio(x)[0]
    ) : properFraction(x)[0];

// tupleFromList :: [a] -> (a, a ...)
const tupleFromList = xs =>
    TupleN(...xs);

// typeName :: a -> String
const typeName = v => {
    const t = typeof v;

    return "object" === t ? (
        Array.isArray(v) ? (
            "List"
        ) : "Date" === v.constructor.name ? (
            "Date"
        ) : null !== v ? (() => {
            const ct = v.type;

            return Boolean(ct) ? (
                (/Tuple\d+/u).test(ct) ? (
                    "TupleN"
                ) : ct
            ) : "Dict";
        })() : "Bottom"
    ) : {
        "boolean": "Bool",
        "date": "Date",
        "number": "Num",
        "string": "String",
        "function": "(a -> b)"
    } [t] || "Bottom";
};

// unDigits :: [Int] -> Int
const unDigits = ds =>
    // The integer with the given digits.
    ds.reduce((a, x) => (10 * a) + x, 0);

// unQuoted :: String -> String
const unQuoted = s =>
    1 < s.length ? (
        q => s.slice(
            q !== s[0] ? 0 : 1,
            q !== s.slice(-1) ? undefined : -1
        )
    )(
        String.fromCodePoint(34)
    ) : s;

// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    // Just a tuple of the head of xs and its tail,
    // Or Nothing if xs is an empty list.
    const lng = length(xs);

    return (0 < lng) ? (
        Infinity > lng ? (
            // Finite list
            Just(Tuple(xs[0])(xs.slice(1)))
        ) : (() => {
            // Lazy generator
            const nxt = take(1)(xs);

            return 0 < nxt.length ? (
                Just(Tuple(nxt[0])(xs))
            ) : Nothing();
        })()
    ) : Nothing();
};

// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    (...args) => {
        const
            xy = Boolean(args.length % 2) ? (
                args[0]
            ) : args;

        return f(xy[0])(xy[1]);
    };

// uncurryN :: Curry a b => b -> a
const uncurryN = f =>
    // A function over a tuple of values, derived from
    // a curried function of any number of arguments.
    (...args) => (
        xs => xs.slice(1).reduce(
            (a, x) => a(x),
            f(xs[0])
        )
    )(Array.from(
        1 < args.length ? (
            args
        ) : args[0]
    ));

// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = f =>
    // A forest built from a list of seed values.
    xs => xs.map(unfoldTree(f));

// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = f =>
    // A tree unfolded in breadth-first order
    // from a seed value.
    // Given a seed value, f defines a tuple:
    // (Node root value, [seed])
    // Empty seed lists conclude recursion.
    b => uncurry(Node)(
        second(unfoldForest(f))(
            f(b)
        )
    );

// unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
const unfoldl = f => v => {
    // Dual to reduce or foldl.
    // Where these reduce a list to a summary value, unfoldl
    // builds a list from a seed value.
    // Where f returns Just(a, b), a is appended to the list,
    // and the residual b is used as the argument for the next
    // application of f.
    // Where f returns Nothing, the completed list is returned.
    // unfoldl(x => 0 !== x ? Just([x - 1, x]) : Nothing(), 10);
    // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let
        xr = [v, v],
        xs = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
        const mb = f(xr[0]);

        if (mb.Nothing) {
            return xs;
        // eslint-disable-next-line no-else-return
        } else {
            xr = mb.Just;
            xs = [xr[1]].concat(xs);
        }
    }
};

// unfoldr :: (b -> Maybe (a, b)) -> b -> Gen [a]
const unfoldr = f =>
    // A lazy (generator) list unfolded from a seed value
    // by repeated application of f to a value until no
    // residue remains. Dual to fold/reduce.
    // f returns either Nothing or Just (value, residue).
    // For a strict output list,
    // wrap with `list` or Array.from
    x => (
        function* () {
            let maybePair = f(x);

            while (!maybePair.Nothing) {
                const valueResidue = maybePair.Just;

                yield valueResidue[0];
                maybePair = f(valueResidue[1]);
            }
        }()
    );

// union :: [a] -> [a] -> [a]
const union = xs => ys =>
  unionBy(a => b => a === b)(
      list(xs)
  )(list(ys));

// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const unionBy = fnEq => xs => ys => {
    const sx = nubBy(fnEq)(xs);

    return sx.concat(
        sx.reduce(
            (a, x) => deleteBy(fnEq)(
                x
            )(a),
            nubBy(fnEq)(ys)
        )
    );
};

// unionSet :: Ord a => Set a -> Set a -> Set a
const unionSet = s => s1 =>
    Array.from(s1.values())
    .reduce(
        (a, x) => (a.add(x), a),
        new Set(s)
    );

// unlines :: [String] -> String
const unlines = xs =>
    // A single string formed by the intercalation
    // of a list of strings with the newline character.
    xs.join("\n");

// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    // Nothing if the list is empty, otherwise
    // Just the init and the last.
    (0 < xs.length) ? (
        Just(Tuple(xs.slice(0, -1))(xs.slice(-1)[0]))
    ) : Nothing();

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

// unwords :: [String] -> String
const unwords = xs =>
    // A space-separated string derived
    // from a list of words.
    xs.join(" ");

// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        (ab, xy) => Tuple(ab[0].concat(xy[0]))(
            ab[1].concat(xy[1])
        ),
        Tuple([])([])
    );

// unzip3 :: [(a,b,c)] -> ([a],[b],[c])
const unzip3 = xyzs =>
    xyzs.reduce(
        (a, x) => TupleN(...[0, 1, 2].map(
            i => a[i].concat(x[i])
        )),
        TupleN([], [], [])
    );

// unzip4 :: [(a,b,c,d)] -> ([a],[b],[c],[d])
const unzip4 = wxyzs =>
    wxyzs.reduce(
        (a, x) => TupleN(...[0, 1, 2, 3].map(
            i => a[i].concat(x[i])
        )),
        TupleN([], [], [], [])
    );

// unzipN :: [(a,b,...)] -> ([a],[b],...)
const unzipN = tpls =>
    TupleN(...tpls.reduce(
        (a, tpl) => a.map(
            (x, i) => x.concat(tpl[i])
        ),
        replicate(
            0 < tpls.length ? (
                tpls[0].length
            ) : 0, []
        )
    ));

// variance :: [Num] -> Num
const variance = xs => {
    const
        lng = xs.length,
        avg = xs.reduce((a, b) => a + b, 0) / lng;

    return xs.reduce(
        (a, b) => a + ((b - avg) ** 2),
        0
    ) / (lng - 1);
};

// words :: String -> [String]
const words = s =>
    // List of space-delimited sub-strings.
    s.split(/\s+/u);

// zip :: [a] -> [b] -> [(a, b)]
const zip = xs =>
    // The paired members of xs and ys, up to
    // the length of the shorter of the two lists.
    ys => Array.from({
        length: Math.min(xs.length, ys.length)
    }, (_, i) => Tuple(xs[i])(ys[i]));

// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = xs =>
    ys => zs => list(xs)
    .slice(0, Math.min(...[xs, ys, zs].map(length)))
    .map((x, i) => TupleN(x, ys[i], zs[i]));

// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = ws =>
    xs => ys => zs => list(ws)
    .slice(0, Math.min(...[ws, xs, ys, zs].map(length)))
    .map((w, i) => TupleN(w, xs[i], ys[i], zs[i]));

// zipGen :: Gen [a] -> Gen [b] -> Gen [(a, b)]
const zipGen = ga => gb => {
    const go = function* (ma, mb) {
        let
            a = ma,
            b = mb;

        while (!a.Nothing && !b.Nothing) {
            const
                ta = a.Just,
                tb = b.Just;

            yield Tuple(fst(ta))(
                fst(tb)
            );

            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    };

    return go(uncons(ga), uncons(gb));
};

// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const
        n = Math.min(length(xs), length(ys)),
        vs = take(n)(list(ys));

    return take(n)(list(xs))
        .map((x, i) => Tuple(x)(vs[i]));
};

// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
const zipN = (...argv) => {
    const args = argv.map(list);

    return 1 < args.length ? (
        take(
            Math.min(...args.map(length))
        )(args[0]).map(
            (x, i) => TupleN(...args.map(y => y[i]))
        )
    ) : args;
};

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f =>
    // A list with the length of the shorter of
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => {
        const n = Math.min(length(xs), length(ys));

        return Infinity > n ? (
            (([as, bs]) => Array.from({
                length: n
            }, (_, i) => f(as[i])(
                bs[i]
            )))([xs, ys].map(
                take(n)
            ))
        ) : zipWithGen(f)(xs)(ys);
    };

// zipWith3 :: (a -> b -> c -> d) ->
// [a] -> [b] -> [c] -> [d]
const zipWith3 = f =>
    xs => ys => zs => Array.from({
        length: Math.min(
            ...[xs, ys, zs].map(x => x.length)
        )
    }, (_, i) => f(xs[i])(ys[i])(zs[i]));

// zipWith4 :: (a -> b -> c -> d -> e) ->
// [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = f =>
    ws => xs => ys => zs => Array.from({
        length: Math.min(
            ...[ws, xs, ys, zs].map(x => x.length)
        )
    }, (_, i) => f(ws[i])(xs[i])(ys[i])(zs[i]));

// zipWithGen :: (a -> b -> c) ->
// Gen [a] -> Gen [b] -> Gen [c]
const zipWithGen = f => ga => gb => {
    const go = function* (ma, mb) {
        let
            a = ma,
            b = mb;

        while (!a.Nothing && !b.Nothing) {
            const
                ta = a.Just,
                tb = b.Just;

            yield f(fst(ta))(fst(tb));
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    };

    return go(uncons(ga), uncons(gb));
};

// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => ((xs_, ys_) => {
        const lng = Math.min(length(xs_), length(ys_));

        return take(lng)(xs_).map(
            (x, i) => f(x)(ys_[i])
        );
    })([...xs], [...ys]);

// zipWithList_ :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList_ = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => xs.map(
        (x, i) => f(x)(ys[i])
    ).slice(
        0, Math.min(xs.length, ys.length)
    );

// zipWithLong :: (a -> a -> a) -> [a] -> [a] -> [a]
const zipWithLong = f => {
    // A list with the length of the *longer* of
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    // Any unpaired values, where list lengths differ,
    // are simply appended.
    const go = xs =>
        ys => 0 < xs.length ? (
            0 < ys.length ? (
                [f(xs[0])(ys[0])].concat(
                    go(xs.slice(1))(ys.slice(1))
                )
            ) : xs
        ) : ys;

    return go;
};

// zipWithM :: Applicative m => (a -> b -> m c) ->
// [a] -> [b] -> m [c]
const zipWithM = f =>
    xs => ys =>
        sequenceA(
            zipWith(f)(
                [...xs]
            )([...ys])
        );

// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
const zipWithN = (...args) => {
    const
        rows = args.slice(1).map(list),
        f = compose(uncurryN(args[0]), TupleN),
        n = Math.min(...rows.map(x => x.length));

    return 0 < n ? (
        take(n))(rows[0]).map(
        (x, i) => f(rows.flatMap(
            v => v[i]
        ))
    ) : [];
};

// zipWith_ :: (a -> a -> b) -> [a] -> [b]
const zipWith_ = f => {
    // A list with the length of the shorter of
    // xs and ys, defined by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    const go = xs =>
        ys => 0 < xs.length ? (
            0 < ys.length ? (
                [f(xs[0])(ys[0])].concat(
                    go(xs.slice(1))(ys.slice(1))
                )
            ) : []
        ) : [];

    return go;
};
