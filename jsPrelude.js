// JS PRELUDE – GENERIC FUNCTIONS

// Action :: (a -> b) -> a -> Action b
const Action = f =>
    // Constructor for an action.
    x => ({
        type: 'Action',
        act: f,
        arg: x
    });

// Just :: a -> Maybe a
const Just = x => ({
    type: 'Maybe',
    Nothing: false,
    Just: x
});

// Left :: a -> Either a b
const Left = x => ({
    type: 'Either',
    Left: x
});

// Node :: a -> [Tree a] -> Tree a
const Node = v =>
    // Constructor for a Tree node which connects a
    // value of some kind to a list of zero or
    // more child trees.
    xs => ({
        type: 'Node',
        root: v,
        nest: xs || []
    });

// Nothing :: Maybe a
const Nothing = () => ({
    type: 'Maybe',
    Nothing: true,
});

// Right :: b -> Either a b
const Right = x => ({
    type: 'Either',
    Right: x
});

// Tuple (,) :: a -> b -> (a, b)
const Tuple = a =>
    b => ({
        type: 'Tuple',
        '0': a,
        '1': b,
        length: 2
    });

// Tuple3 (,,) :: a -> b -> c -> (a, b, c)
const Tuple3 = a => b => c => ({
  type: 'Tuple3',
  '0': a,
  '1': b,
  '2': c,
  length: 3
});

// TupleN :: a -> b ...  -> (a, b ... )
function TupleN() {
    const
        args = Array.from(arguments),
        n = args.length;
    return 1 < n ? Object.assign(
        args.reduce((a, x, i) => Object.assign(a, {
            [i]: x
        }), {
            type: 'Tuple' + (2 < n ? n.toString() : ''),
            length: n
        })
    ) : args[0];
};

// abs :: Num -> Num
const abs = 
// Absolute value of a given number - without the sign.
  Math.abs;

// add (+) :: Num a => a -> a -> a
const add = a =>
    // Curried addition.
    b => a + b;

// all :: (a -> Bool) -> [a] -> Bool
const all = p =>
    // True if p(x) holds for every x in xs.
    xs => xs.every(p);

// allTree :: (a -> Bool) -> Tree a -> Bool
const allTree = p =>
    // True if p holds for all nodes of the
    // tree to which allTree(p) is applied.
    tree => foldTree(x => xs => p(x) && xs.every(Boolean))(
        tree
    );

// and :: [Bool] -> Bool
const and = xs =>
    // True unless any value in xs is false.
    xs.every(Boolean);

// any :: (a -> Bool) -> [a] -> Bool
const any = p =>
    // True if p(x) holds for at least
    // one item in xs.
    xs => xs.some(p);

// anyTree :: (a -> Bool) -> Tree a -> Bool
const anyTree = p =>
    // True if p holds for any node of the
    // tree to which anyTree(p) is applied.
    foldTree(x => xs => p(x) || xs.some(Boolean));

// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = mf =>
    // Applies wrapped functions to wrapped values, 
    // for example applying a list of functions to a list of values
    // or applying Just(f) to Just(x), Right(f) to Right(x), etc
    mx => {
        const t = mx.type;
        return (
            undefined !== t ? (
                'Either' === t ? (
                    apLR
                ) : 'Maybe' === t ? (
                    apMay
                ) : 'Node' === t ? (
                    apTree
                ) : 'Tuple' === t ? (
                    apTuple
                ) : apList
            ) : apList
        )(mf)(mx);
    };

// apFn :: (a -> b -> c) -> (a -> b) -> a -> c
const apFn = f =>
    // Applicative instance for functions.
    g => x => f(x)(
        g(x)
    )

// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = flr =>
  // Either application of a possible function in Either
  // to a possible value in Either, or a Left value.
  liftA2LR(identity)(flr)

// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = fs =>
    // The sequential application of each of a list
    // of functions to each of a list of values.
    xs => fs.flatMap(
        f => xs.map(f)
    );

// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = mf =>
    // Just an application of Maybe a function to
    // to Maybe a value, or Nothing.
    liftA2May(x => x)(mf);

// apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
const apTree = tf =>
    // A new tree derived by applying each of a tree
    // of functions to each node value in another tree.
    liftA2Tree(x => x)(tf)

// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = tpl => 
  liftA2Tuple(x => x)(tpl)

// append (++) :: [a] -> [a] -> [a]
// append (++) :: String -> String -> String
const append = xs =>
    // A list or string composed by
    // the concatenation of two others.
    ys => xs.concat(ys);

// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
const appendGen = xs =>
    // A new generator composed from the 
    // concatenation of two existing generators.
    function* (ys) {
        for (let vs of [xs, ys]) {
            let nxt = vs.next()
            while (!nxt.done) {
                yield nxt.value
                nxt = vs.next()
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
    // An ratio derived by approximation
    // (at granularity epsilon) to the float n.
    n => {
        const
            gcde = (e, x, y) => {
                const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
                return _gcd(abs(x), abs(y));
            },
            c = gcde(Boolean(epsilon) ? epsilon : (1 / 10000), 1, abs(n)),
            r = ratio(quot(abs(n))(c))(quot(1, c));
        return {
            type: 'Ratio',
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

// base64decode :: String -> String
const base64decode = s =>
    ObjC.unwrap(
        $.NSString.alloc.initWithDataEncoding(
            $.NSData.alloc.initWithBase64EncodedStringOptions(
                s, 0
            ),
            $.NSUTF8StringEncoding
        )
    );

// base64encode :: String -> String
const base64encode = s =>
    ObjC.unwrap(
        $.NSString.stringWithString(s)
        .dataUsingEncoding(
            $.NSUTF8StringEncoding
        ).base64EncodedStringWithOptions(0)
    );

// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = m =>
    mf => (Array.isArray(m) ? (
        bindList
    ) : (() => {
        const t = m.type;
        return 'Either' === t ? (
            bindLR
        ) : 'Maybe' === t ? (
            bindMay
        ) : 'Tuple' === t ? (
            bindTuple
        ) : ('function' === typeof m) ? (
            bindFn
        ) : undefined;
    })()(m)(mf));

// bindFn (>>=) :: (a -> b) -> (b -> a -> c) -> a -> c
const bindFn = f =>
    // Binary operator applied over f x and x.
    bop => x => bop(f(x))(x);

// bindLR (>>=) :: Either a -> 
// (a -> Either b) -> Either b
const bindLR = m =>
    mf => undefined !== m.Left ? (
        m
    ) : mf(m.Right);

// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = xs =>
    mf => xs.flatMap(mf);

// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = mb =>
    mf => mb.Nothing ? (
        mb
    ) : mf(mb.Just);

// bindTuple (>>=) :: Monoid a => (a, a) -> (a -> (a, b)) -> (a, b)
const bindTuple = tpl =>
    f => {
        const t2 = f(tpl[1]);
        return Tuple(mappend(tpl[0])(t2[0]))(
            t2[1]
        );
    };

// bool :: a -> a -> Bool -> a
const bool = f =>
    t => p => p ? t : f;

// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = p =>
    xs => {
        for (var i = 0, lng = xs.length;
            (i < lng) && !p(xs[i]); i++) {};
        return Tuple(xs.slice(0, i))(
            xs.slice(i)
        );
    };


// breakOn :: String -> String -> (String, String)
const breakOn = pat =>
    // Needle -> Haystack -> (prefix before match, match + rest)
    src => 0 < pat.length ? (() => {
        const xs = src.split(pat);
        return 1 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)('');
    })() : undefined;

// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = pat =>
    src => '' !== pat ? (
        src.split(pat)
        .reduce((a, x, i, xs) =>
            0 < i ? (
                a.concat([
                    Tuple(xs.slice(0, i).join(pat))(
                        pat + xs.slice(i).join(pat)
                    )
                ])
            ) : a, [])
    ) : undefined;

// Needle -> Haystack -> maybe (prefix before match, match + rest)
// breakOnMay :: String -> String -> Maybe (String, String)
const breakOnMay = pat =>
    src => Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return Just(0 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src)(''));
    })() : Nothing();

// bulleted :: String -> String -> String
const bulleted = strTab =>
    s => s.split(/[\r\n]/).map(
        x => '' !== x ? strTab + '- ' + x : x
    ).join('\n');

// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = xs =>
    ys => xs.flatMap(
        x => ys.flatMap(Tuple(x))
    );

// caseOf :: [(a -> Bool, b)] -> b -> a ->  b
const caseOf = pvs =>
    // List of (Predicate, value) tuples -> Default value 
    //         -> Value to test -> Output value
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

// The least integer not less than x
// ceiling :: Num -> Int
const ceiling = x => {
    const
      nr = properFraction(x),
      n = nr[0]
    return 0 < nr[1] ? 1 + n : n;
};

// center :: Int -> Char -> String -> String
const center = n =>
    // Size of space -> filler Char -> String -> Centered String
    c => s => {
        const gap = n - s.length;
        return 0 < gap ? (() => {
            const pre = c.repeat(Math.floor(gap / 2));
            return pre + s + pre + c.repeat(gap % 2);
        })() : s
    };

// chars :: String -> [Char]
const chars = s =>
    s.split('');

// chop :: ([a] -> (b, [a])) -> [a] -> [b]
const chop = f => {
    // A segmentation of xs by tail recursion with a
    // function which returns a (prefix, residue) tuple.
    const go = xs =>
        0 < xs.length ? (() => {
            const [b, bs] = Array.from(f(xs));
            return cons(b)(go(bs))
        })() : [];
    return go;
};

// chr :: Int -> Char
const chr = x =>
    String.fromCodePoint(x);

// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = n =>
    xs => enumFromThenTo(0)(n)(
        xs.length - 1
    ).reduce(
        (a, i) => a.concat([xs.slice(i, (n + i))]),
        []
    );

// combine :: FilePath -> FilePath -> FilePath
const combine = folderPath =>
    // A filePath composed from two parts,
    // with intercalation of '/' if needed.
    fileName => folderPath + (
        folderPath.endsWith('/') || fileName.startsWith('/') ? (
            ''
        ) : '/'
    ) + fileName;

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
    x => fs.reduceRight((a, f) => f(a), x);

// composeList :: [(a -> a)] -> (a -> a)
const composeList = fs =>
    x => fs.reduceRight(
        (a, f) => f(a), x
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
        xs.every(x => 'string' === typeof x) ? (
            ''
        ) : []
    ).concat(...xs) : xs;

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = f =>
    xs => xs.flatMap(f);

// cons :: a -> [a] -> [a]
const cons = x =>
    xs => Array.isArray(xs) ? (
        [x].concat(xs)
    ) : 'GeneratorFunction' !== xs
    .constructor.constructor.name ? (
        x + xs
    ) : ( // cons(x)(Generator)
        function* () {
            yield x;
            let nxt = xs.next()
            while (!nxt.done) {
                yield nxt.value;
                nxt = xs.next();
            }
        }
    )();

// constant :: a -> b -> a
const constant = k =>
    _ => k;

// copyFileLR :: FilePath -> FilePath -> Either String IO ()
const copyFileLR = fpFrom =>
    fpTo => {
        const fpTargetFolder = takeDirectory(fpTo);
        return doesFileExist(fpFrom) ? (
            doesDirectoryExist(fpTargetFolder) ? (() => {
                const
                    e = $(),
                    blnCopied = ObjC.unwrap(
                        $.NSFileManager.defaultManager
                        .copyItemAtPathToPathError(
                            $(fpFrom).stringByStandardizingPath,
                            $(fpTo).stringByStandardizingPath,
                            e
                        )
                    );
                return blnCopied ? (
                    Right(blnCopied)
                ) : Left(ObjC.unwrap(e.localizedDescription));

            })() : Left(
                'Target folder not found: ' + fpTargetFolder
            )
        ) : Left('Source file not found: ' + fpFrom);
    };

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
function* cycle(xs) {
    const lng = xs.length;
    let i = 0;
    while (true) {
        yield(xs[i])
        i = (1 + i) % lng;
    }
}

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
        const dct2 = Object.assign({}, dct2);
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
const differenceGen = ga => {
    return function*(gb) {
        // All values of generator stream ga except any
        // already seen in generator stream gb.
        const
            stream = zipGen(ga)(gb),
            sb = new Set([]);
        let xy = take(1)(stream);
        while (0 < xy.length) {
            const [x, y] = Array.from(xy[0]);
            sb.add(y);
            if (!sb.has(x)) yield x;
            xy = take(1)(stream);
        }
    }
};

// digitToInt :: Char -> Int
const digitToInt = c => {
    const
        ord = x => x.codePointAt(0),
        oc = ord(c);
    return 48 > oc || 102 < oc ? (
        undefined
    ) : (() => {
        const
            dec = oc - ord('0'),
            hexu = oc - ord('A'),
            hexl = oc - ord('a');
        return 9 >= dec ? (
            dec
        ) : 0 <= hexu && 5 >= hexu  ? (
            10 + hexu
        ) : 0 <= hexl && 5 >= hexl ? (
            10 + hexl
        ) : undefined;
    })();
};

// div :: Int -> Int -> Int
const div = x =>
    y => Math.floor(x / y);

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

// drawForest :: [Tree String] -> String
const drawForest = trees =>
    trees.map(drawTree).join('\n');

// drawTree :: Tree String -> String
const drawTree = tree =>
    unlines(draw(tree));

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
            leftPad = n => s => ' '.repeat(n) + s,
            xs = wsTree.nest,
            lng = xs.length,
            [nChars, x] = Array.from(wsTree.root);

        // LEAF NODE --------------------------------------
        return 0 === lng ? (
            TupleN([], '─'.repeat(w - nChars) + x, [])

            // NODE WITH SINGLE CHILD -------------------------
        ) : 1 === lng ? (() => {
            const indented = leftPad(1 + w);
            return fghOverLMR(
                indented,
                z => '─'.repeat(w - nChars) + x + '─' + z,
                indented
            )(f(xs[0]));

            // NODE WITH CHILDREN -----------------------------
        })() : (() => {
            const
                cFix = x => xs => x + xs,
                treeFix = (l, m, r) => compose(
                    stringsFromLMR,
                    fghOverLMR(cFix(l), cFix(m), cFix(r))
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
                    blnCompact ? [] : ['│']
                )(
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
            v => {
                const s = ' ' + v + ' ';
                return Tuple(s.length)(s)
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
                s => s.split('')
                .some(c => !' │'.includes(c))
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
    '' !== fp ? (() => {
        const
          xs = (fp.split('/'))
          .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/') + '/'
        ) : './';
    })() : './';

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
    xs => {
        const lng = xs.length;
        return 0 < lng ? xs.slice(
            until(i => i === lng || !p(xs[i]))(
                i => 1 + i
            )(0)
        ) : [];
    };

// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> String
const dropWhileEnd = p =>
    xs => {
        let i = xs.length;
        while (i-- && p(xs[i])) {}
        return xs.slice(0, i + 1);
    };

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
    fr => e => 'Either' === e.type ? (
        undefined !== e.Left ? (
            fl(e.Left)
        ) : fr(e.Right)
    ) : undefined;

// elem :: Eq a => a -> [a] -> Bool
// elem :: Char -> String -> Bool
const elem = x =>
    xs => {
        const t = xs.constructor.name;
        return 'Array' !== t ? (
            xs['Set' !== t ? 'includes' : 'has'](x)
        ) : xs.some(eq(x));
    };

// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = i =>
    // Just the item at the indexed position in an array,
    // or in the lexically sorted key-values of a dict,
    // or Nothing, if the index is out of range.
    x => {
        const
            bln = Array.isArray(x),
            k = bln ? i : Object.keys(x)
            .sort()[i],
            v = x[k];
        return undefined !== v ? (
            Just(bln ? v : Tuple(k, v))
        ) : Nothing();
    };

// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = x =>
    xs => {
        const i = xs.indexOf(x);
        return -1 === i ? (
            Nothing()
        ) : Just(i);
    };

// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = x =>
    xs => xs.flatMap((y, i) => y === x ? (
        [i]
    ) : []);

// elems :: Map k a -> [a]
// elems :: Set a -> [a]
const elems = x =>
    'Set' !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());

// encodedPath :: FilePath -> Percent Encoded String
const encodedPath = encodeURI;

// enumFrom :: Enum a => a -> [a]
function* enumFrom(x) {
    // A non-finite succession of enumerable
    // values, starting with the value x.
    let v = x;
    while (true) {
        yield v;
        v = succ(v);
    }
}

// enumFromPairs :: String -> [(String, Int)] -> Dict
const enumFromPairs = name =>
    kvs => {
        const
            iMax = kvs[kvs.length - 1][1],
            iMin = kvs[0][1];
        return kvs.reduce(
            (a, kv) => {
                return Object.assign(
                    a, {
                        [kv[0]]: {
                            'type': 'enum',
                            'name': name,
                            'key': kv[0],
                            'max': iMax,
                            'min': iMin,
                            'value': kv[1]
                        },
                        [kv[1]]: kv[0]
                    }
                )
            }, {}
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
const enumFromThenTo = x1 =>
    x2 => y => {
        const d = x2 - x1;
        return Array.from({
            length: Math.floor(y - x2) / d + 2
        }, (_, i) => x1 + (d * i));
    };

// enumFromThenToChar :: Char -> Char -> Char -> [Char]
const enumFromThenToChar = x1 =>
    x2 => y => {
        const [i1, i2, iY] = Array.from([x1, x2, y])
            .map(x => x.charCodeAt(0)),
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
    const [intM, intN] = [m, n].map(x => x.charCodeAt(0));
    return Array.from({
        length: Math.floor(intN - intM) + 1
    }, (_, i) => String.fromCodePoint(intM + i));
};

// enumFromTo_ :: Enum a => a -> a -> [a]
const enumFromTo_ = m => n => {
    const
        [x, y] = [m, n].map(fromEnum),
        b = x + ('number' !== typeof m ? 0 : m - x);
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
        ) : 'object' !== t ? (
            'function' !== t ? (
                a === b
            ) : a.toString() === b.toString()
        ) : (() => {
            const kvs = Object.entries(a);
            return kvs.length !== Object.keys(b).length ? (
                false
            ) : kvs.every(([k, v]) => eq(v)(b[k]));
        })();
    };

// evalJSLR :: String -> Either String a
const evalJSLR = s => {
    try {
        return Right(eval('(' + s + ')'))
    } catch (e) {
        return Left(e.message);
    };
};

// evalJSMay :: String -> Maybe a
const evalJSMay = s => {
    try {
        return Just(eval('(' + s + ')'))
    } catch (e) {
        return Nothing();
    };
};

// even :: Int -> Bool
const even = n => 0 === n % 2;

// exp :: Float -> Float
const exp = Math.exp;

// fTable :: String -> (a -> String) -> (b -> String)
//                      -> (a -> b) -> [a] -> String
const fTable = s => xShow => fxShow => f => xs => {
    // Heading -> x display function ->
    //           fx display function ->
    //    f -> values -> tabular string
    const
        ys = xs.map(xShow),
        w = Math.max(...ys.map(length));
    return s + '\n' + zipWith(
        a => b => a.padStart(w, ' ') + ' -> ' + b
    )(ys)(
        xs.map(x => fxShow(f(x)))
    ).join('\n');
};

// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = f =>
    // A function from x to a tuple of (f(x), g(x))
    g => x => Tuple(f(x))(g(x));

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
const filter = f => xs => xs.filter(f);

// filterTree (a -> Bool) -> Tree a -> [a]
const filterTree = p =>
    // List of all root values in the tree 
    // which match the predicate p.
    foldTree(x => xs =>
        concat(p(x) ? [x, ...xs] : xs)
    )

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
const find = p => xs => {
    const i = xs.findIndex(p);
    return -1 !== i ? (
        Just(xs[i])
    ) : Nothing();
};

// findIndex(isSpace)("hello world")
//-> {"type":"Maybe","Nothing":false,"Just":5}

// findIndex(even)([3, 5, 7, 8, 9])
//-> {"type":"Maybe","Nothing":false,"Just":3}

// findIndex(isUpper)("all lower case")
//-> {"type":"Maybe","Nothing":true}
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = p =>
    //  Just the index of the first element in
    //  xs for which p(x) is true, or 
    //  Nothing if there is no such element.
    xs => {
        const
            i = (
                'string' !== typeof xs ? (
                    xs
                ) : xs.split('')
            ).findIndex(p);
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
        const i = reverse('string' !== typeof xs ? (
            xs
        ) : xs.split('')).findIndex(p);
        return -1 !== i ? (
            Just(xs.length - (1 + i))
        ) : Nothing();
    };

// findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
//-> {2, 5}
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = p => xs =>
    xs.flatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : []);

// The first of any nodes in the tree which match the predicate p
// (For all matches, see treeMatches)
// findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
const findTree = p => {
    const go = tree =>
        p(tree.root) ? (
            Just(tree)
        ) : (() => {
            const
                xs = tree.nest,
                lng = xs.length;
            return 0 < lng ? until(tpl => lng <= tpl[0] || !tpl[1].Nothing)(
                tpl => Tuple(1 + tpl[0])(
                    go(xs[tpl[0]])
                )
            )(
                Tuple(0)(
                    Nothing()
                )
            )[1] : Nothing()
        })();
    return go;
};

// firstArrow :: (a -> b) -> ((a, c) -> (b, c))
const firstArrow = f => 
    // A simple function lifted to one which applies
    // to a tuple, transforming only its first item.
    xy => Tuple(f(xy[0]))(
       xy[1]
    );

// flatten :: NestedList a -> [a]
const flatten = nest => nest.flat(Infinity);

// flattenTree :: Tree a -> [a]
const flattenTree = tree => {
    const
        go = (xs, node) => [node.root].concat(
            node.nest.reduceRight(go, xs)
        );
    return go([], tree);
};

// flip :: (a -> b -> c) -> b -> a -> c
const flip = f =>
    1 < f.length ? (
        (a, b) => f(b, a)
    ) : (x => y => f(y)(x));

// floor :: Num -> Int
const floor = x => {
    const
        nr = (
            'Ratio' !== x.type ? (
                properFraction
            ) : properFracRatio
        )(x),
        n = nr[0];
    return 0 > nr[1] ? n - 1 : n;
};

// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = f => fa =>
    Array.isArray(fa) ? (
        fa.map(f)
    ) : 'string' !== typeof fa ? (() => {
        const t = fa.type;
        return ('Either' === t ? (
            fmapLR(f)(fa)
        ) : 'Maybe' === t ? (
            fmapMay(f)(fa)
        ) : 'Node' === t ? (
            fmapTree(f)(fa)
        ) : 'Tuple' === t ? (
            fmapTuple(f)(fa)
        ) : undefined)
    })() : fa.split('').map(f);

// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
const fmapGen = f =>
    function*(gen) {
        let v = take(1)(gen);
        while (0 < v.length) {
            yield(f(v[0]))
            v = take(1)(gen)
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
    // A new tree. The result of a structure-preserving
    // application of f to each root in the existing tree.
    const go = tree => Node(f(tree.root))(
        tree.nest.map(go)
    );
    return go;
};

// fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
const fmapTuple = f => tpl =>
    Tuple(tpl[0])(
        f(tpl[1])
    );

// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = f => {
    // Result of mapping each element of the tree to
    // a monoid, and combining with mappend.
    const go = tree =>
        0 < tree.nest.length ? mappend(f(tree.root))(
            foldl1(mappend)(tree.nest.map(go))
        ) : f(tree.root);
    return go;
};

// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = f => {
    // The catamorphism on trees. A summary
    // value obtained by a depth-first fold.
    const go = tree => f(tree.root)(
        tree.nest.map(go)
    );
    return go;
};

// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = f => 
    a => xs => xs.reduce((x, y) => f(x)(y), a);

// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = f =>
    // Left to right reduction of the non-empty list xs, 
    // using the binary operator f, with the head of xs
    // as the initial acccumulator value.
    xs => 1 < xs.length ? xs.slice(1)
    .reduce(uncurry(f), xs[0]) : xs[0];

// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = f => xs =>
    0 < xs.length ? (
        Just(xs.slice(1)
            .reduce(uncurry(f), xs[0]))
    ) : Nothing();

// foldlTree :: (b -> a -> b) -> b -> Tree a -> b
const foldlTree = f => 
    acc => node => {
  const go = (a, x) =>
    x.nest.reduce(go, f(a)(x));
  return go(acc, node);
};

// Note that that the Haskell signature of foldr differs from that of
// foldl - the positions of accumulator and current value are reversed
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = f => a => xs =>
    xs.reduceRight((a, x) => f(x)(a), a);

// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = f => xs =>
    0 < xs.length ? init(xs)
    .reduceRight(uncurry(f), last(xs)) : [];

// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = f => xs =>
    0 < xs.length ? (
        Just(xs.slice(0, -1)
            .reduceRight(uncurr(f), xs.slice(-1)[0]))
    ) : Nothing();

// foldrTree :: (a -> b -> b) -> b -> Tree a -> b
const foldrTree = f => acc => node => {
    const go = (a, x) =>
        x.nest.reduceRight(go, f(x.root)(a));
    return go(acc, node);
};

// fpAppend :: FilePath -> FilePath -> FilePath
const fpAppend = fp =>
    // Two paths combined with a path separator. 
    // Just the second path if that starts 
    // with a path separator.
    fp1 => Boolean(fp) && Boolean(fp1) ? (
        '/' === fp1.slice(0, 1) ? (
            fp1
        ) : '/' === fp.slice(-1) ? (
            fp + fp1
        ) : fp + '/' + fp1
    ) : fp + fp1;

// fromEnum :: Enum a => a -> Int
const fromEnum = x =>
    typeof x !== 'string' ? (
        x.constructor === Object ? (
            x.value
        ) : parseInt(Number(x))
    ) : x.codePointAt(0);

// | Return the contents of a 'Left'-value or a default value otherwise.
// fromLeft :: a -> Either a b -> a
const fromLeft = def => lr =>
  isLeft(lr) ? lr.Left : def;

// fromMaybe :: a -> Maybe a -> a
const fromMaybe = def => mb => mb.Nothing ? def : mb.Just;

// | Return the contents of a 'Right'-value or a default value otherwise.
// fromRight :: b -> Either a b -> b
const fromRight = def => lr =>
  isRight(lr) ? lr.Right : def;

// fst :: (a, b) -> a
const fst = tpl =>
    // First member of a pair.
    tpl[0];

// Abbreviation for quick testing
// ft :: (Int, Int) -> [Int]
const ft = m => n =>
    Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);

// gcd :: Int -> Int -> Int
const gcd = x => y => {
    const
        _gcd = (a, b) => (0 === b ? a : _gcd(b, a % b)),
        abs = Math.abs;
    return _gcd(abs(x), abs(y));
};

// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = xs => i =>
    (i < xs.length && 0 <= i) ? Just(xs[i]) : Nothing();

// group :: [a] -> [[a]]
const group = xs => {
    // A list of lists, each containing only equal elements,
    // such that the concatenation of these lists is xs.
    const go = xs =>
        0 < xs.length ? (() => {
            const
                h = xs[0],
                i = xs.findIndex(x => h !== x);
            return i !== -1 ? (
                [xs.slice(0, i)].concat(go(xs.slice(i)))
            ) : [xs];
        })() : [];
    return go(xs);
};

// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = fEq => xs =>
    // // Typical usage: groupBy(on(eq)(f), xs)
    0 < xs.length ? (() => {
        const
            tpl = xs.slice(1).reduce(
                (gw, x) => {
                    const
                        gps = gw[0],
                        wkg = gw[1];
                    return fEq(wkg[0])(x) ? (
                        Tuple(gps)(wkg.concat([x]))
                    ) : Tuple(gps.concat([wkg]))([x]);
                },
                Tuple([])([xs[0]])
            );
        return tpl[0].concat([tpl[1]])
    })() : [];

// Sort and group a list by comparing the results of a key function
// applied to each element. groupSortOn f is equivalent to
// groupBy eq $ sortBy (comparing f),
// but has the performance advantage of only evaluating f once for each
// element in the input list.
// This is a decorate-(group.sort)-undecorate pattern, as in the
// so-called 'Schwartzian transform'.
// Groups are arranged from from lowest to highest.
// groupSortOn :: Ord b => (a -> b) -> [a] -> [a]
// groupSortOn :: Ord b => [((a -> b), Bool)]  -> [a] -> [a]
const groupSortOn = f => xs => {
    // Functions and matching bools derived from argument f
    // which is a single key function
    const fsbs = unzip(
            flatten([f])
            .reduceRight((a, x) =>
                'boolean' === typeof x ? {
                    asc: x,
                    fbs: a.fbs
                } : {
                    asc: true,
                    fbs: [
                        [x, a.asc]
                    ].concat(a.fbs)
                }, {
                    asc: true,
                    fbs: []
                })
            .fbs
        ),
        [fs, bs] = [fsbs[0], fsbs[1]],
        iLast = fs.length;
    // decorate-sort-group-undecorate
    return groupBy(p => q => p[0] === q[0])(
            sortBy(
                mappendComparing(
                    // functions that access pre-calculated values by position
                    // in the decorated ('Schwartzian') version of xs
                    zip(fs.map((_, i) => x => x[i]), bs)
                )
            )(
              xs.map( // xs decorated with precalculated key function values
                    x => fs.reduceRight(
                        (a, g) => [g(x)].concat(a), [
                            x
                        ]
                    )
                )
            )
        )
        .map(gp => gp.map(x => x[iLast])); // undecorated version of data, post sort
};

// gt :: Ord a => a -> a -> Bool
const gt = x => y =>
    'Tuple' === x.type ? (
        x[0] > y[0]
    ) : (x > y);

// head :: [a] -> a
const head = xs => xs.length ? xs[0] : undefined;

// headMay :: [a] -> Maybe a
const headMay = xs =>
    0 < xs.length ? Just(xs[0]) : Nothing();

// identity :: a -> a
const identity = x =>
    // The identity function. (`id`, in Haskell)
    x;

// if_ :: Bool -> a -> a -> a
const if_ = bln => x => y => bln ? x : y;

// indented :: String -> String -> String
const indented = strIndent => s =>
    s.split(/[\r\n]/).map(
        x => '' !== x ? strIndent + x : x
    ).join('\n')

// index (!!) :: [a] -> Int -> Maybe a
// index (!!) :: Generator (Int, a) -> Int -> Maybe a
// index (!!) :: String -> Int -> Maybe Char
const index = xs => i => {
    const s = xs.constructor.constructor.name;
    return 'GeneratorFunction' !== s ? (() => {
        const v = xs[i];
        return undefined !== v ? Just(v) : Nothing();
    })() : (() => {
        const v = until(x => x.done || i <= fst(x.value))(
            () => xs.next()
        )(xs.next());
        return v.done ? Nothing() : Just(snd(v.value));
    })();
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
const indexOf = needle => haystack =>
    'string' !== typeof haystack ? (
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
//              Maybe Tree (a,  { nodeSum :: Int })
const indexTree = tree =>
    // Index into a measured tree. (see measuredTree)
    i => 0 !== i ? (
        i > (tree.root[1].nodeSum - 1) ? (
            Nothing()
        ) : indexForest(tree.nest)(i - 1)
    ) : Just(tree);

// init :: [a] -> [a]
const init = xs =>
    // All elements of a list except the last.
    0 < xs.length ? (
        xs.slice(0, -1)
    ) : undefined;

// initMay :: [a] -> Maybe [a]
const initMay = xs =>
    0 < xs.length ? Just(xs.slice(0, -1)) : Nothing();

// inits([1, 2, 3]) -> [[], [1], [1, 2], [1, 2, 3]
// inits('abc') -> ["", "a", "ab", "abc"]
// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs => [
        []
    ]
    .concat(('string' === typeof xs ? xs.split('') : xs)
        .map((_, i, lst) => lst.slice(0, 1 + i)));

// insert :: Ord a => a -> [a] -> [a]
const insert = x => ys => {
    const cmp = (a, b) => a < b ? -1 : (a > b ? 1 : 0);
    for (var i = 0, lng = ys.length; i < lng && cmp(x, ys[i]) > 0; i++) {};
    return ys.slice(0, i)
        .concat(x)
        .concat(ys.slice(i));
};

// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = cmp => x => ys => {
    for (var i = 0, lng = ys.length; i < lng && cmp(x, ys[i]) > 0; i++) {};
    return ys.slice(0, i)
        .concat(x)
        .concat(ys.slice(i));
};

// insertDict :: String -> a -> Dict -> Dict
const insertDict = k => v => dct =>
    Object.assign({}, dct, {
        [k]: v
    });

// intToDigit :: Int -> Char
const intToDigit = n =>
    n >= 0 && n < 16 ? (
        '0123456789ABCDEF'.charAt(n)
    ) : '?';

// intercalate :: [a] -> [[a]] -> [a]
// intercalate :: String -> [String] -> String
const intercalate = sep => xs =>
    0 < xs.length && 'string' === typeof sep &&
    'string' === typeof xs[0] ? (
        xs.join(sep)
    ) : concat(intersperse(sep)(xs));

// intercalateS :: String -> [String] -> String
const intercalateS = s =>
    // The concatenation of xs
    // interspersed with copies of s.
    xs => xs.join(s);

// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = xs => ys => {
    const s = new Set(ys);
    return xs.filter(x => s.has(x));
};

// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = eq => xs => ys => {
    return (0 < xs.length && 0 < ys.length) ?
    xs.filter(x => ys.some(eq(x))) : [];
};

// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = eq => xs =>
    foldr1((a => x => intersectBy(eq)(a)(x)))(
        xs
    );

// intersection :: Ord a => Set a -> Set a -> Set a
const intersection = s => s1 =>
    new Set([...s].filter(x => s1.has(x)));

// intersperse(0, [1,2,3]) -> [1, 0, 2, 0, 3]
// intersperse :: a -> [a] -> [a]
// intersperse :: Char -> String -> String
const intersperse = sep => xs => {
    const bln = 'string' === typeof xs;
    return xs.length > 1 ? (
        (bln ? concat : x => x)(
            (bln ? (
                xs.split('')
            ) : xs)
            .slice(1)
            .reduce((a, x) => a.concat([sep, x]), [xs[0]])
        )) : xs;
};

// isAlpha :: Char -> Bool
const isAlpha = c =>
    /[A-Za-z\u00C0-\u00FF]/.test(c);

// isChar :: a -> Bool
const isChar = x =>
    ('string' === typeof x) && (1 === x.length);

// isDigit :: Char -> Bool
const isDigit = c => {
    const n = c.codePointAt(0);
    return 48 <= n && 57 >= n;
};

// isInfixOf :: (Eq a) => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = needle => haystack =>
    'string' !== typeof haystack ? (() => {
        const
            lng = needle.length,
            go = xs => lng <= xs.length ? (
                isPrefixOf(needle)(xs) || go(xs.slice(1))
            ) : false;
        return go(haystack);
    })() : haystack.includes(needle);

// isLeft :: Either a b -> Bool
const isLeft = lr =>
    ('Either' === lr.type) && (undefined !== lr.Left);

// isLower :: Char -> Bool
const isLower = c =>
    /[a-z]/.test(c);

// isMaybe :: a -> Bool
const isMaybe = x =>
    'Maybe' === x.type;

// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
    1 > xs.length;

// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = xs =>
    // True if and only if xs is a prefix of ys.
    ys => {
        const go = (xs, ys) => {
            const intX = xs.length;
            return 0 < intX ? (
                ys.length >= intX ? xs[0] === ys[0] && go(
                    xs.slice(1), ys.slice(1)
                ) : false
            ) : true;
        };
        return 'string' !== typeof xs ? (
            go(xs, ys)
        ) : ys.startsWith(xs);
    };

// isRight :: Either a b -> Bool
const isRight = lr =>
  ('undefined' !== typeof lr) && 
  ('Either' === lr.type) && (undefined !== lr.Right);

// The 'isSortedBy' function returns true iff the predicate returns true
// for all adjacent pairs of elements in the list.
// isSortedBy :: (a -> a -> Bool) -> [a] -> Bool
const isSortedBy = cmp => xs =>
    xs.length < 2 || all(x => x < 1, zipWith(cmp, xs, tail(xs)));

// isSpace :: Char -> Bool
const isSpace = c => /\s/.test(c);

// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
// isSubsequenceOf :: String -> String -> Bool
const isSubsequenceOf = xs => ys => {
    const iss = (a, b) =>
        a.length > 0 ? (
            b.length > 0 ? (
                iss((a[0] === b[0] ? a.slice(1) : a), b.slice(1))
            ) : false
        ) : true;
    return iss.apply(
        null, 'string' === typeof xs ? [
            xs.split(''), ys.split('')
        ] : [xs, ys]
    );
};

// isSubsetOf :: Ord a => Set a -> Set a -> Bool
const isSubsetOf = a => b => {
    for (let x of a) {
        if (!b.has(x)) return false;
    }
    return true;
};

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = ns => hs => {
    const go = delta =>
        eq(ns)(dropLength(delta)(hs));
    return 'string' !== typeof hs ? (
        bindMay(dropLengthMaybe(ns)(hs))(
          go
        )
    ) : hs.endsWith(ns);
};

// isUpper :: Char -> Bool
const isUpper = c =>
    /[A-Z]/.test(c);

// iso8601Local :: Date -> String
const iso8601Local = dte =>
    new Date(dte - (6E4 * dte.getTimezoneOffset()))
    .toISOString();

// iterate :: (a -> a) -> a -> Gen [a]
const iterate = f =>
    function* (x) {
        let v = x;
        while (true) {
            yield(v);
            v = f(v);
        }
    };

// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = p => f =>
    function*(x) {
        let v = x;
        while (!p(v)) {
            yield(v);
            v = f(v);
        }
    };

// join :: Monad m => m (m a) -> m a
const join = x => bind(x)(
    identity
);

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
    console.log(
        args
        .map(JSON.stringify)
        .join(' -> ')
    );

// jsonParseLR :: String -> Either String a
const jsonParseLR = s => {
    try {
        return Right(JSON.parse(s));
    } catch (e) {
        return Left(`${e.message} (line:${e.line} col:${e.column})`);
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
    0 < xs.length ? xs.slice(-1)[0] : undefined;

// lastMay :: [a] -> Maybe a
const lastMay = xs => 0 < xs.length ? (
    Just(xs.slice(-1)[0])
) : Nothing();

// lcm :: Int -> Int -> Int
const lcm = x =>
    // The smallest positive integer divisible
    // without remainder by both x and y.
    y => (x === 0 || y === 0) ? (
        0
    ) : Math.abs(Math.floor(x / gcd(x)(y)) * y);

// lefts :: [Either a b] -> [a]
const lefts = xs =>
    xs.flatMap(
        x => ('Either' === x.type) && (undefined !== x.Left) ? (
            [x.Left]
        ) : []
    );

// length :: [a] -> Int
const length = xs =>
    // Returns Infinity over objects without finite 
    // length. This enables zip and zipWith to choose 
    // the shorter argument when one is non-finite, 
    // like cycle, repeat etc
    (Array.isArray(xs) || 'string' === typeof xs) ? (
        xs.length
    ) : Infinity;

// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(xs => 1 > xs.length)(
    xs => xs.flatMap(x => x.nest)
  )([tree]);

// levels :: Tree a -> [[a]]
const levels = tree => {
    const xs = [[root(tree)]];
    let level = [tree].flatMap(nest);
    while (0 < level.length) {
        xs.push(level.map(root));
        level = level.flatMap(nest);
    }
    return xs;
};

// Lift a binary function to actions.
// liftA2 f a b = fmap f a <*> b
// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = f => a => b => {
    const t = typeName(a);
    return (
        'Bottom' !== t ? (
            '(a -> b)' === t ? (
                liftA2Fn
            ) : 'Either' === t ? (
                liftA2LR
            ) : 'Maybe' === t ? (
                liftA2May
            ) : 'Tuple' === t ? (
                liftA2Tuple
            ) : 'Node' === t ? (
                liftA2Tree
            ) : liftA2List
        ) : liftA2List
    )(f)(a)(b);
};

// liftA2Fn :: (a0 -> b -> c) -> (a -> a0) -> (a -> b) -> a -> c
const liftA2Fn = op => f => g =>
    // Lift a binary function to a composition
    // over two other functions.
    // liftA2 (*) (+ 2) (+ 3) 7 == 90
    x => op(f(x))(g(x));

// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = f =>
    a => b => bindLR(a)(
        x => bindLR(b)(
            compose(Right, f(x))
        )
    );

// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = f => xs => ys =>
    // The binary operator f lifted to a function over two
    // lists. f applied to each pair of arguments in the
    // cartesian product of xs and ys.
    xs.flatMap(
        x => ys.map(f(x))
    );

// liftA2May :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2May = f => a => b =>
    a.Nothing ? a : b.Nothing ? b : Just(f(a.Just)(b.Just));

// liftA2Tree :: (a -> b -> c) -> Tree a -> Tree b -> Tree c
const liftA2Tree = f => tx => ty => {
    const go = tx =>
        Node(f(tx.root)(ty.root))(
            Boolean(ty.nest) ? (
                ty.nest.map(
                    fmapTree(f(tx.root))
                )
                .concat(tx.nest.map(go))
            ) : []
        );
    return go(tx);
};

// liftA2Tuple :: Monoid m => 
// (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = f => a => b =>
    Tuple(mappend(a[0])(b[0]))(
        f(a[1])(b[1])
    );

// liftMmay :: (a -> b) -> (Maybe a -> Maybe b)
const liftMmay = f =>
    mb => mb.Nothing ? (
        mb
    ) : Just(f(mb.Just))

// lines :: String -> [String]
const lines = s =>
    // A list of strings derived from a single
    // newline-delimited string.
    0 < s.length ? (
        s.split(/[\r\n]/)
    ) : [];

// list :: TupleN(a) -> [a]
const list = tpl =>
    Array.from(tpl);

// listFromMaybe :: Maybe a -> [a]
const listFromMaybe = mb =>
    // A singleton list derived from a Just value, 
    // or an empty list derived from Nothing.
    mb.Nothing ? [] : [mb.Just];

// listFromTree :: Tree a -> [a]
const listFromTree = tree => {
    const go = x => [
      x.root,
      ...[].concat.apply([], x.nest.map(go))
    ];
    return go(tree);
};

// listFromTuple :: (a, a ...) -> [a]
const listFromTuple = tpl =>
    Array.from(tpl);

// The listToMaybe function returns Nothing on 
// an empty list or Just the head of the list.
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    0 < xs.length ? (
        Just(xs[0])
    ) : Nothing();

// log :: Float -> Float
const log = Math.log;

// lookup :: Eq a => a -> Container -> Maybe b
const lookup = k => m =>
    (Array.isArray(m) ? (
        lookupTuples
    ) : lookupDict)(k)(m);

// lookupDict :: a -> Dict -> Maybe b
const lookupDict = k => dct => {
    const v = dct[k];
    return undefined !== v ? (
        Just(v)
    ) : Nothing();
};

// lookupTuples :: Eq a => a -> [(a, b)] -> Maybe b
const lookupTuples = k => kvs =>
    bindMay(
      find(x => k === fst(x))(
        kvs
      )
    )(x => Just(snd(x)));

// lt (<) :: Ord a => a -> a -> Bool
const lt = a => 
    b => a < b;

// Not required in JS, which has first functions by default.
// Included only for comparison with AS, which has to derive
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// In JS, mReturn is just an alternate name for identity.
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = x => identity(x);

// map :: (a -> b) -> [a] -> [b]
const map = f =>
    // The list obtained by applying f 
    // to each element of xs.
    // (The image of xs under f).
    xs => (
        Array.isArray(xs) ? (
            xs
        ) : xs.split('')
    ).map(f);

// Map-accumulation is a combination of map and a catamorphism;
// it applies a function to each element of a list, passing an
// accumulating parameter from left to right, and returning a final
// value of this accumulator together with the new list.
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = f => acc => xs =>
    xs.reduce((a, x) => {
        const pair = f(a[0])(x);
        return Tuple(pair[0])(a[1].concat(pair[1]));
    }, Tuple(acc)([]));

// mapAccumL_Tree :: (acc -> x -> (acc, y))
// -> acc -> Tree -> (acc, Tree)
const mapAccumL_Tree = f => {
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
const mapAccumR = f => acc => xs =>
    // A tuple of an accumulation and a list derived by a
    // combined map and fold,
    // with accumulation from right to left.
    xs.reduceRight((a, x) => {
        const pair = f(a[0])(x);
        return Tuple(pair[0])([pair[1]].concat(a[1]));
    }, Tuple(acc)([]));

// A function mapped over the keys of a record
// A function mapped over the keys of a record
// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = f => dct =>
    mapFromList(
        map(kv => [f(read(kv[0]))(kv[1])])(
            zip(keys(dct))(
                elems(dct)
            )
        )
    );

// The mapMaybe function is a version of map which can throw out
// elements. In particular, the functional argument returns
// something of type Maybe b. If this is Nothing, no element is
// added on to the result list. If it just Just b, then b is
// included in the result list.
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = mf => xs =>
  xs.reduce(
    (a, x) => maybe(a)(
        j => a.concat(j)
    )(mf(x)),
    []
  );

// mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
const mapMaybeGen = mf =>
    function*(gen) {
        let v = take(1, gen);
        while (0 < v.length) {
            let mb = mf(v[0]);
            if (!mb.Nothing) yield mb.Just
            v = take(1, gen);
        }
    };

// mappend (<>) :: Monoid a => a -> a -> a
const mappend = a =>
    // Associative operation 
    // defined for various monoid types.
    b => {
        const t = a.type;
        return (
            Boolean(t) ? (
                'Maybe' === t ? (
                    mappendMaybe
                ) : 'Ordering' === t ? (
                    mappendOrd
                ) : mappendTuple
            ) : 'function' !== typeof a ? (
                append
            ) : mappendFn
        )(a)(b);
    };

// mappendFn :: Monoid b => (a -> b) -> (a -> b) -> (a -> b)
const mappendFn = f => g =>
    x => mappend(f(x))(
        g(x)
    );

// mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
const mappendMaybe = a => b =>
    a.Nothing ? (
        b
    ) : b.Nothing ? (
        a
    ) : Just(
        mappend(a.Just)(
            b.Just
        )
    );

// mappendOrd (<>) :: Ordering -> Ordering -> Ordering
const mappendOrd = a => b => a !== 0 ? a : b;

// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = t => t2 =>
    Tuple(
        mappend(t[0])(
            t1[0]
        )
    )(mappend(t[1])(
        t1[1]
    ));

// Returns a sequence-matching function for findIndices etc
// findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
// -> [1, 4]
// matching :: [a] -> (a -> Int -> [a] -> Bool)
const matching = pat => {
    const
        lng = pat.length,
        bln = 0 < lng,
        h = bln ? pat[0] : undefined;
    return x => i => src =>
        bln && h == x &&
        eq(pat)(
            src.slice(i, lng + i)
        );
};

// max :: Ord a => a -> a -> a
const max = a => b => gt(b)(a) ? b : a;

// maxBound :: a -> a
const maxBound = x => {
    const e = x.enum;
    return Boolean(e) ? (
        e[e[x.max]]
    ) : {
        'number': Number.MAX_SAFE_INTEGER,
        'string': String.fromCodePoint(65535),
        'boolean': true
    }[typeof x];
};

// maximum :: Ord a => [a] -> a
const maximum = xs =>
    // The largest value in a non-empty list.
    0 < xs.length ? (
        xs.slice(1).reduce(
            (a, x) => x > a ? (
                x
            ) : a, xs[0]
        )
    ) : undefined;

//  Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = f => xs =>
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => 0 < f(x)(a) ? x : a, xs[0])
    ) : undefined;

//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = f => xs =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce((a, x) => 0 < f(x, a) ? x : a, xs[0]))
    ) : Nothing();

// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(1)
            .reduce((a, x) => (x > a ? x : a), xs[0]))
    ) : Nothing();

// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = v =>
    // Default value (v) if m is Nothing, or f(m.Just)
    f => m => m.Nothing ? v : f(m.Just);

// mean :: [Num] -> Num
const mean = xs =>
  xs.reduce((a, x) => a + x, 0) / xs.length;

// measuredTree :: Tree a -> Tree (a, (Int, Int, Int, Int))
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
            let topDown = i++;
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
const member = k => dct => k in dct;

// min :: Ord a => a -> a -> a
const min = a => b => b < a ? b : a;

// minBound :: a -> a
const minBound = x => {
    const e = x.enum;
    return Boolean(e) ? (
        e[e[0]]
    ) : {
        'number': Number.MIN_SAFE_INTEGER,
        'string': String.fromCodePoint(0),
        'boolean': false
    }[typeof x];
};

// minimum :: Ord a => [a] -> a
const minimum = xs =>
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => x < a ? x : a, xs[0])
    ) : undefined;

//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n)
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = f => xs =>
    xs.reduce((a, x) => undefined === a ? x : (
        0 > f(x)(a) ? x : a
    ), undefined);

// minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const minimumByMay = f =>
    xs => xs.reduce((a, x) =>
        a.Nothing ? Just(x) : (
            f(x)(a.Just) < 0 ? Just(x) : a
        ), Nothing());

// minimumMay :: [a] -> Maybe a
const minimumMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(1)
            .reduce((a, x) => x < a ? x : a, xs[0])
        )
    ) : Nothing();

// mod :: Int -> Int -> Int
const mod = n => d => n % d;

// mul (*) :: Num a => a -> a -> a
const mul = a => b => a * b;

// ne :: a -> a -> Bool
const ne = a => b => a !== b;

// negate :: Num -> Num
const negate = n => -n;

// nest :: Tree a -> [a]
const nest = tree => {
    // Allowing for lazy (on-demand) evaluation.
    // If the nest turns out to be a function –
    // rather than a list – that function is applied
    // here to the root, and returns a list.
    const xs = tree.nest;
    return 'function' !== typeof xs ? (
        xs
    ) : xs(root(x));
};

// not :: Bool -> Bool
const not = b => !b;

// notElem :: Eq a => a -> [a] -> Bool
const notElem = x => xs =>
    !xs.includes(x);

// nub :: [a] -> [a]
const nub = xs => 
  nubBy(eq)(xs);

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = fEq => {
    const go = xs => 0 < xs.length ? (() => {
        const x = xs[0];
        return [x].concat(
            go(xs.slice(1)
                .filter(y => !fEq(x)(y))
            )
        )
    })() : [];
    return go;
};

// odd :: Int -> Bool
const odd = n => !even(n);

// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = f =>
    // e.g. sortBy(on(compare,length), xs)
    g => a => b => f(g(a))(g(b));

// Derive a function from the name of a JS infix operator
// op :: String -> (a -> a -> b)
const op = strOp =>
    eval(`(a, b) => a ${strOp} b`);

// or :: [Bool] -> Bool
const or = xs =>
    xs.some(Boolean);

// ord :: Char -> Int
const ord = c => c.codePointAt(0);

// ordering :: () -> Ordering
const
    ordering = enumFromPairs(
        'Ordering', 
        [['LT', -1], ['EQ', 0], ['GT', 1]]
    ),
    LT = ordering.LT,
    EQ = ordering.EQ,
    GT = ordering.GT;

// All lines in the string outdented by the same amount
// (just enough to ensure that the least indented lines 
//  have no remaining indent)
// All relative indents are left unchanged
// outdented :: String -> String
const outdented = s => {
    const
        rgx = /^ */, // Leading space characters.
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
            x = node.root,
            measures = x[1];
        return Node(Tuple(x[0])(
            Object.assign(measures, {
                parent: mb
            })
        ))(node.nest.map(go(Just(measures.index))));
    };
    return go(Nothing())(tree);
};

// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = p => xs =>
    xs.reduce(
        (a, x) =>
        p(x) ? (
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
const permutations = xs =>
    xs.reduceRight(
        (a, x) => a.flatMap(
            xs => Array.from({
                length: 1 + xs.length
            }, (_, i) => i)
            .map(n => xs.slice(0, n)
                .concat(x)
                .concat(xs.slice(n))
            )
        ),
        [[]]
    );

// permutationsWithRepetition :: Int -> [a] -> [[a]]
const permutationsWithRepetition = n => xs =>
    0 < xs.length ? (
        map(flatten)(
            foldl1(x => cartesianProduct(xs, x))(
                replicate(n)(xs)
            )
        )
    ) : [];

// pi :: Float
const pi = Math.PI;

// plus :: Num -> Num -> Num
const plus = a => b => a + b;

// postorder :: Tree a -> [a]
const postorder = t => {
    // List of reoot elements of tree flattened
    // bottom-up into a postorder list.
    const go = (xs, x) =>
        nest(x).reduce(go, xs).concat(root(x));
    return go([], t);
};

// pred :: Enum a => a -> a
const pred = x => {
    const t = typeof x;
    return 'number' !== t ? (() => {
        const [i, mn] = [x, minBound(x)].map(fromEnum);
        return i > mn ? (
            toEnum(x)(i - 1)
        ) : Error('succ :: enum out of range.')
    })() : x > Number.MIN_SAFE_INTEGER ? (
        x - 1
    ) : Error('succ :: Num out of range.')
};

// predMay :: Enum a => a -> Maybe a
const predMay = x => {
    const t = typeof x;
    return 'number' !== t ? (() => {
        const [i, mn] = [x, minBound(x)].map(fromEnum);
        return i > mn ? (
            Just(toEnum(x)(i - 1))
        ) : Nothing()
    })() : x > Number.MIN_SAFE_INTEGER ? (
        Just(x - 1)
    ) : Nothing()
};

// print :: a -> IO ()
const print = x => {
    const s = show(x);
    return (
        typeof document !== 'undefined' ? (
            document.writeln(s)
        ) : typeof draft !== 'undefined' ? (
            editor.setText(
                editor.getText() + '\n' + s
            )
        ) : (
            console.log(s),
            s
        )
    );
};

// product :: [Num] -> Num
const product = xs =>
    xs.reduce((a, x) => a * x, 1);

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
const pureLR = x => Right(x);

// pureList :: a -> [a]
const pureList = x => [x];

// pureMay :: a -> Maybe a
const pureMay = x => Just(x);

// Given a type name string, returns a 
// specialised 'pure', where
// 'pure' lifts a value into a particular functor.
// pureT :: String -> f a -> (a -> f a)
const pureT = t => x =>
    'List' !== t ? (
        'Either' === t ? (
            pureLR(x)
        ) : 'Maybe' === t ? (
            pureMay(x)
        ) : 'Node' === t ? (
            pureTree(x)
        ) : 'Tuple' === t ? (
            pureTuple(x)
        ) : pureList(x)
    ) : pureList(x);

// pureTree :: a -> Tree a
const pureTree = x =>
    Node(x)([]);

// pureTuple :: a -> (a, a)
const pureTuple = x =>
    Tuple('')(x);

// Included only for comparison with AppleScript
// sort and sortBy are faster and more flexible
// quickSort :: (Ord a) => [a] -> [a]
const quickSort = xs =>
    xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(x => x <= h)(
                xs.slice(1)
            );
        return [].concat.apply(
            [], [quickSort(lessMore[0]), h, quickSort(lessMore[1])]
        );
    })() : xs;

// Included only for comparison with AppleScript
// sort and sortBy are faster and more flexible
// quickSortBy :: (a -> a -> Ordering) -> [a] -> [a]
const quickSortBy = cmp => xs =>
    xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(x => 1 !== cmp(x, h))(
                xs.slice(1)
            );
        return [].concat.apply(
            [], [quickSortBy(cmp, lessMore[0]), h, quickSortBy(cmp, lessMore[1])]
        );
    })() : xs;

// quot :: Int -> Int -> Int
const quot = n =>
    m => Math.floor(n / m);

// quotRem :: Int -> Int -> (Int, Int)
const quotRem = m => n => 
  Tuple(Math.floor(m / n))(
      m % n
  );

// quoted :: Char -> String -> String
const quoted = c =>
    // A string flanked on both sides
    // by a specified quote character.
    s => c + s + c

// radians :: Float x => Degrees x -> Radians x
const radians = x =>
    (Math.PI / 180) * x;

// raise :: Num -> Int -> Num
const raise = n => e => Math.pow(n, e);

// e.g. map(randomRInt(1, 10), ft(1, 20))
// randomRInt :: Int -> Int -> IO () -> Int
const randomRInt = low => high => () =>
    low + Math.floor(
        (Math.random() * ((high - low) + 1))
    );

// The list of values in the subrange defined by a bounding pair.

// range([0, 2]) -> [0,1,2]
// range([[0,0], [2,2]]) 
//  -> [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
// range([[0,0,0],[1,1,1]])
//  -> [[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]]
// range :: Ix a => (a, a) -> [a]
function range() {
    const
        args = Array.from(arguments),
        ab = 1 !== args.length ? (
            args
        ) : args[0],
        [as, bs] = [ab[0], ab[1]].map(
            x => Array.isArray(x) ? (
                x
            ) : (undefined !== x.type) &&
            (x.type.startsWith('Tuple')) ? (
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

// ratio :: Int -> Int -> Ratio Int
const ratio = x => y => {
  const go = (x, y) =>
    0 !== y ? (() => {
      const d = gcd(x)(y);
      return {
        type: 'Ratio',
        'n': quot(x)(d), // numerator
        'd': quot(y)(d) // denominator
      };
    })() : undefined;
  return go(x * signum(y), abs(y));
};

// ratioDiv :: Rational -> Rational -> Rational
const ratioDiv = n1 => n2 => {
    const [r1, r2] = map(rational)(
        [n1, n2]
    );
    return ratio(r1.n * r2.d)(
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
        return ratio((r1.n * (d / r1.d)) + (r2.n * (d / r2.d)))(
            d
        );
    };

// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x) ? x : Number.isInteger(x) ? (
        ratio(x)(1)
    ) : approxRatio(undefined)(x);

// read :: Read a => String -> a
const read = JSON.parse;

// readLR :: Read a => String -> Either String a
const readLR = s => {
    try {
        return Right(JSON.parse(s))
    } catch (e) {
        return Left(e.message);
    };
};

// recip :: Num -> Num
const recip = n =>
    0 !== n ? (1 / n) : undefined;

// recipMay :: Num -> Maybe Num
const recipMay = n =>
    0 === n ? (
        Nothing()
    ) : Just(1 / n);

// regexMatches :: Regex -> String -> [[String]]
const regexMatches = rgx =>
    // All matches for the given regular expression
    // in the supplied string s.
    s => {
        // Recompiled to ensure that any supplied 
        // regex is interpreted as global.
        const r = new RegExp(rgx, 'g');
        return unfoldr(
            m => Boolean(m) ? (
                Just(Tuple(m)(r.exec(s)))
            ) : Nothing()
        )(r.exec(s))
    };

// rem :: Int -> Int -> Int
const rem = n => m => n % m;

// renameFile :: FilePath -> FilePath -> IO ()
const renameFile = fp => fp2 => {
    const error = $();
    return $.NSFileManager.defaultManager
        .moveItemAtPathToPathError(fp, fp2, error) ? (
            Right('Moved to: ' + fp2)
        ) : Left(ObjC.unwrap(error.localizedDescription));
};

// repeat :: a -> Generator [a]
function* repeat(xs) {
    while(true) yield xs;
}

// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = needle => strNew => strHaystack =>
    strHaystack.replace(
      'string' !== typeof needle ? (
        needle
      ) : new RegExp(needle, 'g'),
      strNew
    );

// replicate :: Int -> a -> [a]
const replicate = n =>
    // A list of n copies of x.
    x => Array.from({
        length: n
    }, () => x);

// Instance for lists (arrays) only here
// replicateM :: Int -> [a] -> [[a]]
const replicateM = n => xs => {
    const go = x => 0 >= x ? [
        []
    ] : liftA2List(cons)(
        xs
    )(go(x - 1));
    return go(n);
};

// replicateString :: Int -> String -> String
const replicateString = n => 
    s => s.repeat(n);

// reverse :: [a] -> [a]
const reverse = xs =>
    'string' !== typeof xs ? (
        xs.slice(0).reverse()
    ) : xs.split('').reverse().join('');

// rights :: [Either a b] -> [b]
const rights = xs =>
    xs.flatMap(
        x => ('Either' === x.type) && (
            undefined !== x.Right
        ) ? [x.Right] : []
    );

// root :: Tree a -> a
const root = tree => tree.root;

// rotate :: Int -> [a] -> [a]
const rotate = n => xs => {
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
    const d = Math.pow(10, n);
    return Math.round(x * d) / d;
};

// runAction :: Action a -> a
const runAction = act =>
    // Evaluation of an action.
    act['act'](act['arg']);

// safeMay :: (a -> Bool) -> (a -> b) -> Maybe b
const safeMay = p => f => x =>
    p(x) ? Just(f(x)) : Nothing();

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = f => startValue => xs =>
    xs.reduce((a, x) => {
        const v = f(a[0])(x);
        return Tuple(v)(a[1].concat(v));
    }, Tuple(startValue)([startValue]))[1];

// scanl1 is a variant of scanl that has no starting value argument
// scanl1 :: (a -> a -> a) -> [a] -> [a]
const scanl1 = f => xs =>
    xs.length > 0 ? (
        scanl(f)(
            xs[0]
        )(xs.slice(1))
    ) : [];

// scanr :: (b -> a -> b) -> b -> [a] -> [b]
const scanr = f => startValue => xs =>
    xs.reduceRight((a, x) => {
        const v = f(x)(a[0]);
        return Tuple(v)([v].concat(a[1]));
    }, Tuple(startValue)([startValue]))[1];

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

// secondArrow :: (a -> b) -> ((c, a) -> (c, b))
const secondArrow = f =>
    // A function over a simple value lifted
    // to a function over a tuple.
    // f (a, b) -> (a, f(b))
    xy => Tuple(xy[0])(
        f(xy[1])
    );

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
        e = ('function' !== typeof x) ? (
            x
        ) : {
            type: 'Function',
            f: x
        };
    return JSON.stringify(e, (_, v) => {
        const
            f = ((null !== v) && (undefined !== v)) ? (() => {
                const t = v.type;
                return 'Either' === t ? (
                    showLR
                ) : 'Function' === t ? (
                    dct => 'λ' + dct.f.toString()
                ) : 'Maybe' === t ? (
                    showMaybe
                ) : 'Ordering' === t ? (
                    showOrdering
                ) : 'Ratio' === t ? (
                    showRatio
                ) : 'string' === typeof t && t.startsWith('Tuple') ? (
                    showTuple
                ) : undefined;
            })() : showUndefined;
        return Boolean(f) ? (
            f(v)
        ) : 'string' !== typeof v ? (
            v
        ) : v;
    })
};

// showBinary :: Int -> String
const showBinary = n => {
    const binaryChar = n => 0 !== n ? '1' : '0';
    return showIntAtBase(2)(
        binaryChar
    )(n)('');
};

// showDate :: Date -> String
const showDate = JSON.stringify;

// showDict :: Dict -> String
const showDict = show;

// showForest :: [Tree a] -> String
const showForest = xs =>
    unlines(xs.map(x => drawTree2(false)(true)(
        fmapTree(show)(
            x
        )
    )));

// showHex :: Int -> String
const showHex = n =>
    showIntAtBase(16)(
        intToDigit
    )(n)('');

// showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
const showIntAtBase = base => toChr => n => rs => {
    const go = ([n, d], r) => {
        const r_ = toChr(d) + r;
        return 0 !== n ? (
            go(Array.from(quotRem(n)(base)), r_)
        ) : r_;
    };
    return 1 >= base ? (
        'error: showIntAtBase applied to unsupported base'
    ) : 0 > n ? (
        'error: showIntAtBase applied to negative number'
    ) : go(Array.from(quotRem(n)(base)), rs);
};

// showJSON :: a -> String
const showJSON = x =>
    // Indented JSON representation of the value x.
    JSON.stringify(x, null, 2);

// showLR :: Either a b -> String
const showLR = lr => {
    const k = undefined !== lr.Left ? (
        'Left'
    ) : 'Right';
    return k + '(' + unQuoted(show(lr[k])) + ')';
};

// showList :: [a] -> String
const showList = x => show(x);

// showLog :: a -> IO ()
const showLog = (...args) =>
    console.log(
        args
        .map(JSON.stringify)
        .join(' -> ')
    );

// showMaybe :: Maybe a -> String
const showMaybe = mb =>
    mb.Nothing ? (
        'Nothing'
    ) : 'Just(' + unQuoted(show(mb.Just)) + ')';

// showMenuLR :: Bool -> String -> [String] -> 
// Either String [String]
const showMenuLR = blnMult =>
    title => xs => 0 < xs.length ? (() => {
        const sa = Object.assign(
            Application('System Events'), {
                includeStandardAdditions: true
            });
        sa.activate();
        const v = sa.chooseFromList(xs, {
            withTitle: title,
            withPrompt: 'Select' + (
                blnMult ? (
                    ' one or more of ' +
                    xs.length.toString()
                ) : ':'
            ),
            defaultItems: xs[0],
            okButtonName: 'OK',
            cancelButtonName: 'Cancel',
            multipleSelectionsAllowed: blnMult,
            emptySelectionAllowed: false
        });
        return Array.isArray(v) ? (
            Right(v)
        ) : Left('User cancelled ' + title + ' menu.');
    })() : Left(title + ': No items to choose from.');

// showOrdering :: Ordering -> String
const showOrdering = e =>
    0 < e.value ? (
        'GT'
    ) : 0 > e.value ? (
        'LT'
    ) : 'EQ';

// showOutline :: Tree String -> String
const showOutline = tree => {
    const go = indent => tree =>
        unlines(
            [indent + tree.root]
            .concat(tree.nest.flatMap(go('    ' + indent)))
        );
    return go('')(tree);
};

// showPrecision :: Int -> Float -> String
const showPrecision = n => x => {
    // A string showing a floating point number
    // at a given degree of precision.
    const d = Math.pow(10, n);
    return str(Math.round(d * x) / d);
};

// showRatio :: Ratio -> String
const showRatio = r =>
    'Ratio' !== r.type ? (
        r.toString()
    ) : r.n.toString() + (
        1 !== r.d ? (
            '/' + r.d.toString()
        ) : ''
    );

// showSet :: Set a -> String
const showSet = oSet =>
    '{' + Array.from(oSet)
    .map(x => x.toString())
    .join(',') + '}';

// showTree :: Tree a -> String
const showTree = x =>
    drawTree2(false)(true)(
        fmapTree(show)(x)
    );

// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + enumFromTo(0)(tpl.length - 1)
    .map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';

// showUndefined :: () -> String
const showUndefined = () => '(⊥)';

// | Sign of a number.
// The functions 'abs' and 'signum' should satisfy the law:
//
// > abs x * signum x == x
//
// For real numbers, the 'signum' is either @-1@ (negative), @0@ (zero)
// or @1@ (positive).
// signum :: Num -> Num
const signum = n => 0 > n ? -1 : (0 < n ? 1 : 0);

// Abbreviation of showJSON for quick testing.
// Default indent size is two, which can be
// overriden by any integer supplied as the
// first argument of more than one.
// sj :: a -> String
function sj() {
    const args = Array.from(arguments);
    return JSON.stringify.apply(
        null,
        1 < args.length && !isNaN(args[0]) ? [
            args[1], null, args[0]
        ] : [args[0], null, 2]
    );
}

// snd :: (a, b) -> b
const snd = tpl => tpl[1];

// snoc :: [a] -> a -> [a]
const snoc = xs =>
    // The mirror image of cons
    // A new copy of the given list, 
    // with an atom appended at the end.
    x => xs.concat(x);

// sort :: Ord a => [a] -> [a]
const sort = xs => xs.slice()
    .sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));

// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = f =>
    xs => xs.slice()
    .sort((a, b) => f(a)(b));

// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = f =>
    // Equivalent to sortBy(comparing(f)), but with f(x)
    // evaluated only once for each x in xs.
    // ('Schwartzian' decorate-sort-undecorate).
    xs => xs.map(
        x => [f(x), x]
    ).sort(
        (a, b) => a[0] < b[0] ? -1 : (a[0] > b[0] ? 1 : 0)
    ).map(x => x[1]);

// span, applied to a predicate p and a list xs, returns a tuple of xs of 
// elements that satisfy p and second element is the remainder of the list:
//
// > span (< 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])
// > span (< 9) [1,2,3] == ([1,2,3],[])
// > span (< 0) [1,2,3] == ([],[1,2,3])
//
// span p xs is equivalent to (takeWhile p xs, dropWhile p xs) 
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = p => xs => {
    const iLast = xs.length - 1;
    return splitAt(
        until(
            i => iLast < i || !p(xs[i])
        )(succ)(0)
    )(xs);
};

// splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
const splitArrow = f =>
    // The functions f and g combined in a single function
    // from a tuple (x, y) to a tuple of (f(x), g(y))
    g => tpl => Tuple(f(tpl[0]))(
        g(tpl[1])
    );

// splitAt :: Int -> [a] -> ([a], [a])
const splitAt = n => xs => 
  Tuple(xs.slice(0, n))(
      xs.slice(n)
  );

// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) -> String -> [String]
const splitBy = p =>
    // Splitting not on a delimiter, but wherever the relationship
    // between consecutive terms matches a binary predicate.
    xs => (xs.length < 2) ? [xs] : (() => {
        const
            bln = 'string' === typeof xs,
            ys = bln ? xs.split('') : xs,
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
            ps => ps.map(cs => ''.concat.apply('', cs))
        ) : x => x)(parts[0].concat([parts[1]]));
    })();

// splitFileName :: FilePath -> (String, String)
const splitFileName = strPath =>
    // Tuple of directory and file name, derived from file path.
    // Inverse of combine.
    ('' !== strPath) ? (
         ('/' !== strPath[strPath.length - 1]) ? (() => {
            const
                xs = strPath.split('/'),
                stem = xs.slice(0, -1);
            return stem.length > 0 ? (
                Tuple(stem.join('/') + '/')(xs.slice(-1)[0])
            ) : Tuple('./')(xs.slice(-1)[0]);
        })() : Tuple(strPath)('')
    ) : Tuple('./')('');

// splitOn("\r\n", "a\r\nb\r\nd\r\ne") //--> ["a", "b", "d", "e"]
// splitOn("aaa", "aaaXaaaXaaaXaaa") //--> ["", "X", "X", "X", ""]
// splitOn("x", "x") //--> ["", ""]
// splitOn([3, 1], [1,2,3,1,2,3,1,2,3]) //--> [[1,2],[2],[2,3]]
// splitOn :: [a] -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = pat => src =>
    /* A list of the strings delimited by
       instances of a given pattern in s. */
    ('string' === typeof src) ? (
        src.split(pat)
    ) : (() => {
        const
            lng = pat.length,
            tpl = findIndices(matching(pat))(src).reduce(
                (a, i) => Tuple(
                    fst(a).concat([src.slice(snd(a), i)])
                )(lng + i),
                Tuple([])(0),
            );
        return fst(tpl).concat([src.slice(snd(tpl))]);
    })();

// splitRegex :: Regex -> String -> [String]
const splitRegex = needle => haystack =>
    haystack.split(needle);

// sqrt :: Num -> Num
const sqrt = n =>
    (0 <= n) ? Math.sqrt(n) : undefined;

// sqrtLR :: Num -> Either String Num
const sqrtLR = n =>
    0 > n ? (
        Left('Square root of negative number: ' + n)
    ) : Right(Math.sqrt(n));

// sqrtMay :: Num -> Maybe Num
const sqrtMay = n =>
    0 > n ? (
        Nothing()
    ) : Just(Math.sqrt(n));

// str :: a -> String
const str = x =>
    x.toString();

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
            blnString = 'string' === typeof pfx,
            [xs, ys] = blnString ? (
                [pfx.split(''), s.split('')]
            ) : [pfx, s];
        const
            sp_ = (xs, ys) => 0 === xs.length ? (
                Just(blnString ? ys.join('') : ys)
            ) : (0 === ys.length || xs[0] !== ys[0]) ? (
                Nothing()
            ) : sp_(xs.slice(1), ys.slice(1));
        return sp_(xs, ys);
    };

// stripStart :: String -> String
const stripStart = s =>
    s.trimStart();

// subTreeAtPath :: Tree String -> [String] -> Maybe Tree String
const subTreeAtPath = tree => path => {
    const go = (nest, xs) =>
        0 < nest.length && 0 < xs.length ? (() => {
            const h = xs[0];
            return bindMay(find(t => h === t.root, nest))(
                t => 1 < xs.length ? (
                    go(t.nest, xs.slice(1))
                ) : Just(t)
            );
        })() : Nothing();
    return go([tree], path);
};

// subsequences([1,2,3]) -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// subsequences('abc') -> ["","a","b","ab","c","ac","bc","abc"]
// subsequences :: [a] -> [[a]]
// subsequences :: String -> [String]
const subsequences = xs => {
    const
        // nonEmptySubsequences :: [a] -> [[a]]
        nonEmptySubsequences = xxs => {
            if (xxs.length < 1) return [];
            const [x, xs] = [xxs[0], xxs.slice(1)];
            const f = (r, ys) => cons(ys)(cons(cons(x)(ys))(r));
            return cons([x])(nonEmptySubsequences(xs)
                .reduceRight(f, []));
        };
    return ('string' === typeof xs) ? (
        cons('')(nonEmptySubsequences(xs.split(''))
            .map(x => ''.concat.apply('', x))) // map(concat)
    ) : cons([])(nonEmptySubsequences(xs));
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
    return 'number' !== t ? (() => {
        const [i, mx] = [x, maxBound(x)].map(fromEnum);
        return i < mx ? (
            toEnum(x)(1 + i)
        ) : Error('succ :: enum out of range.')
    })() : x < Number.MAX_SAFE_INTEGER ? (
        1 + x
    ) : Error('succ :: Num out of range.')
};

// succMay :: Enum a => a -> Maybe a
const succMay = x => {
    const t = typeof x;
    return 'number' !== t ? (() => {
        const [i, mx] = [x, maxBound(x)].map(fromEnum);
        return i < mx ? (
            Just(toEnum(x)(1 + i))
        ) : Nothing()
    })() : x < Number.MAX_SAFE_INTEGER ? (
        Just(1 + x)
    ) : Nothing()
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
    0 < xs.length ? xs.slice(1) : [];

// tailMay :: [a] -> Maybe [a]
const tailMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(1))
    ) : Nothing();

// tails :: [a] -> [[a]]
const tails = xs => {
    const
        es = ('string' === typeof xs) ? (
            xs.split('')
        ) : xs;
    return es.map((_, i) => es.slice(i))
        .concat([
            []
        ]);
};

// take :: Int -> [a] -> [a]
// take :: Int -> String -> String
const take = n =>
    // The first n elements of a list,
    // string of characters, or stream.
    xs => 'GeneratorFunction' !== xs
    .constructor.constructor.name ? (
        xs.slice(0, n)
    ) : [].concat.apply([], Array.from({
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
const takeBaseName = strPath =>
  ('' !== strPath) ? (
    ('/' !== strPath[strPath.length - 1]) ? (() => {
      const fn = strPath.split('/').slice(-1)[0];
      return fn.includes('.') ? (
        fn.split('.').slice(0, -1).join('.')
      ) : fn;
    })() : ''
  ) : '';

// First n members of an infinite cycle of xs
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
        ).slice(0, n)
    };

// takeDirectory :: FilePath -> FilePath
const takeDirectory = strPath =>
    ('' !== strPath) ? (() => {
        const xs = (strPath.split('/'))
            .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/')
        ) : '.';
    })() : '.';

// take N Members of an infinite cycle of xs, starting from index I
// take N Members of an infinite cycle of xs, starting from index I
// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = n => i => xs => {
    const
        lng = xs.length,
        m = n + i;
    return drop(i)(
        take(m)(
            lng >= m ? (
                xs
            ) : concat(
                replicate(Math.ceil(m / lng)(
                    xs
                ))
            )
        )
    )
};

// takeExtension :: FilePath -> String
const takeExtension = fp => {
    const fs = fp.split('/');
    return 0 < fs.length ? (() => {
        const
            xs = fs.slice(-1)[0].split('.'),
            ext = 1 < xs.length ? (
                xs.slice(-1)[0]
            ) : '';
        return '.' + ext;
    })() : '';
};

// takeFileName :: FilePath -> FilePath
const takeFileName = strPath =>
    '' !== strPath ? (
        ('/' !== strPath[strPath.length - 1]) ? (
            strPath.split('/')
            .slice(-1)[0]
        ) : ''
    ) : '';

// takeFromThenTo :: Int -> Int -> Int -> [a] -> [a]
const takeFromThenTo = a => b => z => xs => {
    const ixs = enumFromThenTo(a)(b)(z);
    return 'GeneratorFunction' !== xs.constructor.constructor.name ? (
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
const takeWhile = p => xs =>
    xs.constructor.constructor.name !==
    'GeneratorFunction' ? (() => {
        const lng = xs.length;
        return 0 < lng ? xs.slice(
            0,
            until(i => lng === i || !p(xs[i]))(
                i => 1 + i
            )(0)
        ) : [];
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
        v = nxt.value
    }
    return ys;
};

// takeWhileR :: (a -> Bool) -> [a] -> [a]
const takeWhileR = p => xs => {
    let i = xs.length;
    while (i-- && p(xs[i])) {}
    return xs.slice(i + 1);
};

// taskPaperDateString :: Date -> String
const taskPaperDateString = dte => {
    const [d, t] = iso8601Local(new Date()).split('T');
    return [d, t.slice(0, 5)].join(' ');
};

// then (>>) :: Monad m => m a -> m b -> m b
const then = ma => mb =>
    (Array.isArray(ma) ? (
        thenList
    ) : isMaybe(ma) ? (
        thenMay
    ) : thenIO)(
        ...[ma, mb]
    )

// thenIO (>>) :: IO a -> IO b -> IO b
const thenIO = ma => mb => mb;

// thenList (>>) :: [a] -> [b] -> [b]
const thenList = xs => ys =>
    xs.flatMap(_ => ys);

// thenMay (>>) :: Maybe a -> Maybe b -> Maybe b
const thenMay = mbx => mby =>
    mbx.Nothing ? mbx : mby;

// The first argument is a sample of the type
// allowing the function to make the right mapping
// toEnum :: a -> Int -> a
const toEnum = e => x =>
    ({
        'number': Number,
        'string': String.fromCodePoint,
        'boolean': Boolean,
        'object': v => e.min + v
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
    // Sentence case - initial string capitalized 
    // and rest lowercase.
    (0 < s.length) ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;

// NB this does not model any regional or cultural conventions.
// It simply simply capitalizes the first character of each word.
// toTitle :: String -> String
const toTitle = s =>
    regexMatches(/(\w)(\w*)(\b[\W]*|$)/g)(s)
    .map(ms => ms[1].toUpperCase() + ms[2].toLowerCase() + ms[3])
    .join('');

// toUpper :: String -> String
const toUpper = s =>
    s.toLocaleUpperCase();

// If some of the rows are shorter than the following rows, 
// their elements are skipped:
// > transpose [[10,11],[20],[],[30,31,32]] == [[10,20,30],[11,31],[32]]
// transpose :: [[a]] -> [[a]]
const transpose = xss => {
    const go = xss =>
        0 < xss.length ? (() => {
            const
                h = xss[0],
                t = xss.slice(1);
            return 0 < h.length ? (
                [
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
                )))
            ) : go(t);
        })() : [];
    return go(xss);
};

// transpose_ :: [[a]] -> [[a]]
const transpose_ = rows =>
    // The columns of the input transposed
    // into new rows.
    // Simpler version of transpose, assuming input 
    // rows of even length.
    0 < rows.length ? rows[0].map(
        (x, i) => rows.flatMap(
            x => x[i]
        )
    ) : [];

// traverse :: (Applicative f, Traversable t) => 
// (a -> f b) -> t a -> f (t b)
const traverse = f => tx => {
    const t = tx.type;
    return (
        undefined !== t ? (
            'Either' === t ? (
                traverseLR
            ) : 'Maybe' === t ? (
                traverseMay
            ) : 'Node' === t ? (
                traverseTree
            ) : 'Tuple' === t ? (
                traverseTuple
            ) : traverseList
        ) : traverseList
    )(f)(tx)
};

// instance Traversable (Either a) where
//    traverse _ (Left x) = pure (Left x)
//    traverse f (Right y) = Right <$> f y
// traverseLR :: Applicative f => 
// (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = f => lr =>
    undefined !== lr.Left ? (
        [lr]
    ) : fmap(Right)(
        f(lr.Right)
    );

// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
const traverseList = f =>
    // Collected results of mapping each element
    // of a structure to an action, and evaluating
    // these actions from left to right.
    xs => 0 < xs.length ? (() => {
        const
            vLast = f(xs.slice(-1)[0]),
            t = vLast.type || 'List';
        return xs.slice(0, -1).reduceRight(
            (ys, x) => liftA2(cons)(f(x))(ys),
            liftA2(cons)(vLast)(pureT(t)([]))
        );
    })() : [
        []
    ];

// traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMay = f => mb =>
    mb.Nothing ? (
        [mb]
    ) : fmap(Just)(
        f(mb.Just)
    );

// traverseTree :: Applicative f => (a -> f b) -> Tree a -> f (Tree b)
const traverseTree = f => {
    // traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
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
            'object' !== typeof x ? [] : (
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
    const go = ([root, nest]) =>
        Node(root)(nest.map(go));
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
            1 < lng ? (
                Left(
                    'Ambiguous structure :: ' +
                    lng.toString() + (
                        ' multiple sublists in:\n  "' +
                        dct.name + (
                            '":\n' + bulleted('    ')(
                                unlines(lists.map(fst))
                            )
                        )
                    )
                )
            ) : (() => {
                const [nestName, xs] = lists[0];
                return bindLR(traverseList(go)(xs))(
                    xs => Right(
                        Node(
                            Object.assign(
                                deleteKey(nestName)(
                                    dct
                                ), {
                                    'List title': nestName
                                }
                            )
                        )(xs)
                    )
                );
            })()
        ) : Right(Node(dct)([]))
    };
    return go(dict);
};

// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
  const nest = tree.nest;
  return (0 < nest.length) ? (
    nest.flatMap(treeLeaves)
  ) : [tree];
};

// A list of all nodes in the tree which match 
// a predicate p.
// For the first match only, see findTree.
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = p => {
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
                bindLR(showMenuLR(!blnMore)(strTitle)(menu))(
                    ks => {
                        const k = ks[0];
                        return maybe(
                            Left(k + ': not found in ' +
                                JSON.stringify(ks)
                            )
                        )(Right)(
                            bindMay(find(x => k === x.root)(subs))(
                                chosen => Just(
                                    isNull(chosen.nest) ? (
                                        ks // Choice made in leaf menu.
                                    ) : go(chosen)
                                )
                            )
                        );
                    }
                )
            )
        )(Tuple(true)([]))[1]
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
                        const k0 = ks[0];
                        return maybe(
                            Left(
                                k0 + ': not found in ' +
                                JSON.stringify(ks)
                            )
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
        )(Tuple(true)([]))[1]
    };
    return go;
};

// truncate :: Num -> Int
const truncate = x =>
    'Ratio' === x.type ? (
        properFracRatio(x)[0]
    ) : properFraction(x)[0];

// tupleFromList :: [a] -> (a, a ...)
const tupleFromList = xs =>
    TupleN(...xs);

// typeName :: a -> String
const typeName = v => {
    const t = typeof v;
    return 'object' === t ? (
        Array.isArray(v) ? (
            'List'
        ) : null !== v ? (
            v.type || 'Dict'
        ) : 'Bottom'
    ) : {
        'boolean': 'Bool',
        'number': 'Num',
        'string': 'String',
        'function' : '(a -> b)'
    } [t] || 'Bottom';
};

// unQuoted :: String -> String
const unQuoted = s =>
    dropAround(x => 34 === x.codePointAt(0))(
        s
    );

// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    // Just a tuple of the head of xs and its tail, 
    // Or Nothing if xs is an empty list.
    const lng = length(xs);
    return (0 < lng) ? (
        Infinity > lng ? (
            Just(Tuple(xs[0])(xs.slice(1))) // Finite list
        ) : (() => {
            const nxt = take(1)(xs);
            return 0 < nxt.length ? (
                Just(Tuple(nxt[0])(xs))
            ) : Nothing();
        })() // Lazy generator
    ) : Nothing();
};

// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f =>
    // A function over a pair, derived
    // from a curried function.
    (...args) => {
        const
            xy = 1 < args.length ? (
                args
            ) : args[0];
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

// | Build a forest from a list of seed values
// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = f => x =>
    xs.map(unfoldTree(f));

// | Build a tree from a seed value
// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = f => b => {
    const tpl = f(b);
    return Node(tpl[0])(
        unfoldForest(f)(
            tpl[1]
        )
    );
};

// unfoldl(x => 0 !== x ? Just([x - 1, x]) : Nothing(), 10);
// --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
const unfoldl = f => v => {
    // Dual to reduce or foldl.
    // Where these reduce a list to a summary value, unfoldl
    // builds a list from a seed value.
    // Where f returns Just(a, b), a is appended to the list,
    // and the residual b is used as the argument for the next
    // application of f.
    // Where f returns Nothing, the completed list is returned.
    let
        xr = [v, v],
        xs = [];
    while (true) {
        const mb = f(xr[0]);
        if (mb.Nothing) {
            return xs
        } else {
            xr = mb.Just;
            xs = [xr[1]].concat(xs);
        }
    }
};

// The 'unfoldr' function is a *dual* to 'foldr': while 'foldr'
// reduces a list to a summary value, 'unfoldr' builds a list from
// a seed value.  The function takes the element and returns 'Nothing'
// if it is done producing the list or returns 'Just' @(a,b)@, in which
// case, @a@ is a prepended to the list and @b@ is used as the next
// element in a recursive call.
//
// unfoldr(x => 0 !== x ? Just([x, x - 1]) : Nothing(), 10);
// --> [10,9,8,7,6,5,4,3,2,1]

// (x => Maybe [value, remainder] -> initial value -> values
// unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
const unfoldr = f => v => {
    let
        xr = [v, v],
        xs = [];
    while (true) {
        const mb = f(xr[1]);
        if (mb.Nothing) {
            return xs
        } else {
            xr = mb.Just;
            xs.push(xr[0])
        }
    }
};

// union :: [a] -> [a] -> [a]
const union = xs => ys =>
  unionBy(a => b => a === b)(
      xs
  )(ys);

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
    xs.join('\n');

// If the list is empty returns Nothing, otherwise returns 
// Just the init and the last.
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    (0 < xs.length) ? (
        Just(Tuple(xs.slice(0, -1))(xs.slice(-1)[0]))
    ) : Nothing();

// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = p => f => x => {
    let v = x;
    while (!p(v)) v = f(v);
    return v;
};

// unwords :: [String] -> String
const unwords = xs =>
    // A space-separated string derived
    // from a list of words.
    xs.join(' ');

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
        (a, x) => TupleN.apply(null, [0, 1, 2].map(
            i => a[i].concat(x[i])
        )),
        TupleN([], [], [])
    );

// unzip4 :: [(a,b,c,d)] -> ([a],[b],[c],[d])
const unzip4 = wxyzs =>
    wxyzs.reduce(
        (a, x) => TupleN.apply(null, [0, 1, 2, 3].map(
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
        mean = xs.reduce((a, b) => a + b, 0) / lng;
    return xs.reduce(
        (a, b) => a + Math.pow(b - mean, 2),
        0
    ) / (lng - 1);
};

// words :: String -> [String]
const words = s => s.split(/\s+/);

// zip :: [a] -> [b] -> [(a, b)]
const zip = xs =>
    // Use of `take` and `length` here allows for zipping with non-finite 
    // lists - i.e. generators like cycle, repeat, iterate.
    ys => {
        const
            lng = Math.min(length(xs), length(ys)),
            vs = take(lng)(ys);
        return take(lng)(xs).map(
            (x, i) => Tuple(x)(vs[i])
        );
    };

// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = xs => ys => zs =>
    xs.slice(0, Math.min(length(xs), length(ys), length(zs)))
    .map((x, i) => TupleN(x, ys[i], zs[i]));

// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = ws => xs => ys => zs =>
    ws.slice(0, minimum([ws, xs, ys, zs].map(length)))
    .map((w, i) => TupleN(w, xs[i], ys[i], zs[i]));

// zipGen :: Gen [a] -> Gen [b] -> Gen [(a, b)]
const zipGen = ga => gb => {
    function* go(ma, mb) {
        let
            a = ma,
            b = mb;
        while(!a.Nothing && !b.Nothing) {
            let
                ta = a.Just,
                tb = b.Just;
            yield(
                Tuple(fst(ta))(
                    fst(tb)
                )
            );
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    }
    return go(uncons(ga), uncons(gb));
};

// zipList :: [a] -> [b] -> [(a, b)]
const zipList = xs => ys => {
    const
        lng = Math.min(length(xs), length(ys)),
        vs = take(lng)(ys);
    return take(lng)(xs)
        .map((x, i) => Tuple(x)(vs[i]));
};

// zipN :: [a] -> [b] -> ... -> [(a, b ...)]
function zipN() {
    const args = Array.from(arguments);
    return 1 < args.length ? map(
        (x, i) => TupleN(...map(y => y[i], args)),
        take(
            Math.min(...map(length, args)),
            args[0]
        )
    ) : args;
}

// Use of `take` and `length` here allows zipping with non-finite lists
// i.e. generators like cycle, repeat, iterate.
// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = f => xs => ys => {
    const lng = Math.min(length(xs), length(ys));
    return Infinity > lng ? (() => {
       const
            as = take(lng)(xs),
            bs = take(lng)(ys);
        return Array.from({
            length: lng
        }, (_, i) => f(as[i])(
            bs[i]
        ));
    })() : zipWithGen(f)(xs)(ys);
};

// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
const zipWith3 = f => xs => ys => zs =>
    Array.from({
        length: Math.min(length(xs), length(ys), length(zs))
    }, (_, i) => f(xs[i])(ys[i])(zs[i]));

// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = f => ws => xs => ys => zs =>
    Array.from({
        length: minimum([ws, xs, ys, zs].map(length))
    }, (_, i) => f(ws[i])(xs[i])(ys[i])(zs[i]));

// zipWithGen :: (a -> b -> c) -> 
// Gen [a] -> Gen [b] -> Gen [c]
const zipWithGen = f => ga => gb => {
    function* go(ma, mb) {
        let
            a = ma,
            b = mb;
        while (!a.Nothing && !b.Nothing) {
            let
                ta = a.Just,
                tb = b.Just
            yield(f(fst(ta))(fst(tb)));
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    }
    return go(uncons(ga), uncons(gb));
};

// zipWithList :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWithList = f =>
    // A list constructed by zipping with a
    // custom function, rather than with the
    // default tuple constructor.
    xs => ys => {
        const
            lng = Math.min(length(xs), length(ys)),
            vs = take(lng)(ys);
        return take(lng)(xs)
        .map((x, i) => f(x)(vs[i]));
    };

// zipWithM :: Applicative m => (a -> b -> m c) -> [a] -> [b] -> m [c]
const zipWithM = f => 
    xs => ys =>
        sequenceA(
            zipWith(f)(xs)(ys)
        );

// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
function zipWithN() {
    const
        args = Array.from(arguments),
        rows = args.slice(1),
        f = args[0];
    return 1 < rows.length ? map(
        i => f(...map(r => r[i], rows)),
        enumFromTo(
            0,
            Math.min(...map(length, rows)) -1,
        )
    ) : rows;
}

// or

// zipWithN :: (a -> b -> ... -> c) -> ([a], [b] ...) -> [c]
// const zipWithN = (f, tplLists) =>
//     map(x => f(...Array.from(x)),
//         zipN(...Array.from(tplLists))
//     );