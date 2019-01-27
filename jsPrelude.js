// JS PRELUDE – GENERIC FUNCTIONS

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
const Node = (v, xs) => ({
    type: 'Node',
    root: v, // any type of value (consistent across tree)
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
const Tuple = (a, b) => ({
  type: 'Tuple',
  '0': a,
  '1': b,
  length: 2
});

// TupleN :: a -> b ...  -> (a, b ... )
function TupleN() {
    const
        args = Array.from(arguments),
        lng = args.length;
    return lng > 1 ? Object.assign(
        args.reduce((a, x, i) => Object.assign(a, {
            [i]: x
        }), {
            type: 'Tuple' + (2 < lng ? lng.toString() : ''),
            length: lng
        })
    ) : args[0];
};

// abs :: Num -> Num
const abs = Math.abs;

// Determines whether all elements of the structure 
// satisfy the predicate.
// all :: (a -> Bool) -> [a] -> Bool
const all = (p, xs) => xs.every(p);

// | The conjunction of a container of Bools. 
// True unless any contained value is false.
// and :: [Bool] -> Bool
const and = xs =>
    xs.every(Boolean);

// | True if any contained element satisfies the predicate.
// any :: (a -> Bool) -> [a] -> Bool
const any = (p, xs) => xs.some(p);

// Applies wrapped functions to wrapped values, 
// for example applying a list of functions to a list of values
// or applying Just(f) to Just(x), Right(f) to Right(x), etc
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = (mf, mx) => {
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
    )(mf, mx);
};

// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = (flr, lr) => {
    const pf = (undefined === flr.Left);
    return pf && (undefined === lr.Left) ? (
        Right(flr.Right(lr.Right))
    ) : (pf ? lr : flr);
};

// e.g. [(*2),(/2), sqrt] <*> [1,2,3]
// -->  ap([dbl, hlf, root], [1, 2, 3])
// -->  [2,4,6,0.5,1,1.5,1,1.4142135623730951,1.7320508075688772]

// Each member of a list of functions applied to each
// of a list of arguments, deriving a list of new values.
// apList (<*>) :: [(a -> b)] -> [a] -> [b]
const apList = (fs, xs) => //
    fs.reduce((a, f) => a.concat(
        xs.reduce((a, x) => a.concat([f(x)]), [])
    ), []);

// Maybe f applied to Maybe x, deriving a Maybe y
// apMay (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMay = (mf, mx) =>
    mf.Nothing || mx.Nothing ? (
        Nothing()
    ) : Just(mf.Just(mx.Just));

// apTree (<*>) :: Tree (a -> b) -> Tree a -> Tree b
const apTree = (tf, tx) => {
    const go = t =>
        Node(
            t.root(tx.root),
            tx.nest.map(
                curry(fmapTree)(t.root)
            ).concat(t.nest.map(go))
        );
    return go(tf);
};

// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = (tf, tx) =>
    Tuple(
        mappend(tf[0], tx[0]),
        tf[1](tx[1])
    );

// append (++) :: [a] -> [a] -> [a]
// append (++) :: String -> String -> String
const append = (xs, ys) => xs.concat(ys);

// appendGen (++) :: Gen [a] -> Gen [a] -> Gen [a]
function* appendGen(xs, ys) {
    for (let vs of [xs, ys]) {
        let nxt = vs.next()
        while (!nxt.done) {
            yield nxt.value
            nxt = vs.next()
        }
    }
};

// apply ($) :: (a -> b) -> a -> b
const apply = (f, x) => f(x);

// Epsilon -> Real -> Ratio
// approxRatio :: Real -> Real -> Ratio
const approxRatio = eps => n => {
  const
    gcde = (e, x, y) => {
      const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
      return _gcd(abs(x), abs(y));
    },
    c = gcde(Boolean(eps) ? eps : (1 / 10000), 1, abs(n)),
    r = ratio(quot(abs(n), c), quot(1, c));
  return {
    type: 'Ratio',
    n: r.n * signum(n),
    d: r.d
  };
};

// argvLength :: Function -> Int
const argvLength = f => f.length;

// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.entries(m).map(
        kv => Tuple(...kv)
    );

// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = (m, mf) =>
    (Array.isArray(m) ? (
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
    })()(m, mf));

// bindFn :: (a -> b) -> (b -> c) -> a -> c
const bindFn = (m, mf) =>
    x => mf(y => m(x, y))(x);

// bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
const bindLR = (m, mf) =>
    undefined !== m.Left ? (
        m
    ) : mf(m.Right);

// bindList (>>=) :: [a] -> (a -> [b]) -> [b]
const bindList = (xs, mf) => 
  [].concat.apply([], xs.map(mf));

// bindMay (>>=) :: Maybe a -> (a -> Maybe b) -> Maybe b
const bindMay = (mb, mf) =>
    mb.Nothing ? mb : mf(mb.Just);

// bindTuple (>>=) :: Monoid a => (a, a) -> (a -> (a, b)) -> (a, b)
const bindTuple = (tpl, f) => {
    const t2 = f(tpl[1]);
    return Tuple(
        mappend(tpl[0], t2[0]),
        t2[1]
    );
};

// bool :: a -> a -> Bool -> a
const bool = f => t => p =>
    p ? t : f;

// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = (p, xs) => {
  for (var i = 0, lng = xs.length; (i < lng) && !p(xs[i]); i++) {};
  return Tuple(xs.slice(0, i), xs.slice(i));
};

// Needle -> Haystack -> (prefix before match, match + rest)
// breakOn :: String -> String -> (String, String)
const breakOn = (pat, src) =>
    0 < pat.length ? (() => {
        const xs = src.split(pat);
        return 1 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src, '');
    })() : undefined;

// breakOnAll "::" ""
// ==> []
// breakOnAll "/" "a/b/c/"
// ==> [("a", "/b/c/"), ("a/b", "/c/"), ("a/b/c", "/")]
// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = (pat, src) =>
    '' !== pat ? (
        src.split(pat)
        .reduce((a, x, i, xs) =>
            0 < i ? (
                a.concat([
                    Tuple(xs.slice(0, i)
                        .join(pat), pat + xs.slice(i)
                        .join(pat)
                    )
                ])
            ) : a, [])
    ) : undefined;

// Needle -> Haystack -> maybe (prefix before match, match + rest)
// breakOnMay :: String -> String -> Maybe (String, String)
const breakOnMay = (pat, src) =>
    Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return Just(0 < xs.length ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src, ''));
    })() : Nothing();

// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = (xs, ys) =>
    apList(xs.map(x => y => Tuple(x, y)), ys);

// List of (Predicate, value) tuples -> Default value 
//                        -> Value to test -> Output value
// caseOf :: [(a -> Bool, b)] -> b -> a ->  b
const caseOf = (pvs, otherwise, x) => {
    const mb = pvs.reduce((a, pv) =>
        a.Nothing ? (
            pv[0](x) ? Just(pv[1]) : a
        ) : a, Nothing());
    return mb.Nothing ? otherwise : mb.Just;
};

// catMaybes :: [Maybe a] -> [a]
const catMaybes = mbs =>
    concatMap(m => m.Nothing ? [] : [m.Just], mbs);

// The least integer not less than x
// ceiling :: Num -> Int
const ceiling = x => {
    const
      nr = properFraction(x),
      n = nr[0]
    return 0 < nr[1] ? 1 + n : n;
};

// Size of space -> filler Char -> String -> Centered String
// center :: Int -> Char -> String -> String
const center = (n, c, s) => {
  const
    qr = quotRem(n - s.length, 2),
    q = qr[0];
  return replicateString(q, c) +
    s + replicateString(q + qr[1], c);
};

// chars :: String -> [Char]
const chars = s => s.split('');

// chr :: Int -> Char
const chr = String.fromCodePoint;

// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = (n, xs) =>
    enumFromThenTo(0, n - 1, xs.length - 1)
    .reduce(
        (a, i) => a.concat([xs.slice(i, i + n)]),
        []
    );

// compare :: a -> a -> Ordering
const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0);

// comparing :: (a -> b) -> (a -> a -> Ordering)
const comparing = f =>
    (x, y) => {
        const
            a = f(x),
            b = f(y);
        return a < b ? -1 : (a > b ? 1 : 0);
    };

// compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
const compose = (f, g) => x => f(g(x));

// composeList :: [(a -> a)] -> (a -> a)
const composeList = fs =>
    x => fs.reduceRight((a, f) => f(a), x, fs);

// composeListR :: [(a -> a)] -> (a -> a)
const composeListR = fs =>
    x => fs.reduce((a, f) => f(a), x);

// composeR (>>>) :: (a -> b) -> (b -> c) -> a -> c
const composeR = (f, g) => x => f(g(x));

// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    0 < xs.length ? (() => {
        const unit = 'string' !== typeof xs[0] ? (
            []
        ) : '';
        return unit.concat.apply(unit, xs);
    })() : [];

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) =>
    xs.reduce((a, x) => a.concat(f(x)), []);

// cons :: a -> [a] -> [a]
const cons = (x, xs) =>
    Array.isArray(xs) ? (
        [x].concat(xs)
    ) : 'GeneratorFunction' !== xs.constructor.constructor.name ? (
        x + xs
    ) : ( // Existing generator wrapped with one additional element
        function* () {
            yield x;
            let nxt = xs.next()
            while (!nxt.done) {
                yield nxt.value;
                nxt = xs.next();
            }
        }
    )();

// const :: a -> b -> a
const const_ = k => _ => k;

// Flexibly handles two or more arguments, applying
// the function directly if the argument array
// is long enough for complete saturation,
// or recursing with a concatenation of any existing and
// newly supplied arguments, if gaps remain.
// curry :: ((a, b) -> c) -> a -> b -> c
const curry = (f, ...args) => {
    const
        n = f.length,
        go = xs => n <= xs.length ? (
            f(...xs)
        ) : function() {
            return go(xs.concat(Array.from(arguments)));
        };
    return go(args);
};

// Simpler 2 argument only version of curry
// curry2 :: ((a, b) -> c) -> a -> b -> c
const curry2 = f => a => b => f(a, b);

// curry3 :: ((a, b, c) -> d) -> a -> b -> c -> d
const curry3 = f =>
    a => b => c => f(a, b, c);

// cycle :: [a] -> Generator [a]
function* cycle(xs) {
    const lng = xs.length;
    let i = 0;
    while (true) {
        yield(xs[i])
        i = (1 + i) % lng;
    }
}

// degrees :: Float x => Radians x -> Degrees x
const degrees = r =>
    (180 / Math.PI) * r;

// xs with first instance of x (if any) removed
// delete :: Eq a => a -> [a] -> [a]
const delete_ = (x, xs) => {
    const go = xs => {
        return 0 < xs.length ? (
            (x === xs[0]) ? (
                xs.slice(1)
            ) : [xs[0]].concat(go(xs.slice(1)))
        ) : [];
    }
    return go(xs);
};

// deleteAt :: Int -> [a] -> [a]
const deleteAt = (i, xs) =>
    i <= xs.length ? (() => {
        const lr = splitAt(i, xs);
        return lr[0].concat(lr[1].slice(1));
    })() : xs;

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = (fEq, x, xs) => {
    const go = xs => 0 < xs.length ? (
        fEq(x, xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(go(xs.slice(1)))
    ) : [];
    return go(xs);
};

// deleteFirst :: a -> [a] -> [a]
const deleteFirst = (x, xs) => {
    const go = xs => 0 < xs.length ? (
        x === xs[0] ? (
            xs.slice(1)
        ) : [xs[0]].concat(go(xs.slice(1)))
    ) : [];
    return go(xs);
};

// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = (fnEq, xs, ys) =>
    ys.reduce((x, y) => deleteBy(fnEq, y, x), xs);

// deleteMap :: k -> Dict -> Dict
const deleteMap = (k, dct) =>
    (delete dct[k], dct);

// difference :: Eq a => [a] -> [a] -> [a]
const difference = (xs, ys) =>
    xs.filter(x => -1 === ys.indexOf(x));

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
const div = (x, y) => Math.floor(x / y);

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

// drawForest :: [Tree String] -> String
const drawForest = trees =>
    trees.map(drawTree).join('\n');

// drawTree :: Tree String -> String
const drawTree = tree =>
    unlines(draw(tree));

// drop :: Int -> [a] -> [a]
// drop :: Int -> Generator [a] -> Generator [a]
// drop :: Int -> String -> String
const drop = (n, xs) =>
    Infinity > length(xs) ? (
        xs.slice(n)
    ) : (take(n, xs), xs);

// dropAround :: (a -> Bool) -> [a] -> [a]
// dropAround :: (Char -> Bool) -> String -> String
const dropAround = (p, xs) => dropWhile(p, dropWhileEnd(p, xs));

// dropFileName :: FilePath -> FilePath
const dropFileName = strPath =>
    '' !== strPath ? (() => {
        const
          xs = (strPath.split('/'))
          .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/') + '/'
        ) : './';
    })() : './';

// dropLength :: [a] -> [b] -> [b]
const dropLength = (xs, ys) => {
    const go = (x, y) =>
        0 < x.length ? (
            0 < y.length ? (
                go(x.slice(1), y.slice(1))
            ) : []
        ) : y;
    return go(xs, ys);
};

// dropLengthMaybe :: [a] -> [b] -> Maybe [b]
const dropLengthMaybe = (xs, ys) => {
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
const dropWhile = (p, xs) => {
    const lng = xs.length;
    return 0 < lng ? xs.slice(
        until(
            i => i === lng || !p(xs[i]),
            i => 1 + i,
            0
        )
    ) : [];
};

// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
// dropWhileEnd :: (Char -> Bool) -> String -> String
const dropWhileEnd = (p, xs) => {
    let i = xs.length;
    while (i-- && p(xs[i])) {}
    return xs.slice(0, i + 1);
};

// dropWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const dropWhileGen = (p, xs) => {
    let
        nxt = xs.next(),
        v = nxt.value;
    while (!nxt.done && p(v)) {
        nxt = xs.next();
        v = nxt.value;
    }
    return cons(v, xs);
};

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = (fl, fr, e) =>
    'Either' === e.type ? (
        undefined !== e.Left ? (
            fl(e.Left)
        ) : fr(e.Right)
    ) : undefined;

// elem :: Eq a => a -> [a] -> Bool
const elem = (x, xs) => xs.includes(x);

// If x is a dictionary, then the Int is read as an 
// index into the lexically sorted keys of the Dict, 
// returning a Maybe (Key, Value) pair.
// If x is a list, then returns a Maybe a.
// (In either case, returns Nothing for an Int out of range)
// elemAtMay :: Int -> Dict -> Maybe (String, a)
// elemAtMay :: Int -> [a] -> Maybe a
const elemAtMay = (i, x) => {
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
const elemIndex = (x, xs) => {
    const i = xs.indexOf(x);
    return -1 === i ? (
        Nothing()
    ) : Just(i);
};

// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = (x, xs) =>
    concatMap((y, i) => y === x ? (
        [i]
    ) : [], xs);

// elems :: Map k a -> [a]
// elems :: Set a -> [a]
const elems = x =>
    'Set' !== x.constructor.name ? (
        Object.values(x)
    ) : Array.from(x.values());

// enumFrom :: Enum a => a -> [a]
function* enumFrom(x) {
    let v = x;
    while (true) {
        yield v;
        v = succ(v);
    }
}

// enumFromThenTo :: Int -> Int -> Int -> [Int]
const enumFromThenTo = (x1, x2, y) => {
    const d = x2 - x1;
    return Array.from({
        length: Math.floor(y - x2) / d + 2
    }, (_, i) => x1 + (d * i));
};

// enumFromThenToChar :: Char -> Char -> Char -> [Char]
const enumFromThenToChar = (x1, x2, y) => {
    const [i1, i2, iY] = Array.from([x1, x2, y])
        .map(x => x.charCodeAt(0)),
        d = i2 - i1;
    return Array.from({
        length: (Math.floor(iY - i2) / d) + 2
    }, (_, i) => String.fromCodePoint(i1 + (d * i)));
};

// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) => {
    const
        t = typeof m,
        isNum = 'number' === t,
        isInt = isNum && (0 == m % 1),
        [x, y] = isInt ? (
            [m, n]
        ) : [m, n].map(fromEnum),
        b = x + (isNum ? m - x : 0),
        tp = isInt ? undefined : m instanceof Object ? (
            m.enum
        ) : t;
    return Array.from({
        length: 1 + (y - x)
    }, isInt ? (
        (_, i) => b + i
    ) : (_, i) => toEnum(tp)(b + i))
};

// enumFromToChar :: Char -> Char -> [Char]
const enumFromToChar = (m, n) => {
    const [intM, intN] = [m, n].map(x => x.charCodeAt(0));
    return Array.from({
        length: Math.floor(intN - intM) + 1
    }, (_, i) => String.fromCodePoint(intM + i));
};

// enum_ :: String -> [String] -> Dict
const enum_ = (name, keys, values) =>
    keys.map(
        values ? (
            (k, i) => Tuple(k, values[i])
        ) : Tuple
    ).reduce(
        (a, kv) => Object.assign(
            a, {
                [kv[0]]: {
                    'type': 'enum',
                    'name': name,
                    'key': kv[0],
                    'value': kv[1],
                    'enum': keys
                }
            }
        ), {}
    );

// eq (==) :: Eq a => a -> a -> Bool
const eq = (a, b) => {
    const t = typeof a;
    return t !== typeof b ? (
        false
    ) : 'object' !== t ? (
        'function' !== t ? (
            a === b
        ) : a.toString() === b.toString()
    ) : (() => {
        const aks = Object.keys(a);
        return aks.length !== Object.keys(b).length ? (
            false
        ) : aks.every(k => eq(a[k], b[k]));
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

// Compose a function from a simple value to a tuple of
// the separate outputs of two different functions
// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = (f, g) => x => Tuple(f(x), g(x));

// filePathTree :: filePath -> [Tree String] -> Tree FilePath
const filePathTree = (fpAnchor, trees) => {
    const go = fp => tree => {
        const path = `${fp}/${tree.root}`;
        return Node(
            path,
            tree.nest.map(go(path))
        );
    };
    return Node(fpAnchor, trees.map(go(fpAnchor)));
};

// filter :: (a -> Bool) -> [a] -> [a]
const filter = (f, xs) => xs.filter(f);

// find :: (a -> Bool) -> [a] -> Maybe a
const find = (p, xs) => {
    for (let i = 0, lng = xs.length; i < lng; i++) {
        if (p(xs[i])) return Just(xs[i]);
    }
    return Nothing();
};

//  Takes a predicate function and a list and
//  returns Just( the 0-based index of the first
//  element ) in the list satisfying the predicate
//  or Nothing if there is no such element.
// findIndex(isSpace, "hello world")
//-> {"type":"Maybe","Nothing":false,"Just":5}

// findIndex(even, [3, 5, 7, 8, 9])
//-> {"type":"Maybe","Nothing":false,"Just":3}

// findIndex(isUpper, "all lower case")
//-> {"type":"Maybe","Nothing":true}
// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = (p, xs) => {
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
const findIndexR = (p, xs) => {
    const i = reverse(xs).findIndex(p);
    return -1 !== i ? (
        Just(xs.length - (1 + i))
    ) : Nothing();
};

// findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
//-> {2, 5}
// findIndices :: (a -> Bool) -> [a] -> [Int]
// findIndices :: (String -> Bool) -> String -> [Int]
const findIndices = (p, xs) =>
    concatMap((x, i) => p(x, i, xs) ? (
        [i]
    ) : [], xs);

// The first of any nodes in the tree which match the predicate p
// (For all matches, see treeMatches)
// findTree :: (a -> Bool) -> Tree a -> Maybe Tree a
const findTree = (p, tree) => {
    const go = node =>
        p(node.root) ? (
            Just(node)
        ) : (() => {
            const
                xs = node.nest,
                lng = xs.length;
                
            return 0 < lng ? until(
                tpl => lng <= tpl[0] || !tpl[1].Nothing,
                tpl => Tuple(1 + tpl[0], go(xs[tpl[0]])),
                Tuple(0, Nothing())
            )[1] : Nothing()
        })();
    return go(tree);
};

// Lift a simple function to one which applies to a tuple, 
// transforming only the first item of the tuple
// firstArrow :: (a -> b) -> ((a, c) -> (b, c))
const firstArrow = f => xy => Tuple(f(xy[0]), xy[1]);

// flatten :: NestedList a -> [a]
const flatten = t => {
	const go = x => 
    	Array.isArray(x) ? (
        	[].concat(...x.map(go))
    	) : x;
	return go(t);
};

// The root elements of a tree in pre-order.
// flattenTree :: Tree a -> [a]
const flattenTree = t => {
    const
      go = (xs, x) => [x.root]
      .concat(x.nest.reduceRight(go, xs));
    return go([], t);
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
const fmap = (f, fa) =>
    Array.isArray(fa) ? (
        fa.map(f)
    ) : 'string' !== typeof fa ? (() => {
        const t = fa.type;
        return ('Either' === t ? (
            fmapLR(f, fa)
        ) : 'Maybe' === t ? (
            fmapMay(f, fa)
        ) : 'Node' === t ? (
            fmapTree(f, fa)
        ) : 'Tuple' === t ? (
            fmapTuple(f, fa)
        ) : undefined)
    })() : fa.split('').map(f);

// fmapGen <$> :: (a -> b) -> Gen [a] -> Gen [b]
function* fmapGen(f, gen) {
    let v = take(1, gen);
    while (0 < v.length) {
        yield(f(v[0]))
        v = take(1, gen)
    }
}

// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = (f, lr) =>
    undefined === lr.Left ? (
        Right(f(lr.Right))
    ) : lr;

// fmapMay (<$>) :: (a -> b) -> Maybe a -> Maybe b
const fmapMay = (f, mb) =>
    mb.Nothing ? (
        mb
    ) : Just(f(mb.Just));

// fmapTree :: (a -> b) -> Tree a -> Tree b
const fmapTree = (f, tree) => {
    const go = node => Node(
        f(node.root),
        node.nest.map(go)
    );
    return go(tree);
};

// fmapTuple (<$>) :: (a -> b) -> (a, a) -> (a, b)
const fmapTuple = (f, tpl) =>
    Tuple(tpl[0], f(tpl[1]));

// foldMapTree :: Monoid m => (a -> m) -> Tree a -> m
const foldMapTree = (f, node) => {
    const go = x =>
        0 < x.nest.length ? mappend(
            f(x.root),
            foldl1(mappend, x.nest.map(go))
        ) : f(x.root);
    return go(node);
};

// foldTree :: (a -> [b] -> b) -> Tree a -> b
const foldTree = (f, tree) => {
    const go = node => f(node.root, node.nest.map(go));
    return go(tree);
};

// foldl :: (a -> b -> a) -> a -> [b] -> a
const foldl = (f, a, xs) => xs.reduce(f, a);

// foldl1 :: (a -> a -> a) -> [a] -> a
const foldl1 = (f, xs) =>
    1 < xs.length ? xs.slice(1)
    .reduce(f, xs[0]) : xs[0];

// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = (f, xs) =>
    0 < xs.length ? (
        Just(xs.slice(1)
            .reduce(f, xs[0]))
    ) : Nothing();

// foldlTree :: (b -> a -> b) -> b -> Tree a -> b
const foldlTree = (f, acc, node) => {
  const go = (a, x) =>
    x.nest.reduce(go, f(a, x));
  return go(acc, node);
};

// Note that that the Haskell signature of foldr is different from that of
// foldl - the positions of accumulator and current value are reversed
// foldr :: (a -> b -> b) -> b -> [a] -> b
const foldr = (f, a, xs) => xs.reduceRight(flip(f), a);

// foldr1 :: (a -> a -> a) -> [a] -> a
const foldr1 = (f, xs) =>
    0 < xs.length ? init(xs)
    .reduceRight(f, last(xs)) : [];

// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = (f, xs) =>
    0 < xs.length ? (
        Just(xs.slice(0, -1)
            .reduceRight(f, xs.slice(-1)[0]))
    ) : Nothing();

// fromEnum :: Enum a => a -> Int
const fromEnum = x =>
    typeof x !== 'string' ? (
        x.constructor === Object ? (
            x.value
        ) : parseInt(Number(x))
    ) : x.codePointAt(0);

// | Return the contents of a 'Left'-value or a default value otherwise.
// fromLeft :: a -> Either a b -> a
const fromLeft = (def, lr) =>
  isLeft(lr) ? lr.Left : def;

// fromMaybe :: a -> Maybe a -> a
const fromMaybe = (def, mb) => mb.Nothing ? def : mb.Just;

// | Return the contents of a 'Right'-value or a default value otherwise.
// fromRight :: b -> Either a b -> b
const fromRight = (def, lr) =>
  isRight(lr) ? lr.Right : def;

// fst :: (a, b) -> a
const fst = tpl => tpl[0];

// Abbreviation for quick testing
// ft :: (Int, Int) -> [Int]
const ft = (m, n) =>
    Array.from({
        length: 1 + n - m
    }, (_, i) => m + i);

// gcd :: Int -> Int -> Int
const gcd = (x, y) => {
    const
        _gcd = (a, b) => (0 === b ? a : _gcd(b, a % b)),
        abs = Math.abs;
    return _gcd(abs(x), abs(y));
};

// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = (xs, i) =>
    (i < xs.length && 0 <= i) ? Just(xs[i]) : Nothing();

// group :: Eq a => [a] -> [[a]]
const group = xs => groupBy((a, b) => a === b, xs);

// Typical usage: groupBy(on(eq, f), xs)
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = (f, xs) => {
    const tpl = xs.slice(1)
        .reduce((a, x) => {
            const h = a[1].length > 0 ? a[1][0] : undefined;
            return (undefined !== h) && f(h, x) ? (
                Tuple(a[0], a[1].concat([x]))
            ) : Tuple(a[0].concat([a[1]]), [x]);
        }, Tuple([], 0 < xs.length ? [xs[0]] : []));
    return tpl[0].concat([tpl[1]]);
};

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
const groupSortOn = (f, xs) => {
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
    return groupBy(
            (p, q) => p[0] === q[0],
            sortBy(
                mappendComparing(
                    // functions that access pre-calculated values by position
                    // in the decorated ('Schwartzian') version of xs
                    zip(fs.map((_, i) => x => x[i]), bs)
                ), xs.map( // xs decorated with precalculated key function values
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
const gt = (x, y) =>
    'Tuple' === x.type ? (
        x[0] > y[0]
    ) : (x > y);

// head :: [a] -> a
const head = xs => xs.length ? xs[0] : undefined;

// headMay :: [a] -> Maybe a
const headMay = xs =>
    0 < xs.length ? Just(xs[0]) : Nothing();

// id :: a -> a
const id = x => x;

// if_ :: Bool -> a -> a -> a
const if_ = (bln, x, y) =>
    bln ? x : y;

// indented :: String -> String -> String
const indented = (strIndent, s) =>
    unlines(map(
        x => '' !== x ? strIndent + x : x,
        lines(s)
    ));

// index (!!) :: [a] -> Int -> a
// index (!!) :: String -> Int -> Char
const index = (xs, i) => xs[i];

// indexOf :: Eq a => [a] -> [a] -> Maybe Int
// indexOf :: String -> String -> Maybe Int
const indexOf = (needle, haystack) =>
    'string' !== typeof haystack ? (
        findIndex(xs => isPrefixOf(needle, xs), tails(haystack))
    ) : (() => {
        const i = haystack.indexOf(needle);
        return -1 !== i ? (
            Just(i)
        ) : Nothing();
    })();

// init :: [a] -> [a]
const init = xs =>
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
        .map((_, i, lst) => lst.slice(0, i + 1)));

// insert :: Ord a => a -> [a] -> [a]
const insert = (x, ys) => {
    const cmp = (a, b) => a < b ? -1 : (a > b ? 1 : 0);
    for (var i = 0, lng = ys.length; i < lng && cmp(x, ys[i]) > 0; i++) {};
    return ys.slice(0, i)
        .concat(x)
        .concat(ys.slice(i));
};

// insertBy :: (a -> a -> Ordering) -> a -> [a] -> [a]
const insertBy = (cmp, x, ys) => {
    for (var i = 0, lng = ys.length; i < lng && cmp(x, ys[i]) > 0; i++) {};
    return ys.slice(0, i)
        .concat(x)
        .concat(ys.slice(i));
};

// insertMap :: Dict -> String -> a -> Dict
const insertMap = (dct, k, v) =>
  Object.assign(dct, {[k]: v});

// intToDigit :: Int -> Char
const intToDigit = n =>
    n >= 0 && n < 16 ? (
        '0123456789ABCDEF'.charAt(n)
    ) : '?';

// intercalate :: [a] -> [[a]] -> [a]
// intercalate :: String -> [String] -> String
const intercalate = (sep, xs) =>
    0 < xs.length && 'string' === typeof sep &&
    'string' === typeof xs[0] ? (
        xs.join(sep)
    ) : concat(intersperse(sep, xs));

// intercalateS :: String -> [String] -> String
const intercalateS = (s, xs) =>
    xs.join(s);

// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = (xs, ys) => {
    const s = new Set(ys);
    return xs.filter(x => s.has(x));
};

// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = (eq, xs, ys) => {
    const ceq = curry(eq);
    return (0 < xs.length && 0 < ys.length) ?
    xs.filter(x => ys.some(ceq(x))) : [];
};

// intersectListsBy :: (a -> a -> Bool) -> [[a]] -> [a]
const intersectListsBy = (eq, xs) =>
    foldr1(((a, x) => intersectBy(eq, a, x)), xs);

// intersection :: Ord a => Set a -> Set a -> Set a
const intersection = (s, s1) =>
    new Set([...s].filter(x => s1.has(x)));

// intersperse(0, [1,2,3]) -> [1, 0, 2, 0, 3]
// intersperse :: a -> [a] -> [a]
// intersperse :: Char -> String -> String
const intersperse = (sep, xs) => {
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
  const n = ord(c);
  return 48 <= n && 57 >= n;
};

// isInfixOf :: (Eq a) => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = (needle, haystack) =>
    'string' !== typeof haystack ? (() => {
        const
            lng = needle.length,
            go = xs => lng <= xs.length ? (
                isPrefixOf(needle, xs) || go(xs.slice(1))
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
    Array.isArray(xs) || ('string' === typeof xs) ? (
        1 > xs.length
    ) : undefined;

// isPrefixOf takes two lists or strings and returns 
// true iff the first is a prefix of the second.
// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = (xs, ys) => {
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
const isSortedBy = (cmp, xs) =>
    xs.length < 2 || all(x => x < 1, zipWith(cmp, xs, tail(xs)));

// isSpace :: Char -> Bool
const isSpace = c => /\s/.test(c);

// isSubsequenceOf :: Eq a => [a] -> [a] -> Bool
// isSubsequenceOf :: String -> String -> Bool
const isSubsequenceOf = (xs, ys) => {
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
const isSubsetOf = (a, b) => {
    for (let x of a) {
        if (!b.has(x)) return false;
    }
    return true;
};

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = (ns, hs) => {
    const go = delta =>
        eq(ns, dropLength(delta, hs));
    return 'string' !== typeof hs ? (
        bindMay(dropLengthMaybe(ns, hs), go)
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
function* iterate(f, x) {
    let v = x;
    while (true) {
        yield(v);
        v = f(v);
    }
}

// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = (p, f, x) => {
    const vs = [x];
    let h = x;
    while (!p(h))(h = f(h), vs.push(h));
    return vs;
};

// join :: Monad m => m (m a) -> m a
const join = x => bind(x, id);

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
const justifyLeft = (n, cFiller, s) =>
    n > s.length ? (
        s.padEnd(n ,cFiller)
    ) : s;

// justifyRight :: Int -> Char -> String -> String
const justifyRight = (n, cFiller, s) =>
    n > s.length ? (
        s.padStart(n, cFiller)
    ) : s;

// keys :: Dict -> [String]
const keys = Object.keys;

// Kleisli composition LR
// kleisliCompose (>=>) :: Monad m => (a -> m b) -> (b -> m c) -> (a -> m c)
const kleisliCompose = (f, g) =>
    x => bind(f(x), g);

// last :: [a] -> a
const last = xs =>
    0 < xs.length ? xs.slice(-1)[0] : undefined;

// lastMay :: [a] -> Maybe a
const lastMay = xs => 0 < xs.length ? (
    Just(xs.slice(-1)[0])
) : Nothing();

// lcm :: Int -> Int -> Int
const lcm = (x, y) =>
   ( x === 0 || y === 0) ? 0 : Math.abs(Math.floor(x / gcd(x, y)) * y);

// lefts :: [Either a b] -> [a]
const lefts = xs =>
    concatMap(
        x => ('Either' === x.type) && (undefined !== x.Left) ? (
            [x.Left]
        ) : [], xs
    );

// Returns Infinity over objects without finite length.
// This enables zip and zipWith to choose the shorter
// argument when one is non-finite, like cycle, repeat etc
// length :: [a] -> Int
const length = xs =>
    (Array.isArray(xs) || 'string' === typeof xs) ? (
        xs.length
    ) : Infinity;

// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(
    xs => 1 > xs.length,
    xs => concatMap(x => x.nest, xs), [tree]
  );

// levels :: Tree a -> [[a]]
const levels = tree =>
    map(xs => map(x => x.root, xs),
        iterateUntil(
            xs => 1 > xs.length,
            xs => concatMap(x => x.nest, xs), [tree]
        )
    );

// Lift a binary function to actions.
// liftA2 f a b = fmap f a <*> b
// const liftA2 = (f, x, y) => ap(fmap(curry(f), x), y);
// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = (f, a, b) => {
    const t = a.type;
    return (
        undefined !== t ? (
            'Either' === t ? (
                liftA2LR
            ) : 'Maybe' === t ? (
                liftA2May
            ) : 'Tuple' === t ? (
                liftA2Tuple
            ) : 'Node' === t ? (
                liftA2Tree
            ) : liftA2List
        ) : liftA2List
    )(...[f, a, b]);
};

// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = (f, a, b) =>
    undefined !== a.Left ? (
        a
    ) : undefined !== b.Left ? (
        b
    ) : Right(f(a.Right, b.Right));

// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = (f, xs, ys) =>
    concatMap(x => concatMap(y => [f(x, y)], ys), xs);

// liftA2May :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2May = (f, a, b) =>
    a.Nothing ? a : b.Nothing ? b : Just(f(a.Just, b.Just));

// liftA2Tree :: Tree (a -> b -> c) -> Tree a -> Tree b -> Tree c
const liftA2Tree = (f, tx, ty) => {
    const go = tx =>
        Node(
            f(tx.root, ty.root || ty),
            Boolean(ty.nest) ? (
                ty.nest.map(curry(fmapTree)(curry(f)(tx.root)))
                .concat(
                    tx.nest.map(go)
                )
            ) : ty
        );
    return go(tx);
};

// liftA2Tuple :: Monoid m => (a -> b -> c) -> (m, a) -> (m, b) -> (m, c)
const liftA2Tuple = (f, a, b) =>
    Tuple(mappend(a[0], b[0]), f(a[1], b[1]));

// > liftM2 (+) [0,1] [0,2] = [0,2,1,3]
// > liftM2 (+) (Just 1) Nothing = Nothing

// Control.Monad : 
// "Promote a function to a monad, scanning the monadic arguments 
// from left to right."

// Add 7, 9, or 10,  to 100 or 1000
// liftM2(plus, [7, 9, 10], [100, 1000])

// --> [107, 1007, 109, 1009, 110, 1010]

// liftM2 f xs ys = [f] <*> xs <*> ys
// liftM2 :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftM2 = liftA2;

// liftMmay :: (a -> b) -> (Maybe a -> Maybe b)
const liftMmay = f =>
    mb => mb.Nothing ? (
        mb
    ) : Just(f(mb.Just))

// lines :: String -> [String]
const lines = s => s.split(/[\r\n]/);

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
const lookup = (k, m) =>
    (Array.isArray(m) ? (
        lookupTuples
    ) : lookupDict)(k, m);

// lookupDict :: a -> Dict -> Maybe b
const lookupDict = (k, dct) => {
    const v = dct[k];
    return undefined !== v ? (
        Just(v)
    ) : Nothing();
};

// lookupTuples :: Eq a => a -> [(a, b)] -> Maybe b
const lookupTuples = (k, kvs) =>
    bindMay(
        find(x => k === fst(x), kvs),
        x => Just(snd(x))
    );

// Not required in JS, which has first functions by default.
// Included only for comparison with AS, which has to derive
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// In JS, mReturn is just an alternate name for id.
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = x => id(x);

// map :: (a -> b) -> [a] -> [b]
const map = (f, xs) =>
    (Array.isArray(xs) ? (
        xs
    ) : xs.split('')).map(f);

// Map-accumulation is a combination of map and a catamorphism;
// it applies a function to each element of a list, passing an accumulating 
// parameter from left to right, and returning a final value of this 
// accumulator together with the new list.
// mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumL = (f, acc, xs) =>
    xs.reduce((a, x, i) => {
        const pair = f(a[0], x, i);
        return Tuple(pair[0], a[1].concat(pair[1]));
    }, Tuple(acc, []));

// mapAccumL_Tree :: (acc -> x -> (acc, y)) -> acc -> Tree -> (acc, Tree)
const mapAccumL_Tree = (f, acc, tree) => {
    const go = (a, x) => {
        const
            pair = f(a, x.root),
            tpl = mapAccumL(go, pair[0], x.nest);
        return Tuple(tpl[0], Node(pair[1], tpl[1]));
    };
    return go(acc, tree);
};

// 'The mapAccumR function behaves like a combination of map and foldr; 
// it applies a function to each element of a list, passing an accumulating 
// parameter from right to left, and returning a final value of this 
// accumulator together with the new list.' (See Hoogle)
// mapAccumR :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
const mapAccumR = (f, acc, xs) =>
    xs.reduceRight((a, x, i) => {
        const pair = f(a[0], x, i);
        return Tuple(pair[0],
            [pair[1]].concat(a[1])
        );
    }, Tuple(acc, []));

// mapFromList :: [(k, v)] -> Dict
const mapFromList = kvs =>
    kvs.reduce(
        (a, kv) => {
            const k = kv[0];
            return Object.assign(a, {
                [(('string' === typeof k) && k) || show(k)]: kv[1]
            });
        }, {}
    );

// A function mapped over the keys of a record
// mapKeys :: (Key -> Key) -> IntMap a -> IntMap a
const mapKeys = (f, dct) =>
    mapFromList(
        map(
            kv => [f(read(kv[0])), kv[1]],
            zip(keys(dct), elems(dct))
        )
    );

// The mapMaybe function is a version of map which can throw out
// elements. In particular, the functional argument returns
// something of type Maybe b. If this is Nothing, no element is
// added on to the result list. If it just Just b, then b is
// included in the result list.
// mapMaybe :: (a -> Maybe b) -> [a] -> [b]
const mapMaybe = (mf, xs) =>
  xs.reduce(
    (a, x) => maybe(a, j => a.concat(j), mf(x)),
    []
  );

// mapMaybeGen :: (a -> Maybe b) -> Gen [a] -> Gen [b]
function* mapMaybeGen(mf, gen) {
    let v = take(1, gen);
    while (0 < v.length) {
        let mb = mf(v[0]);
        if (!mb.Nothing) yield mb.Just
        v = take(1, gen);
    }
}

// mappend (<>) :: Monoid a => a -> a -> a
const mappend = (a, b) => {
    const t = a.type;
    return (
        Boolean(t) ? (
            'Maybe' === t ? (
                mappendMaybe
            ) : 'Ordering' === t ? (
                mappendOrdering
            ) : mappendTuple
        ) : 'function' !== typeof a ? (
            append
        ) : mappendFn
    )(a, b);
};

// mappendComparing :: [(a -> b)] -> (a -> a -> Ordering)
const mappendComparing = fs =>
    (x, y) => fs.reduce(
        (ordr, f) => (ordr || compare(f(x), f(y))),
        0
    );

// Expects functions in the argument list to be 
// paired with Bools:
//     true  -> ascending sort on that key
//     false -> descending sort on that key
// mappendComparing2 :: [((a -> b), Bool)] -> (a -> a -> Ordering)
const mappendComparing2 = fboolPairs =>
    (x, y) => fboolPairs.reduce(
        (ordr, fb) => {
            const f = fb[0];
            return 0 !== ordr ? (
                ordr
            ) : fb[1] ? (
                compare(f(x), f(y))
            ) : compare(f(y), f(x));
        }, 0
    );

// mappendFn :: Monoid b => (a -> b) -> (a -> b) -> (a -> b)
const mappendFn = (f, g) =>
    x => mappend(f(x), g(x));

// mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
const mappendMaybe = (a, b) =>
    a.Nothing ? b : b.Nothing ? a :
    Just(mappend(a.Just, b.Just));

// mappendOrdering (<>) :: Ordering -> Ordering -> Ordering
const mappendOrdering = (a, b) => eqOrdering(EQ, a) ? b : a;

// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = (t, t2) =>
    Tuple(mappend(t[0], t1[0]), mappend(t[1], t1[1]));

// Returns a sequence-matching function for findIndices etc
// findIndices(matching([2, 3]), [1, 2, 3, 1, 2, 3])
// -> [1, 4]
// matching :: [a] -> (a -> Int -> [a] -> Bool)
const matching = pat => {
    const
        lng = pat.length,
        bln = 0 < lng,
        h = bln ? pat[0] : undefined;
    return (x, i, src) =>
        bln && h == x &&
        eq(pat, src.slice(i, lng + i));
};

// max :: Ord a => a -> a -> a
const max = (a, b) => gt(b, a) ? b : a;

// maximum :: Ord a => [a] -> a
const maximum = xs =>
    0 < xs.length ? (
        foldl1((a, x) => x > a ? x : a, xs)
    ) : undefined;

//  Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = (f, xs) =>
    0 < xs.length ? (
        xs.slice(1)
        .reduce((a, x) => 0 < f(x, a) ? x : a, xs[0])
    ) : undefined;

//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = (f, xs) =>
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

// Default value (v) if m.Nothing, or f(m.Just)
// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = (v, f, m) =>
    m.Nothing ? v : f(m.Just);

// The maybeToList function returns an empty list when given
// Nothing or a singleton list when not given Nothing.”
// maybeToList :: Maybe a -> [a]
const maybeToList = mb =>
    mb.Nothing ? [] : [mb.Just];

// mean :: [Num] -> Num
const mean = xs =>
  xs.reduce((a, x) => a + x, 0) / xs.length;

// member :: Key -> Dict -> Bool
const member = (k, dct) => k in dct;

// min :: Ord a => a -> a -> a
const min = (a, b) => b < a ? b : a;

// minimum :: Ord a => [a] -> a
const minimum = xs =>
    0 < xs.length ? (
        foldl1((a, x) => x < a ? x : a, xs)
    ) : undefined;

//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n)
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = (f, xs) =>
    xs.reduce((a, x) => undefined === a ? x : (
        0 > f(x, a) ? x : a
    ), undefined);

// minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const minimumByMay = (f, xs) =>
    xs.reduce((a, x) => a.Nothing ? Just(x) : (
        f(x, a.Just) < 0 ? Just(x) : a
    ), Nothing());

// minimumMay :: [a] -> Maybe a
const minimumMay = xs =>
    0 < xs.length ? (
        Just(xs.slice(1)
            .reduce((a, x) => x < a ? x : a, xs[0])
        )
    ) : Nothing();

// mod :: Int -> Int -> Int
const mod = (n, d) => n % d;

// negate :: Num -> Num
const negate = n => -n;

// not :: Bool -> Bool
const not = b => !b;

// notElem :: Eq a => a -> [a] -> Bool
const notElem = (x, xs) => -1 === xs.indexOf(x);

// nub :: [a] -> [a]
const nub = xs => nubBy(eq, xs);

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = (p, xs) => {
    const go = xs => 0 < xs.length ? (() => {
        const x = xs[0];
        return [x].concat(
            go(xs.slice(1)
                .filter(y => !p(x, y))
            )
        )
    })() : [];
    return go(xs);
};

// odd :: Int -> Bool
const odd = n => !even(n);

// e.g. sortBy(on(compare,length), xs)
// on :: (b -> b -> c) -> (a -> b) -> a -> a -> c
const on = (f, g) => (a, b) => f(g(a), g(b));

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
const ordering = enum_(
    'Ordering', ['LT', 'EQ', 'GT']
);

// All lines in the string outdented by the same amount
// (just enough to ensure that the least indented lines 
//  have no remaining indent)
// All relative indents are left unchanged
// outdented :: String -> String
const outdented = s => {
    const
        rgx = /^ */, // Leading space characters.
        xs = lines(s),
        n = length(minimumBy( // size of minimum indent
            comparing(length),
            map(txt => rgx.exec(txt)[0], xs)
        ));
    return unlines(map(curry(drop)(n), xs));
};

// partition :: Predicate -> List -> (Matches, nonMatches)
// partition :: (a -> Bool) -> [a] -> ([a], [a])
const partition = (p, xs) =>
    xs.reduce(
        (a, x) =>
        p(x) ? (
            Tuple(a[0].concat(x), a[1])
        ) : Tuple(a[0], a[1].concat(x)),
        Tuple([], [])
    );

// partitionEithers :: [Either a b] -> ([a],[b])
const partitionEithers = xs =>
    xs.reduce(
        (a, x) => undefined !== x.Left ? (
            Tuple(a[0].concat(x.Left), a[1])
        ) : Tuple(a[0], a[1].concat(x.Right)),
        Tuple([], [])
    );

// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.reduceRight(
        (a, x) => concatMap(
            xs => enumFromTo(0, xs.length)
            .map(n => xs.slice(0, n)
                .concat(x)
                .concat(xs.slice(n))
            ),
            a
        ),
        [[]]
    );

// OR
// // permutations :: [a] -> [[a]]
// const permutations = xs => {
//     const go = xs =>
//         xs.length ? concatMap(x => concatMap(ys => [
//                 [x].concat(ys)
//             ],
//             go(delete_(x, xs))), xs) : [
//             []
//         ];
//     return go(xs);
// };

// permutationsWithRepetition :: Int -> [a] -> [[a]]
const permutationsWithRepetition = (n, xs) =>
    0 < xs.length ? (
        map(flatten,
            foldl1(
                x => cartesianProduct(xs, x),
                replicate(n, xs)
            )
        )
    ) : [];

// pi :: Float
const pi = Math.PI;

// plus :: Num -> Num -> Num
const plus = (a, b) => a + b;

// Root elements of tree flattened bottom-up
// into a postorder list.
// postorder :: Tree a -> [a]
const postorder = t => {
    const go = (xs, x) =>
        x.nest.reduce(go, xs).concat(x.root);
    return go([], t);
};

// pred :: Enum a => a -> a
const pred = x =>
    isChar(x) ? (
        chr(ord(x) - 1)
    ) : isNaN(x) ? (
        undefined
    ) : x - 1;

// print :: a -> IO ()
const print = x => {
    const
        c = x.constructor.name,
        s = 'object' !== typeof x ? (
            x.toString()
        ) : 'Date' !== c ? (
            JSON.stringify.apply(
                null,
                'Array' !== c ? (
                    [x, null, 2]
                ) : [x]
            )
        ) : x.toString();
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
const product = xs => xs.reduce((a, x) => a * x, 1);

// properFracRatio :: Ratio -> (Int, Ratio)
const properFracRatio = nd => {
    const [q, r] = Array.from(quotRem(nd.n, nd.d));
    return Tuple(q, ratio(r, nd.d));
};

// properFraction :: Real -> (Int, Real)
const properFraction = n => {
    const i = Math.floor(n) + (n < 0 ? 1 : 0);
    return Tuple(i, n - i);
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
const pureT = (t, x) =>
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
const pureTree = x => Node(x, []);

// pureTuple :: a -> (a, a)
const pureTuple = x => Tuple('', x);

// Included only for comparison with AppleScript
// sort and sortBy are faster and more flexible
// quickSort :: (Ord a) => [a] -> [a]
const quickSort = xs =>
    xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(x => x <= h, xs.slice(1));
        return [].concat.apply(
            [], [quickSort(lessMore[0]), h, quickSort(lessMore[1])]
        );
    })() : xs;

// Included only for comparison with AppleScript
// sort and sortBy are faster and more flexible
// quickSortBy :: (a -> a -> Ordering) -> [a] -> [a]
const quickSortBy = (cmp, xs) =>
    xs.length > 1 ? (() => {
        const
            h = xs[0],
            lessMore = partition(
                x => 1 !== cmp(x, h),
                xs.slice(1)
            );
        return [].concat.apply(
            [], [quickSortBy(cmp, lessMore[0]), h, quickSortBy(cmp, lessMore[1])]
        );
    })() : xs;

// quot :: Int -> Int -> Int
const quot = (n, m) => Math.floor(n / m);

// quotRem :: Int -> Int -> (Int, Int)
const quotRem = (m, n) => 
  Tuple(Math.floor(m / n), m % n);

// radians :: Float x => Degrees x -> Radians x
const radians = x =>
    (Math.PI / 180) * x;

// raise :: Num -> Int -> Num
const raise = (n, e) => Math.pow(n, e);

// e.g. map(randomRInt(1, 10), ft(1, 20))
// randomRInt :: Int -> Int -> IO () -> Int
const randomRInt = (low, high) => () =>
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
            sequenceAList(as.map((_, i) => enumFromTo(as[i], bs[i])))
        ) : enumFromTo(as[0], bs[0])
    ) : [];
};

// ratio :: Int -> Int -> Ratio Int
const ratio = (x, y) => {
  const go = (x, y) =>
    0 !== y ? (() => {
      const d = gcd(x, y);
      return {
        type: 'Ratio',
        'n': quot(x, d), // numerator
        'd': quot(y, d) // denominator
      };
    })() : undefined;
  return go(x * signum(y), abs(y));
};

// ratioDiv :: Rational -> Rational -> Rational
const ratioDiv = (n1, n2) => {
    const [r1, r2] = map(rational, [n1, n2]);
    return ratio(r1.n * r2.d, r1.d * r2.n);
};

// ratioMinus :: Rational -> Rational -> Rational
const ratioMinus = (n1, n2) => {
    const [r1, r2] = map(rational, [n1, n2]);
    const d = lcm(r1.d, r2.d);
    return ratio(
        (r1.n * (d / r1.d)) - (r2.n * (d / r2.d)),
        d
    );
};

// ratioMult :: Rational -> Rational -> Rational
const ratioMult = (n1, n2) => {
    const [r1, r2] = map(rational, [n1, n2]);
    return ratio(r1.n * r2.n, r1.d * r2.d);
};

// ratioPlus :: Rational -> Rational -> Rational
const ratioPlus = (n1, n2) => {
    const [r1, r2] = map(rational, [n1, n2]);
    const d = lcm(r1.d, r2.d);
    return ratio(
        (r1.n * (d / r1.d)) + (r2.n * (d / r2.d)),
        d
    );
};

// rational :: Num a => a -> Rational
const rational = x =>
    isNaN(x) ? x : Number.isInteger(x) ? (
        ratio(x, 1)
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

// regexMatches :: String -> String -> [[String]]
const regexMatches = (strRgx, strHay) => {
    const rgx = new RegExp(strRgx, 'g');
    let m = rgx.exec(strHay),
        xs = [];
    while (m)(xs.push(m), m = rgx.exec(strHay));
    return xs;
};

// rem :: Int -> Int -> Int
const rem = (n, m) => n % m;

// repeat :: a -> Generator [a]
function* repeat(xs) {
    while(true) yield xs;
}

// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = (needle, strNew, strHaystack) =>
    strHaystack.replace(
      'string' !== typeof needle ? (
        needle
      ) : new RegExp(needle, 'g'),
      strNew
    );

// replicate :: Int -> a -> [a]
const replicate = (n, x) =>
    Array.from({
        length: n
    }, () => x);

// Instance for lists (arrays) only here
// replicateM :: Int -> [a] -> [[a]]
const replicateM = (n, xs) => {
    const go = x => 0 >= x ? [
        []
    ] : liftA2List(cons, xs, go(x - 1));
    return go(n);
};

// replicateString :: Int -> String -> String
const replicateString = (n, s) => s.repeat(n);

// reverse :: [a] -> [a]
const reverse = xs =>
    'string' !== typeof xs ? (
        xs.slice(0).reverse()
    ) : xs.split('').reverse().join('');

// rights :: [Either a b] -> [b]
const rights = xs =>
    concatMap(
        x => ('Either' === x.type) && (undefined !== x.Right) ? (
            [x.Right]
        ) : [], xs
    );

// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const lng = xs.length;
    return Infinity > lng ? (
        take(lng, drop(lng - n, cycle(xs)))
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

// safeMay :: (a -> Bool) -> (a -> b) -> Maybe b
const safeMay = (p, f, x) =>
    p(x) ? Just(f(x)) : Nothing();

// scanl :: (b -> a -> b) -> b -> [a] -> [b]
const scanl = (f, startValue, xs) =>
    xs.reduce((a, x) => {
        const v = f(a[0], x);
        return Tuple(v, a[1].concat(v));
    }, Tuple(startValue, [startValue]))[1];

// scanl1 is a variant of scanl that has no starting value argument
// scanl1 :: (a -> a -> a) -> [a] -> [a]
const scanl1 = (f, xs) =>
    xs.length > 0 ? scanl(f, xs[0], xs.slice(1)) : [];

// scanr :: (b -> a -> b) -> b -> [a] -> [b]
const scanr = (f, startValue, xs) =>
    xs.reduceRight((a, x) => {
        const v = f(a.acc, x);
        return {
            acc: v,
            scan: [v].concat(a.scan)
        };
    }, {
        acc: startValue,
        scan: [startValue]
    })
    .scan;

// scanr1 is a variant of scanr that has no starting value argument
// scanr1 :: (a -> a -> a) -> [a] -> [a]
const scanr1 = (f, xs) =>
    xs.length > 0 ? scanr(f, xs.slice(-1)[0], xs.slice(0, -1)) : [];

// Lift a simple function to one which applies to a tuple, 
// transforming only the second item of the tuple
// secondArrow :: (a -> b) -> ((c, a) -> (c, b))
const secondArrow = f => xy => Tuple(xy[0], f(xy[1]));

// sequenceA :: (Applicative f, Traversable t) => t (f a) -> f (t a)
const sequenceA = tfa =>
    traverse(x => x, tfa);

// setFromList :: Ord a => [a] -> Set a
const setFromList = xs =>
    new Set(xs);

// setInsert :: Ord a => a -> Set a -> Set a
const setInsert = (x, set) =>
    set.add(x);

// setMember :: Ord a => a -> Set a -> Bool
const setMember = (x, set) =>
    set.has(x);

// setSize :: Set a -> Int
const setSize = set =>
    set.size;

// shift :: Int -> [a] -> [a]
const shift = (n, xs) => {
    const lng = length(xs);
    return Infinity > lng ? (
        take(lng, drop(n, cycle(xs)))
    ) : (drop(n, xs), xs);
};

// show :: a -> String
// show :: a -> Int -> Indented String
const show = (x, n) => {
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
        ) : "'" + v + "'";
    }, n)
};

// showBinary :: Int -> String
const showBinary = n => {
    const binaryChar = n => 0 !== n ? '1' : '0';
    return showIntAtBase(2, binaryChar, n, '');
};

// showDate :: Date -> String
const showDate = JSON.stringify;

// showDict :: Dict -> String
const showDict = show;

// showHex :: Int -> String
const showHex = n =>
    showIntAtBase(16, intToDigit, n, '');

// showIntAtBase :: Int -> (Int -> Char) -> Int -> String -> String
const showIntAtBase = (base, toChr, n, rs) => {
    const go = ([n, d], r) => {
        const r_ = toChr(d) + r;
        return 0 !== n ? (
            go(Array.from(quotRem(n, base)), r_)
        ) : r_;
    };
    return 1 >= base ? (
        'error: showIntAtBase applied to unsupported base'
    ) : 0 > n ? (
        'error: showIntAtBase applied to negative number'
    ) : go(Array.from(quotRem(n, base)), rs);
};

// showJSON :: a -> String
const showJSON = x => JSON.stringify(x, null, 2);

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

// showOrdering :: Ordering -> String
const showOrdering = e =>
    0 < e.value ? (
        'GT'
    ) : 0 > e.value ? (
        'LT'
    ) : 'EQ';

// showRatio :: Ratio -> String
const showRatio = r =>
    'Ratio' !== r.type ? (
        r.toString()
    ) : r.n.toString() + (
        1 !== r.d ? (
            '/' + r.d.toString()
        ) : ''
    );

// showSet :: Set -> String
const showSet = s =>
    intercalate(sort(elems(s)), ['{','}']);

// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + enumFromTo(0, tpl.length - 1)
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

// Abbreviation for quick testing - any 2nd arg interpreted as indent size
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

// Mirror image of cons
// New copy of the list, with an atom added at the end
// snoc :: [a] -> a -> [a]
const snoc = (xs, x) => xs.concat(x);

// sort :: Ord a => [a] -> [a]
const sort = xs => xs.slice()
    .sort((a, b) => a < b ? -1 : (a > b ? 1 : 0));

// sortBy :: (a -> a -> Ordering) -> [a] -> [a]
const sortBy = (f, xs) =>
    xs.slice()
    .sort(f);

// Sort a list by comparing the results of a key function applied to each
// element. sortOn f is equivalent to sortBy (comparing f), but has the
// performance advantage of only evaluating f once for each element in
// the input list. This is called the decorate-sort-undecorate paradigm,
// or Schwartzian transform.
// Elements are arranged from from lowest to highest.
// sortOn :: Ord b => (a -> b) -> [a] -> [a]
const sortOn = (f, xs) => {
    // Functions and matching bools derived from argument f
    // which may be a single key function, or a list of key functions
    // each of which may or may not be followed by a direction bool.
    const fsbs = unzip(
            flatten([f])
            .reduceRight((a, x) =>
                ('boolean' === typeof x) ? {
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
    // decorate-sort-undecorate
    return sortBy(mappendComparing_(
            // functions that access pre-calculated values
            // by position in the decorated ('Schwartzian')
            // version of xs
            zip(fs.map((_, i) => x => x[i]), bs)
        ), xs.map( // xs decorated with precalculated values
            x => fs.reduceRight(
                (a, g) => [g(x)].concat(a), [
                    x
                ])))
        .map(x => x[iLast]); // undecorated version of data, post sort.
};

// span, applied to a predicate p and a list xs, returns a tuple of xs of 
// elements that satisfy p and second element is the remainder of the list:
//
// > span (< 3) [1,2,3,4,1,2,3,4] == ([1,2],[3,4,1,2,3,4])
// > span (< 9) [1,2,3] == ([1,2,3],[])
// > span (< 0) [1,2,3] == ([],[1,2,3])
//
// span p xs is equivalent to (takeWhile p xs, dropWhile p xs) 
// span :: (a -> Bool) -> [a] -> ([a], [a])
const span = (f, xs) =>
    splitAt(until(
        i => !f(xs[i]),
        i => i + 1,
        0
    ), xs);

// Compose a function (from a tuple to a tuple), 
// (with separate transformations for fst and snd)
// splitArrow (***) :: (a -> b) -> (c -> d) -> ((a, c) -> (b, d))
const splitArrow = (f, g) => tpl => Tuple(f(tpl[0]), g(tpl[1]));

// splitAt :: Int -> [a] -> ([a], [a])
const splitAt = (n, xs) => Tuple(xs.slice(0, n), xs.slice(n));

// Splitting not on a delimiter, but wherever the relationship
// between consecutive terms matches a binary predicate
// splitBy :: (a -> a -> Bool) -> [a] -> [[a]]
// splitBy :: (String -> String -> Bool) -> String -> [String]
const splitBy = (p, xs) =>
    (xs.length < 2) ? [xs] : (() => {
        const
            bln = 'string' === typeof xs,
            ys = bln ? xs.split('') : xs,
            h = ys[0],
            parts = ys.slice(1)
            .reduce(([acc, active, prev], x) =>
                p(prev, x) ? (
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

// splitEvery :: Int -> [a] -> [[a]]
const splitEvery = (n, xs) => {
    if (xs.length <= n) return [xs];
    const [h, t] = [xs.slice(0, n), xs.slice(n)];
    return [h].concat(splitEvery(n, t));
};

// Split a filename into directory and file. combine is the inverse.
// splitFileName :: FilePath -> (String, String)
const splitFileName = strPath =>
    ('' !== strPath) ? (
         ('/' !== strPath[strPath.length - 1]) ? (() => {
            const
                xs = strPath.split('/'),
                stem = xs.slice(0, -1);
            return stem.length > 0 ? (
                Tuple(stem.join('/') + '/', xs.slice(-1)[0])
            ) : Tuple('./', xs.slice(-1)[0]);
        })() : Tuple(strPath, '')
    ) : Tuple('./', '');

// splitOn("\r\n", "a\r\nb\r\nd\r\ne") //--> ["a", "b", "d", "e"]
// splitOn("aaa", "aaaXaaaXaaaXaaa") //--> ["", "X", "X", "X", ""]
// splitOn("x", "x") //--> ["", ""]
// splitOn([3, 1], [1,2,3,1,2,3,1,2,3]) //--> [[1,2],[2],[2,3]]
// splitOn :: [a] -> [a] -> [[a]]
// splitOn :: String -> String -> [String]
const splitOn = (pat, src) =>
    ('string' === typeof src) ? (
        src.split(pat)
    ) : (() => {
        const
            lng = pat.length,
            tpl = foldl((a, i) =>
                Tuple(
                    fst(a).concat([src.slice(snd(a), i)]),
                    lng + i
                ), Tuple([], 0),
                findIndices(matching(pat), src)
            );
        return fst(tpl).concat([src.slice(snd(tpl))]);
    })();

// splitRegex :: Regex -> String -> [String]
const splitRegex = (needle, haystack) =>
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

// strip :: String -> String
const strip = s => s.trim();

// stripEnd :: String -> String
const stripEnd = s => dropWhileEnd(isSpace, s);

// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
const stripPrefix = (pfx, s) => {
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
const stripStart = s => dropWhile(isSpace, s);

// subsequences([1,2,3]) -> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// subsequences('abc') -> ["","a","b","ab","c","ac","bc","abc"]
// subsequences :: [a] -> [[a]]
// subsequences :: String -> [String]
const subsequences = xs => {
    const
        cons = (x, xs) => [x].concat(xs),
        // nonEmptySubsequences :: [a] -> [[a]]
        nonEmptySubsequences = xxs => {
            if (xxs.length < 1) return [];
            const [x, xs] = [xxs[0], xxs.slice(1)];
            const f = (r, ys) => cons(ys, cons(cons(x, ys), r));
            return cons([x], nonEmptySubsequences(xs)
                .reduceRight(f, []));
        };
    return ('string' === typeof xs) ? (
        cons('', nonEmptySubsequences(xs.split(''))
            .map(x => ''.concat.apply('', x))) // map(concat)
    ) : cons([], nonEmptySubsequences(xs));
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
const subtract = (x, y) => y - x;

// succ :: Enum a => a -> a
const succ = x =>
    isChar(x) ? (
        chr(1 + ord(x))
    ) : isNaN(x) ? (
        undefined
    ) : 1 + x;

// sum :: [Num] -> Num
const sum = xs => xs.reduce((a, x) => a + x, 0);

// swap :: (a, b) -> (b, a)
const swap = ab =>
    Tuple(ab[1], ab[0]);

// tail :: [a] -> [a]
const tail = xs => 0 < xs.length ? xs.slice(1) : [];

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
const take = (n, xs) =>
    'GeneratorFunction' !== xs.constructor.constructor.name ? (
        xs.slice(0, n)
    ) : [].concat.apply([], Array.from({
        length: n
    }, () => {
        const x = xs.next();
        return x.done ? [] : [x.value];
    }));

// takeAround :: (a -> Bool) -> [a] -> [a]
const takeAround = (p, xs) => {
    const ys = takeWhile(p, xs);
    return ys.length < xs.length ? (
        ys.concat(takeWhileR(p, xs))
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
const takeCycle = (n, xs) => {
    const lng = xs.length;
    return (
            n <= xs ? (
                xs
            ) : concat(
                replicate(
                    Math.ceil(n / lng),
                    xs
                )
            )
        )
        .slice(0, n)
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
// takeDropCycle :: Int -> [a] -> [a]
const takeDropCycle = (n, i, xs) => {
    const
        lng = xs.length,
        m = n + i;
    return drop(i,
        take(m,
            (lng >= m ? xs : concat(replicate(Math.ceil(m / lng), xs)))
        )
    );
};

// takeExtension :: FilePath -> String
const takeExtension = strPath => {
    const
        xs = strPath.split('.'),
        lng = xs.length;
    return 1 < lng ? (
        '.' + xs[lng - 1]
    ) : '';
};

// takeFileName :: FilePath -> FilePath
const takeFileName = strPath =>
    '' !== strPath ? (
        ('/' !== strPath[strPath.length - 1]) ? (
            strPath.split('/')
            .slice(-1)[0]
        ) : ''
    ) : '';

// takeIterate n f x == [x, f x, f (f x), ...]
// takeIterate :: Int -> (a -> a) -> a -> [a]
const takeIterate = (n, f, x) =>
    snd(mapAccumL((a, _, i) => {
        const v = 0 !== i ? f(a) : x;
        return [v, v];
    }, x, Array.from({
        length: n
    })));

// takeWhile :: (a -> Bool) -> [a] -> [a]
// takeWhile :: (Char -> Bool) -> String -> String
const takeWhile = (p, xs) =>
    xs.constructor.constructor.name !==
    'GeneratorFunction' ? (() => {
        const lng = xs.length;
        return 0 < lng ? xs.slice(
            0,
            until(
                i => lng === i || !p(xs[i]),
                i => 1 + i,
                0
            )
        ) : [];
    })() : takeWhileGen(p, xs);

// takeWhileGen :: (a -> Bool) -> Gen [a] -> [a]
const takeWhileGen = (p, xs) => {
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
const takeWhileR = (p, xs) => {
    let i = xs.length;
    while (i-- && p(xs[i])) {}
    return xs.slice(i + 1);
};

// then (>>) :: Monad m => m a -> m b -> m b
const then = (ma, mb) =>
    (Array.isArray(ma) ? (
        thenList
    ) : isMaybe(ma) ? (
        thenMay
    ) : thenIO)(
        ...[ma, mb]
    )

// thenIO (>>) :: IO a -> IO b -> IO b
const thenIO = (ma, mb) => mb;

// thenList (>>) :: [a] -> [b] -> [b]
const thenList = (xs, ys) =>
    concatMap(_ => ys, xs);

// thenMay (>>) :: Maybe a -> Maybe b -> Maybe b
const thenMay = (mbx, mby) =>
    mbx.Nothing ? mbx : mby;

// toEnum :: Type -> Int -> a
const toEnum = t => x => {
    const dct = {
        'number': Number,
        'string': String.fromCodePoint,
        'boolean': Boolean
    };
    return t in dct ? (
        dct[t](x)
    ) : t[x];
};

// toListTree :: Tree a -> [a]
const toListTree = tree => {
    const go = x => [
      x.root,
      ...[].concat.apply([], x.nest.map(go))
    ];
    return go(tree);
};

// toLower :: String -> String
const toLower = s => s.toLocaleLowerCase();

// toRatio :: Real -> Ratio
const toRatio = n =>
    approxRatio(1e-12, n);

// Sentence case - initial string capitalized and rest lowercase
// toSentence :: String -> String
const toSentence = s =>
    (0 < s.length) ? (
        s[0].toUpperCase() + s.slice(1)
        .toLowerCase()
    ) : s;

// NB this does not model any regional or cultural conventions.
// It simply simply capitalizes the first character of each word.
// toTitle :: String -> String
const toTitle = s =>
    regexMatches(/(\w)(\w*)(\b[\W]*|$)/g, s)
    .map(ms => ms[1].toUpperCase() + ms[2].toLowerCase() + ms[3])
    .join('');

// toUpper :: String -> String
const toUpper = s => s.toLocaleUpperCase();

// If some of the rows are shorter than the following rows, 
// their elements are skipped:
// > transpose [[10,11],[20],[],[30,31,32]] == [[10,20,30],[11,31],[32]]
// transpose :: [[a]] -> [[a]]
// transpose :: [[a]] -> [[a]]
const transpose = tbl => {
    const
        gaps = replicate(
            length(maximumBy(comparing(length), tbl)), []
        ),
        rows = map(xs => xs.concat(gaps.slice(xs.length)), tbl);
    return map(
        (_, col) => concatMap(row => [row[col]], rows),
        rows[0]
    );
};

// traverse :: (Applicative f, Traversable t) => (a -> f b) -> t a -> f (t b)
const traverse = (f, tx) => {
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
    )(f, tx)
};

// traverseLR :: Applicative f => (t -> f b) -> Either a t -> f (Either a b)
const traverseLR = (f, lr) =>
    undefined !== lr.Left ? (
        fmap(Right, f(lr.Right))
    ) : [lr]; //??

// - Map each element of a structure to an action,
// - evaluate these actions from left to right,
// - and collect the results.

//    traverse f = List.foldr cons_f (pure [])
//      where cons_f x ys = liftA2 (:) (f x) ys
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f [b]
const traverseList = (f, xs) => {
    const lng = xs.length;
    return 0 < lng ? (() => {
        const
            vLast = f(xs[lng - 1]),
            t = vLast.type || 'List';
        return xs.slice(0, -1).reduceRight(
            (ys, x) => liftA2(cons, f(x), ys),
            liftA2(cons, vLast, pureT(t, []))
        );
    })() : [[]];
};

// traverseMay :: Applicative f => (t -> f a) -> Maybe t -> f (Maybe a)
const traverseMay = (f, mb) =>
    mb.Nothing ? (
        [mb]
    ) : fmap(Just, f(mb.Just));

// traverse f (Node x ts) = liftA2 Node (f x) (traverse (traverse f) ts)
const traverseTree = (f, node) => {
    const go = x =>
        liftA2(
            Node, f(x.root),
            traverseList(go, x.nest)
        );
    return go(node);
};

// traverseTuple :: Functor f => (t -> f b) -> (a, t) -> f (a, b)
const traverseTuple = (f, tpl) =>
    fmap(curry(Tuple)(tpl[0]), f(tpl[1]));

// treeLeaves :: Tree -> [Tree]
const treeLeaves = tree => {
  const nest = tree.nest;
  return (0 < nest.length) ? (
    concatMap(treeLeaves, nest)
  ) : [tree];
};

// A list of all nodes in the tree which match 
// a predicate p.
// For the first match only, see findTree.
// treeMatches :: (a -> Bool) -> Tree a -> [Tree a]
const treeMatches = (p, tree) => {
    const go = node =>
        p(node.root) ? (
            [node]
        ) : concatMap(go, node.nest);
    return go(tree);
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
        'number' : 'Num',
        'string' : 'String'
    }[t] || 'Bottom';
};

// unQuoted :: String -> String
const unQuoted = s =>
    dropAround(x => 34 === x.codePointAt(0), s);

// uncons :: [a] -> Maybe (a, [a])
const uncons = xs => {
    const lng = length(xs);
    return (0 < lng) ? (
        lng < Infinity ? (
            Just(Tuple(xs[0], xs.slice(1))) // Finite list
        ) : (() => {
            const nxt = take(1, xs);
            return 0 < nxt.length ? (
                Just(Tuple(nxt[0], xs))
            ) : Nothing();
        })() // Lazy generator
    ) : Nothing();
};

// Given a curried/default function, returns an
// equivalent function on a tuple or list pair.
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f => args =>
    1 < f.length ? (
        f(args[0], args[1])
    ) : f(args[0])(args[1]);

// | Build a forest from a list of seed values
// unfoldForest :: (b -> (a, [b])) -> [b] -> [Tree]
const unfoldForest = (f, xs) =>
    xs.map(b => unfoldTree(f, b));

// | Build a tree from a seed value
// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = (f, b) => {
    const tpl = f(b);
    return Node(tpl[0], unfoldForest(f, tpl[1]));
};

// (x => Maybe [value, remainder] -> initial value -> values
// unfoldl :: (b -> Maybe (b, a)) -> b -> [a]
const unfoldl = (f, v) => {
    let xs = [];
    return (
        until(
            mb => mb.Nothing,
            mb => (
                xs = [mb.Just[1]].concat(xs),
                f(mb.Just[1])
            ), Just(Tuple(v, v))
        ),
        xs.slice(1)
    );
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
const unfoldr = (f, v) => {
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
const union = (xs, ys) =>
  unionBy((a, b) => a === b, xs, ys);

// unionBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const unionBy = (fnEq, xs, ys) => {
    const sx = nubBy(fnEq, xs);
    return sx.concat(
        sx.reduce(
            (a, x) => deleteBy(fnEq, x, a),
            nubBy(fnEq, ys)
        )
    );
};

// unionSet :: Ord a => Set a -> Set a -> Set a
const unionSet = (s, s1) =>
    Array.from(s1.values())
    .reduce(
        (a, x) => (a.add(x), a),
        new Set(s)
    );

// unlines :: [String] -> String
const unlines = xs => xs.join('\n');

// If the list is empty returns Nothing, otherwise returns 
// Just the init and the last.
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    (0 < xs.length) ? (
        Just(Tuple(xs.slice(0, -1), xs.slice(-1)[0]))
    ) : Nothing();

// until :: (a -> Bool) -> (a -> a) -> a -> a
const until = (p, f, x) => {
    let v = x;
    while (!p(v)) v = f(v);
    return v;
};

// unwords :: [String] -> String
const unwords = xs => xs.join(' ');

// unzip :: [(a,b)] -> ([a],[b])
const unzip = xys =>
    xys.reduce(
        (a, x) => Tuple(...[0, 1].map(
            i => a[i].concat(x[i])
        )),
        Tuple([], [])
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

// Use of `take` and `length` here allows for zipping with non-finite 
// lists - i.e. generators like cycle, repeat, iterate.
// zip :: [a] -> [b] -> [(a, b)]
const zip = (xs, ys) => {
    const lng = Math.min(length(xs), length(ys));
    return Infinity !== lng ? (() => {
        const bs = take(lng, ys);
        return take(lng, xs).map((x, i) => Tuple(x, bs[i]));
    })() : zipGen(xs, ys);
};

// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = (xs, ys, zs) =>
    xs.slice(0, Math.min(length(xs), length(ys), length(zs)))
    .map((x, i) => TupleN(x, ys[i], zs[i]));

// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = (ws, xs, ys, zs) =>
    ws.slice(0, minimum([ws, xs, ys, zs].map(length)))
    .map((w, i) => TupleN(w, xs[i], ys[i], zs[i]));

// zipGen :: Gen [a] -> Gen [b] -> Gen [(a, b)]
const zipGen = (ga, gb) => {
    function* go(ma, mb) {
        let
            a = ma,
            b = mb;
        while(!a.Nothing && !b.Nothing) {
            let
                ta = a.Just,
                tb = b.Just
            yield(Tuple(fst(ta), fst(tb)));
            a = uncons(snd(ta));
            b = uncons(snd(tb));
        }
    }
    return go(uncons(ga), uncons(gb));
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
const zipWith = (f, xs, ys) => {
    const
        lng = Math.min(length(xs), length(ys)),
        as = take(lng, xs),
        bs = take(lng, ys);
    return Array.from({
        length:lng
    }, (_, i) => f(as[i], bs[i], i));
};

// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
const zipWith3 = (f, xs, ys, zs) =>
    Array.from({
        length: Math.min(length(xs), length(ys), length(zs))
    }, (_, i) => f(xs[i], ys[i], zs[i]));

// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = (f, ws, xs, ys, zs) =>
    Array.from({
        length: minimum([ws, xs, ys, zs].map(length))
    }, (_, i) => f(ws[i], xs[i], ys[i], zs[i]));

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