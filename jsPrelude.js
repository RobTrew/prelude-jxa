// JS PRELUDE – GENERIC FUNCTIONS

// EQ :: Ordering
const EQ = {
  type: 'Ordering',
  value: 0
};

// GT :: Ordering
const GT = {
    type: 'Ordering',
    value: 1
};

// Just :: a -> Just a
const Just = x => ({
    type: 'Maybe',
    Nothing: false,
    Just: x
});

// LT :: Ordering
const LT = {
  type: 'Ordering',
  value: -1
};

// Left :: a -> Either a b
const Left = x => ({
    type: 'Either',
    Left: x
});

// Node :: a -> [Tree a] -> Tree a
const Node = (v, xs) => ({
    type: 'Node',
    root: v, // any type of value (but must be consistent across tree)
    nest: xs || []
});

// Nothing :: () -> Nothing
const Nothing = () => ({
    type: 'Maybe',
    Nothing: true,
});

// Ordering :: Int -> Ordering
const Ordering = e =>
    ({
        type: 'Ordering',
        value: (e > 0 ? 1 : e < 0 ? -1 : 0)
    });

// Ratio :: Int -> Int -> Ratio
const Ratio = (n, d) => ({
    type: 'Ratio',
    'n': n, // numerator
    'd': d // denominator
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
            type: 'Tuple' + (lng > 2 ? lng.toString() : ''),
            length: lng
        })
    ) : args[0];
};

// | Absolute value.
// abs :: Num -> Num
const abs = Math.abs;

// Determines whether all elements of the structure 
// satisfy the predicate.
// all :: (a -> Bool) -> [a] -> Bool
const all = (p, xs) => xs.every(p);

// | The conjunction of a container of Bools. 
// True unless any contained value is false.
// and :: [Bool] -> Bool
const and = xs => {
    let i = xs.length;
    while (i--)
        if (!xs[i]) return false;
    return true;
};

// | True if any contained element satisfies the predicate.
// any :: (a -> Bool) -> [a] -> Bool
const any = (p, xs) => xs.some(p);

// Applies wrapped functions to wrapped values, 
// for example applying a list of functions to a list of values
// or applying Just(f) to Just(x), Right(f) to Right(x), etc
// ap (<*>) :: Monad m => m (a -> b) -> m a -> m b
const ap = (mf, mx) => {
    const t = mx.type;
    return (t !== undefined ? (
        t === 'Either' ? (
            apEither
        ) : t === 'Maybe' ? (
            apMaybe
        ) : t === 'Node' ? (
            apTree
        ) : apTuple
    ) : apList)(mf, mx);
};

// apLR (<*>) :: Either e (a -> b) -> Either e a -> Either e b
const apLR = (flr, lr) => {
    const pf = isRight(flr);
    return pf && isRight(lr) ? (
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
    [].concat.apply([], fs.map(f => //
        [].concat.apply([], xs.map(x => [f(x)]))));

// Maybe f applied to Maybe x, deriving a Maybe y
// apMaybe (<*>) :: Maybe (a -> b) -> Maybe a -> Maybe b
const apMaybe = (mf, mx) =>
    mf.Nothing || mx.Nothing ? (
        Nothing()
    ) : Just(mf.Just(mx.Just));

// apTuple (<*>) :: Monoid m => (m, (a -> b)) -> (m, a) -> (m, b)
const apTuple = (tf, tx) =>
    Tuple(
        mappend(tf[0], tx[0]),
        tf[1](tx[1])
    );

// append (++) :: [a] -> [a] -> [a]
// append (++) :: String -> String -> String
const append = (xs, ys) => xs.concat(ys);

// apply ($) :: (a -> b) -> a -> b
const apply = (f, x) => f(x);

// Epsilon -> Real -> Ratio
// approxRatio :: Real -> Real -> Ratio
const approxRatio = (eps, n) => {
    const
        gcde = (e, x, y) => {
            const _gcd = (a, b) => (b < e ? a : _gcd(b, a % b));
            return _gcd(Math.abs(x), Math.abs(y));
        },
        c = gcde(Boolean(eps) ? eps : (1 / 10000), 1, n);
    return Ratio(
        Math.floor(n / c), // numerator
        Math.floor(1 / c) // denominator
    );
};

// argvLength :: Function -> Int
const argvLength = f => f.length;

// assocs :: Map k a -> [(k, a)]
const assocs = m =>
    Object.keys(m).sort().map(k => Tuple(k, m[k]));

// bind (>>=) :: Monad m => m a -> (a -> m b) -> m b
const bind = (m, mf) =>
    (Array.isArray(m) ? (
        bindList
    ) : (() => {
        const t = m.type;
        return t === 'Either' ? (
            bindEither
        ) : t === 'Maybe' ? (
            bindMaybe
        ) : t === 'Tuple' ? (
            bindTuple
        ) : x => Left('No bind instance found for type: ' + t);
    })()(m, mf));

// bindLR (>>=) :: Either a -> (a -> Either b) -> Either b
const bindLR = (m, mf) =>
    m.Right !== undefined ? (
        mf(m.Right)
    ) : m;

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

// break :: (a -> Bool) -> [a] -> ([a], [a])
const break_ = (p, xs) => {
  for (var i = 0, lng = xs.length; (i < lng) && !p(xs[i]); i++) {};
  return Tuple(xs.slice(0, i), xs.slice(i));
};

// Needle -> Haystack -> (prefix before match, match + rest)
// breakOn :: String -> String -> (String, String)
const breakOn = (pat, src) =>
    Boolean(pat) ? (() => {
        const xs = src.split(pat);
        return xs.length > 1 ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src, '');
    })() : undefined;

// breakOnAll "::" ""
// ==> []
// breakOnAll "/" "a/b/c/"
// ==> [("a", "/b/c/"), ("a/b", "/c/"), ("a/b/c", "/")]
// breakOnAll :: String -> String -> [(String, String)]
const breakOnAll = (pat, src) =>
    pat !== '' ? (
        src.split(pat)
        .reduce((a, x, i, xs) =>
            i > 0 ? (
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
        return Just(xs.length > 1 ? Tuple(
            xs[0], src.slice(xs[0].length)
        ) : Tuple(src, ''));
    })() : Nothing();

// cartesianProduct :: [a] -> [b] -> [(a, b)]
const cartesianProduct = (xs, ys) =>
    concatMap((x => concatMap(y => [
        [Tuple(x, y)]
    ], ys)), xs);

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
    return nr[1] > 0 ? n + 1 : n;
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
    xs.reduce((a, _, i, xs) =>
        i % n ? a : a.concat([xs.slice(i, i + n)]), []);

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

// compose :: (b -> c) -> (a -> b) -> a -> c
const compose = (f, g) => x => f(g(x));

// composeListLR :: [(a -> a)] -> (a -> a)
const composeListLR = fs =>
    x => fs.reduce((a, f) => f(a), x);

// composeListRL :: [(a -> a)] -> (a -> a)
const composeListRL = fs =>
    x => fs.reduceRight((a, f) => f(a), x, fs);

// concat :: [[a]] -> [a]
// concat :: [String] -> String
const concat = xs =>
    xs.length > 0 ? (() => {
        const unit = typeof xs[0] === 'string' ? '' : [];
        return unit.concat.apply(unit, xs);
    })() : [];

// concatMap :: (a -> [b]) -> [a] -> [b]
const concatMap = (f, xs) => [].concat.apply([], xs.map(f));

// cons :: a -> [a] -> [a]
const cons = (x, xs) =>  [x].concat(xs);

// const_ :: a -> b -> a
const const_ = (k, _) => k;

// Flexibly handles two or more arguments, applying
// the function directly if the argument array is complete,
// or recursing with a concatenation of any existing and
// newly supplied arguments, if gaps remain.
// curry :: ((a, b) -> c) -> a -> b -> c
const curry = (f, ...args) => {
    const go = xs => xs.length >= f.length ? (
        f.apply(null, xs)
    ) : function () {
        return go(xs.concat(Array.from(arguments)));
    };
    return go(args);
};

// Simpler 2 argument only version of curry
// curry2 :: ((a, b) -> c) -> a -> b -> c
const curry2 = f => a => b => f(a, b);

// xs with first instance of x (if any) removed
// delete :: Eq a => a -> [a] -> [a]
const delete_ = (x, xs) =>
    xs.length > 0 ? (
        (x === xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(delete_(x, xs.slice(1)))
    ) : [];

// deleteAt :: Int -> [a] -> [a]
const deleteAt = (i, xs) =>
    xs.length >= i ? (() => {
        const lr = splitAt(i, xs);
        return lr[0].concat(lr[1].slice(1));
    })() : xs;

// deleteBy :: (a -> a -> Bool) -> a -> [a] -> [a]
const deleteBy = (f, x, xs) =>
    xs.length > 0 ? (
        f(x, xs[0]) ? (
            xs.slice(1)
        ) : [xs[0]].concat(deleteBy(f, x, xs.slice(1)))
    ) : [];

// deleteFirst :: a -> [a] -> [a]
const deleteFirst = (x, xs) =>
    xs.length > 0 ? (
        x === xs[0] ? (
            xs.slice(1)
        ) : [xs[0]].concat(deleteFirst(x, xs.slice(1)))
    ) : [];

// deleteFirstsBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const deleteFirstsBy = (fnEq, xs, ys) =>
    ys.reduce((x, y) => deleteBy(fnEq, y, x), xs);

// deleteMap :: k -> Dict -> Dict
const deleteMap = (k, dct) =>
    (delete dct[k], dct);

// difference (\\) :: Eq a => [a] -> [a] -> [a]
const difference = (xs, ys) =>
    xs.filter(x => ys.indexOf(x) === -1);

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
        return lng > 0 ? (
            lng > 1 ? append(
                cons(
                    '│',
                    shift('├─ ', '│  ', draw(xs[0]))
                ),
                drawSubTrees(xs.slice(1))
            ) : cons('│', shift('└─ ', '   ', draw(xs[0])))
        ) : [];
    };
    return append(
        lines(node.root),
        drawSubTrees(node.nest)
    );
};

// drawForest :: Forest String -> String
const drawForest = trees =>
    trees.map(drawTree).join('\n');

// drawTree :: Tree String -> String
const drawTree = tree =>
    unlines(draw(tree));

// drop :: Int -> [a] -> [a]
// drop :: Int -> String -> String
const drop = (n, xs) => xs.slice(n);

// dropAround :: (Char -> Bool) -> String -> String
const dropAround = (p, s) => dropWhile(p, dropWhileEnd(p, s));

// dropFileName :: FilePath -> FilePath
const dropFileName = strPath =>
    strPath !== '' ? (() => {
        const xs = (strPath.split('/'))
            .slice(0, -1);
        return xs.length > 0 ? (
            xs.join('/') + '/'
        ) : './';
    })() : './';

// dropWhile :: (a -> Bool) -> [a] -> [a]
const dropWhile = (p, xs) => {
  let i = 0;
  for (let lng = xs.length;
    (i < lng) && p(xs[i]); i++) {}
  return xs.slice(i);
};

// dropWhileEnd :: (Char -> Bool) -> String -> String
// dropWhileEnd :: (a -> Bool) -> [a] -> [a]
const dropWhileEnd = (p, s) => {
    let i = s.length;
    while (i-- && p(s[i])) {}
    return s.slice(0, i + 1);
};

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = (lf, rf, e) =>
    e.type === 'Either' ? (
        e.Left !== undefined ? (
            lf(e.Left)
        ) : rf(e.Right)
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
    return (typeof v)[0] !== 'u' ? (
        Just(bln ? v : Tuple(k, v))
    ) : Nothing();
};

// elemIndex :: Eq a => a -> [a] -> Maybe Int
const elemIndex = (x, xs) => {
    const i = xs.indexOf(x);
    return {
        Nothing: i === -1,
        Just: i
    };
};

// elemIndices :: Eq a => a -> [a] -> [Int]
const elemIndices = (x, xs) =>
    concatMap((y, i) => y === x ? (
        [i]
    ) : [], xs);

// elems :: Dict -> [a]
const elems = Object.values;

// enumFromThenTo :: Enum a => a -> a -> a -> [a]
const enumFromThenTo = (x1, x2, y) =>
    (typeof x1 !== 'number' ? (
        enumFromThenToChar
    ) : enumFromThenToInt)
    .apply(null, [x1, x2, y]);

// enumFromThenToChar :: Char -> Char -> Char -> [Char]
const enumFromThenToChar = (x1, x2, y) => {
    const [i1, i2, iY] = Array.from([x1, x2, y])
        .map(x => x.charCodeAt(0)),
        d = i2 - i1;
    return Array.from({
        length: (Math.floor(iY - i2) / d) + 2
    }, (_, i) => String.fromCodePoint(i1 + (d * i)));
};

// enumFromThenToInt :: Int -> Int -> Int -> [Int]
const enumFromThenToInt = (x1, x2, y) => {
    const d = x2 - x1;
    return Array.from({
        length: Math.floor(y - x2) / d + 2
    }, (_, i) => x1 + (d * i));
};

// enumFromTo :: Enum a => a -> a -> [a]
const enumFromTo = (m, n) =>
    (typeof m !== 'number' ? (
        enumFromToChar
    ) : enumFromToInt).apply(null, [m, n]);

// enumFromToChar :: Char -> Char -> [Char]
const enumFromToChar = (m, n) => {
    const [intM, intN] = [m, n].map(x => x.charCodeAt(0));
    return Array.from({
        length: Math.floor(intN - intM) + 1
    }, (_, i) => String.fromCodePoint(intM + i));
};

// enumFromToInt :: Int -> Int -> [Int]
const enumFromToInt = (m, n) =>
    m <= n ? iterateUntil(
        x => n <= x,
        x => 1 + x,
        m
    ) : [];

// eq (==) :: Eq a => a -> a -> Bool
const eq = (a, b) => {
    const t = typeof a;
    return t !== typeof b ? (
        false
    ) : t !== 'object' ? (
        a === b
    ) : (() => {
        const aks = Object.keys(a);
        return aks.length !== Object.keys(b).length ? (
            false
        ) : aks.every(k => eq(a[k], b[k]));
    })();
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
const even = n => n % 2 === 0;

// exp :: Float -> Float
const exp = n => Math.exp(n);

// Compose a function from a simple value to a tuple of
// the separate outputs of two different functions
// fanArrow (&&&) :: (a -> b) -> (a -> c) -> (a -> (b, c))
const fanArrow = (f, g) => x => Tuple(f(x), g(x));

// filePathTree :: filePath -> [Tree String] -> Tree filePath
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
        let x = xs[i];
        if (p(x)) return Just(x);
    }
    return Nothing();
};

// findIndex :: (a -> Bool) -> [a] -> Maybe Int
const findIndex = (p, xs) => {
    const i = xs.findIndex(p);
    return -1 !== i ? (
        Just(i)
    ) : Nothing();
};

// findIndexR :: (a -> Bool) -> [a] -> Maybe Int
const findIndexR = (p, xs) => {
    const i = reverse(xs).findIndex(p);
    return i !== -1 ? (
        Just(xs.length - (1 + i))
    ) : Nothing();
};

// findIndices :: (a -> Bool) -> [a] -> [Int]
const findIndices = (p, xs) =>
    concatMap((x, i) => p(x) ? (
        [i]
    ) : [], xs);

// Lift a simple function to one which applies to a tuple, 
// transforming only the first item of the tuple
// firstArrow :: (a -> b) -> ((a, c) -> (b, c))
const firstArrow = f => xy => Tuple(f(xy[0]), xy[1]);

// flatten :: NestedList a -> [a]
const flatten = t =>
    Array.isArray(t) ? (
        [].concat.apply([], t.map(flatten))
    ): t;

// flip :: (a -> b -> c) -> b -> a -> c
const flip = f => (a, b) => f.apply(null, [b, a]);

// floor :: Num -> Int
const floor = x => {
    const
      nr = properFraction(x),
      n = nr[0];
    return nr[1] < 0 ? n - 1 : n;
};

// fmap (<$>) :: Functor f => (a -> b) -> f a -> f b
const fmap = (f, fa) => {
    const t = fa.type;
    return (t !== undefined ? (
        t === 'Either' ? (
            fmapLR
        ) : t === 'Maybe' ? (
            fmapMay
        ) : t === 'Node' ? (
            fmapTree
        ) : fmapTuple
    ) : map)(f, fa);
};

// fmapLR (<$>) :: (a -> b) -> Either a a -> Either a b
const fmapLR = (f, lr) =>
    Object.keys(lr)
    .includes('Right') ? (
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
        x.nest.length > 0 ? mappend(
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
    xs.length > 1 ? xs.slice(1)
    .reduce(f, xs[0]) : xs[0];

// foldl1May :: (a -> a -> a) -> [a] -> Maybe a
const foldl1May = (f, xs) =>
    xs.length > 0 ? (
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
    xs.length > 0 ? init(xs)
    .reduceRight(f, last(xs)) : [];

// foldr1May :: (a -> a -> a) -> [a] -> Maybe a
const foldr1May = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(0, -1)
            .reduceRight(f, xs.slice(-1)[0]))
    ) : Nothing();

// fromEnum :: Enum a => a -> Int
const fromEnum = x => {
    const type = typeof x;
    return type === 'boolean' ? (
        x ? 1 : 0
    ) : type === 'string' ? x.charCodeAt(0) : x;
};

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

// gcd :: Int -> Int -> Int
const gcd = (x, y) => {
    const _gcd = (a, b) => (b === 0 ? a : _gcd(b, a % b));
    return _gcd(Math.abs(x), Math.abs(y));
};

// genericIndexMay :: [a] -> Int -> Maybe a
const genericIndexMay = (xs, i) =>
    (i < xs.length && i >= 0) ? Just(xs[i]) : Nothing();

// group :: Eq a => [a] -> [[a]]
const group = xs => groupBy((a, b) => a === b, xs);

// Typical usage: groupBy(on(eq, f), xs)
// groupBy :: (a -> a -> Bool) -> [a] -> [[a]]
const groupBy = (f, xs) => {
    const tpl = xs.slice(1)
        .reduce((a, x) => {
            const h = a[1].length > 0 ? a[1][0] : undefined;
            return h !== undefined && f(h, x) ? (
                Tuple(a[0], a[1].concat([x]))
            ) : Tuple(a[0].concat([a[1]]), [x]);
        }, Tuple([], xs.length > 0 ? [xs[0]] : []));
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
                typeof x === 'boolean' ? {
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

// head :: [a] -> a
const head = xs => xs.length ? xs[0] : undefined;

// headMay :: [a] -> Maybe a
const headMay = xs =>
    xs.length > 0 ? Just(xs[0]) : Nothing();

// id :: a -> a
const id = x => x;

// indented :: String -> String -> String
const indented = (strIndent, s) =>
    unlines(map(
        x => x !== '' ? strIndent + x : x,
        lines(s)
    ));

// index (!!) :: [a] -> Int -> a
const index = (xs, i) => xs[i];

// init :: [a] -> [a]
const init = xs => xs.length > 0 ? xs.slice(0, -1) : undefined;

// initMay :: [a] -> Maybe [a]
const initMay = xs =>
    xs.length > 0 ? Just(xs.slice(0, -1)) : Nothing();

// inits([1, 2, 3]) -> [[], [1], [1, 2], [1, 2, 3]
// inits('abc') -> ["", "a", "ab", "abc"]
// inits :: [a] -> [[a]]
// inits :: String -> [String]
const inits = xs => [
        []
    ]
    .concat((typeof xs === 'string' ? xs.split('') : xs)
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
    xs.length > 0 && typeof sep === 'string' &&
    typeof xs[0] === 'string' ? (
        xs.join(sep)
    ) : concat(intersperse(sep, xs));

// intercalateS :: String -> [String] -> String
const intercalateS = (s, xs) =>
    xs.join(s);

// intersect :: (Eq a) => [a] -> [a] -> [a]
const intersect = (xs, ys) => 
  xs.filter(x => ys.indexOf(x) !== -1);

// intersectBy :: (a -> a -> Bool) -> [a] -> [a] -> [a]
const intersectBy = (eq, xs, ys) => {
    const ceq = curry(eq);
    return (xs.length > 0 && ys.length > 0) ?
    xs.filter(x => ys.some(ceq(x))) : [];
};

// intersectionBy:: (a -> a -> Bool) -> [[a]] -> [a]
const intersectionBy = (eq, xs) =>
    foldr1(((a, x) => intersectBy(eq, a, x)), xs);

// intersperse(0, [1,2,3]) -> [1, 0, 2, 0, 3]
// intersperse :: Char -> String -> String
// intersperse :: a -> [a] -> [a]
const intersperse = (sep, xs) => {
    const bool = (typeof xs)[0] === 's';
    return xs.length > 1 ? (
        (bool ? concat : x => x)(
            (bool ? (
                xs.split('')
            ) : xs)
            .slice(1)
            .reduce((a, x) => a.concat([sep, x]), [xs[0]])
        )) : xs;
};

// isAlpha::Char - > Bool
const isAlpha = c =>
    /[A-Za-z0-9\u00C0-\u00FF]/.test(c);

// isChar :: a -> Bool
const isChar = x =>
    typeof x === 'string' && x.length === 1;

// isDigit :: Char -> Bool
const isDigit = c => {
  const n = ord(c);
  return n >= 48 && n <= 57;
};

// isInfixOf :: Eq a => [a] -> [a] -> Bool
// isInfixOf :: String -> String -> Bool
const isInfixOf = (needle, haystack) =>
    haystack.includes(needle);

// isLeft :: Either a b -> Bool
const isLeft = lr =>
    lr.type === 'Either' && lr.Left !== undefined;

// isLower :: Char -> Bool
const isLower = c =>
    /[a-z]/.test(c);

// isMaybe :: a -> Bool
const isMaybe = x =>
    x.type === 'Maybe';

// isNull :: [a] -> Bool
// isNull :: String -> Bool
const isNull = xs =>
    Array.isArray(xs) || typeof xs === 'string' ? (
        xs.length < 1
    ) : undefined;

// isPrefixOf takes two lists or strings and returns 
// true iff the first is a prefix of the second.
// isPrefixOf :: [a] -> [a] -> Bool
// isPrefixOf :: String -> String -> Bool
const isPrefixOf = (xs, ys) => {
    const pfx = (xs, ys) => {
        const intX = xs.length;
        return intX > 0 ? (
            ys.length >= intX ? xs[0] === ys[0] && pfx(
                xs.slice(1), ys.slice(1)
            ) : false
        ) : true;
    };
    return typeof xs !== 'string' ? pfx(xs, ys) : ys.startsWith(xs);
};

// isRight :: Either a b -> Bool
const isRight = lr =>
  (typeof lr !== 'undefined') && 
  lr.type === 'Either' && lr.Right !== undefined;

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

// isSuffixOf :: Eq a => [a] -> [a] -> Bool
// isSuffixOf :: String -> String -> Bool
const isSuffixOf = (suffix, main) =>
    main.indexOf(suffix) === main.length - suffix.length;

// isUpper :: Char -> Bool
const isUpper = c =>
    /[A-Z]/.test(c);

// iso8601Local :: Date -> String
const iso8601Local = dte =>
    new Date(dte - (6E4 * dte.getTimezoneOffset()))
    .toISOString();

// iterateUntil :: (a -> Bool) -> (a -> a) -> a -> [a]
const iterateUntil = (p, f, x) => {
    const vs = [x];
    let h = x;
    while (!p(h))(h = f(h), vs.push(h));
    return vs;
};

// jsonLog :: a -> IO ()
const jsonLog = (...args) =>
    console.log(
        args
        .map(JSON.stringify)
        .join(' -> ')
    );

// justifyLeft :: Int -> Char -> String -> String
const justifyLeft = (n, cFiller, strText) =>
    n > strText.length ? (
        (strText + cFiller.repeat(n))
        .substr(0, n)
    ) : strText;

// justifyRight :: Int -> Char -> String -> String
const justifyRight = (n, cFiller, strText) =>
    n > strText.length ? (
        (cFiller.repeat(n) + strText)
        .slice(-n)
    ) : strText;

// keys :: Dict -> [String]
const keys = dct => Object.keys(dct);

// Kleisli composition LR
// kleisliCompose (>=>) :: Monad m => (a -> m b) -> (b -> m c) -> (a -> m c)
const kleisliCompose = (f, g) =>
    x => bind(f(x), g);

// last :: [a] -> a
const last = xs => xs.length ? xs.slice(-1)[0] : undefined;

// lastMay :: [a] -> Maybe a
const lastMay = xs => xs.length > 0 ? (
    Just(xs.slice(-1)[0])
) : Nothing();

// lcm :: Int -> Int -> Int
const lcm = (x, y) =>
   ( x === 0 || y === 0) ? 0 : Math.abs(Math.floor(x / gcd(x, y)) * y);

// lefts :: [Either a b] -> [a]
const lefts = xs =>
    concatMap(
        x => x.type === 'Either' && x.Left !== undefined ? (
            [x.Left]
        ) : [], xs
    );

// length :: [a] -> Int
const length = xs => xs.length;

// levelNodes :: Tree a -> [[Tree a]]
const levelNodes = tree =>
  iterateUntil(
    xs => xs.length < 1,
    xs => concatMap(x => x.nest, xs), [tree]
  );

// levels :: Tree a -> [[a]]
const levels = tree =>
    map(xs => map(x => x.root, xs),
        iterateUntil(
            xs => xs.length < 1,
            xs => concatMap(x => x.nest, xs), [tree]
        )
    );

// Lift a binary function to actions.
// liftA2 f a b = fmap f a <*> b
// liftA2 :: Applicative f => (a -> b -> c) -> f a -> f b -> f c
const liftA2 = (f, a, b) =>
    Array.isArray(a) ? (
        liftA2List(f, a, b)
    ) : (t => Boolean(t) ? (
        t === 'Either' ? (
            liftA2LR(f, a, b)
        ) : t === 'Maybe' ? (
            liftA2Maybe(f, a, b)
        ) : t === 'Tuple' ? (
            liftA2Tuple(f, a, b)
        ) : undefined
    ) : undefined)(a.type);

// liftA2LR :: (a -> b -> c) -> Either d a -> Either d b -> Either d c
const liftA2LR = (f, a, b) =>
    a.Right !== undefined ? (
        b.Right !== undefined ? (
            Right(f(a.Right, b.Right))
        ) : b
    ) : a;

// liftA2List :: (a -> b -> c) -> [a] -> [b] -> [c]
const liftA2List = (f, xs, ys) =>
    concatMap(x => concatMap(y => [f(x, y)], ys), xs);

// liftA2Maybe :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2Maybe = (f, a, b) =>
    a.Nothing ? a : b.Nothing ? b : Just(f(a.Just, b.Just));

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
const liftM2 = (f, a, b) =>
    Array.isArray(a) ? (
        ap(map((g => x => y => g(x, y))(f), a), b)
    ) : Object.keys(a)
    .indexOf('Nothing') !== -1 ? (
        a.Nothing || b.Nothing ? a : pureMay(f(a.Just, b.Just))
    ) : undefined;

// liftMmay :: (a -> b) -> (Maybe a -> Maybe b)
const liftMmay = f =>
    mb => mb.Nothing ? mb : {
        Nothing: false,
        Just: f(mb.Just)
    };

// lines :: String -> [String]
const lines = s => s.split(/[\r\n]/);

// listFromTuple (a, a ...) -> [a]
const listFromTuple = tpl =>
    Object.keys(tpl)
    .sort()
    .reduce(
        (a, k) => k !== 'type' ? (
            a.concat(tpl[k])
        ) : a, []
    );

// The listToMaybe function returns Nothing on 
// an empty list or Just the head of the list.
// listToMaybe :: [a] -> Maybe a
const listToMaybe = xs =>
    xs.length > 0 ? (
        Just(xs[0])
    ) : Nothing();

// log :: Float -> Float
const log = n => Math.log(n);

// lookup :: Eq a => a -> Container -> Maybe b
const lookup = (k, m) =>
    (Array.isArray(m) ? (
        lookupTuples
    ) : lookupDict)(k, m);

// lookupDict :: a -> Dict -> Maybe b
const lookupDict = (k, dct) => {
    const v = dct[k];
    return v !== undefined ? (
        Just(v)
    ) : Nothing();
};

// lookupTuples :: Eq a => a -> [(a, b)] -> Maybe b
const lookupTuples = (k, kvs) =>
    bindMay(
        find(x => k === fst(x), kvs),
        x => Just(snd(x))
    );

// Not required in JS, which has first functions by default
// Included for comparison with AS, which can only obtain
// first class functions by lifting 'handlers' into 'scripts'
// as anonymous |λ|() functions.

// Here Just an alternative name for id.
// mReturn :: First-class m => (a -> b) -> m (a -> b)
const mReturn = id;

// map :: (a -> b) -> [a] -> [b]
const map = (f, xs) => xs.map(f);

// 'The mapAccumL function behaves like a combination of map and foldl; 
// it applies a function to each element of a list, passing an accumulating 
// parameter from left to right, and returning a final value of this 
// accumulator together with the new list.' (See Hoogle)
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
                [(typeof k === 'string' && k) || show(k)]: kv[1]
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
    concatMap(compose(mf, maybeToList), xs);

// mappend (<>) :: Monoid a => a -> a -> a
const mappend = (a, b) => {
    const t = a.type;
    return (Boolean(t) ? (
        t === 'Maybe' ? (
            mappendMaybe
        ) : t === 'Ordering' ? (
            mappendOrdering
        ) : mappendTuple
    ) : append)(a, b);
};

// mappendComparing :: [(a -> b)] -> (a -> a -> Ordering)
const mappendComparing = fs =>
    (x, y) => fs.reduce(
        (ordr, f) => ordr || compare(f(x), f(y)),
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
            return ordr !== 0 ? (
                ordr
            ) : fb[1] ? (
                compare(f(x), f(y))
            ) : compare(f(y), f(x));
        }, 0
    );

// mappendMaybe (<>) :: Maybe a -> Maybe a -> Maybe a
const mappendMaybe = (a, b) =>
    a.Nothing ? b : b.Nothing ? a :
    Just(mappend(a.Just, b.Just));

// mappendOrdering (<>) :: Ordering -> Ordering -> Ordering
const mappendOrdering = (a, b) => eqOrdering(EQ, a) ? b : a;

// mappendTuple (<>) :: (a, b) -> (a, b) -> (a, b)
const mappendTuple = (t, t2) =>
    Tuple(mappend(t[0], t1[0]), mappend(t[1], t1[1]));

// max :: Ord a => a -> a -> a
const max = (a, b) => b > a ? b : a;

// maximum :: Ord a => [a] -> a
const maximum = xs =>
    xs.length > 0 ? (
        foldl1((a, x) => x > a ? x : a, xs)
    ) : undefined;

//  Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
// maximumBy :: (a -> a -> Ordering) -> [a] -> a
const maximumBy = (f, xs) =>
    xs.length > 0 ? (
        xs.slice(1)
        .reduce((a, x) => f(x, a) > 0 ? x : a, xs[0])
    ) : undefined;

//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n) 
// maximumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const maximumByMay = (f, xs) =>
    xs.length > 0 ? (
        Just(xs.slice(1)
            .reduce((a, x) => f(x, a) > 0 ? x : a, xs[0]))
    ) : Nothing();

// maximumMay :: Ord a => [a] -> Maybe a
const maximumMay = xs =>
    xs.length > 0 ? (
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
    xs.length > 0 ? (
        foldl1((a, x) => x < a ? x : a, xs)
    ) : undefined;

//Ordering: (LT|EQ|GT):
//  GT: 1 (or other positive n)
//	EQ: 0
//  LT: -1 (or other negative n)
// minimumBy :: (a -> a -> Ordering) -> [a] -> a
const minimumBy = (f, xs) =>
    xs.reduce((a, x) => a === undefined ? x : (
        f(x, a) < 0 ? x : a
    ), undefined);

// minimumByMay :: (a -> a -> Ordering) -> [a] -> Maybe a
const minimumByMay = (f, xs) =>
    xs.reduce((a, x) => a.Nothing ? Just(x) : (
        f(x, a.Just) < 0 ? Just(x) : a
    ), Nothing());

// minimumMay :: [a] -> Maybe a
const minimumMay = xs =>
    xs.length > 0 ? (
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
const notElem = (x, xs) => xs.indexOf(x) === -1;

// nub :: [a] -> [a]
const nub = xs => nubBy((a, b) => a === b, xs);

// nubBy :: (a -> a -> Bool) -> [a] -> [a]
const nubBy = (p, xs) => {
    const go = xs => xs.length > 0 ? (() => {
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

// or :: [Bool] -> Bool
const or = xs => {
    let i = xs.length;
    while (i--)
        if (xs[i]) return true;
    return false;
};

// ord :: Char -> Int
const ord = c => c.codePointAt(0);

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

// partitionEithers :: [Either a b] -> ([a], [b])
const partitionEithers = xs =>
    xs.reduce((a, x) =>
        x.Left !== undefined ? (
            Tuple(a[0].concat(x.Left), a[1])
        ) : Tuple(a[0], a[1].concat(x.Right)),
        Tuple([], [])
    );

// permutations :: [a] -> [[a]]
const permutations = xs =>
    xs.length ? concatMap(x => concatMap(ys => [
            [x].concat(ys)
        ],
        permutations(delete_(x, xs))), xs) : [
        []
    ];

// permutationsWithRepetition :: Int -> [a] -> [[a]]
const permutationsWithRepetition = (n, xs) =>
    xs.length > 0 ? (
        map(flatten, foldl1(x => cartesianProduct(xs, x), replicate(n, xs)))
    ) : [];

// pi :: Float
const pi = Math.PI;

// plus :: Num -> Num -> Num
const plus = (a, b) => a + b;

// pred :: Enum a => a -> a
const pred = x =>
    isChar(x) ? (
        chr(ord(x) - 1)
    ) : isNaN(x) ? (
        undefined
    ) : x - 1;

// product :: [Num] -> Num
const product = xs => xs.reduce((a, x) => a * x, 1);

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

// pureT :: f a -> (a -> f a)
const pureT = x =>
    Array.isArray(x) ? (
        pureList
    ) : (() => {
        const t = x.type;
        return t !== undefined ? (
            t === 'Either' ? (
                pureLR
            ) : t === 'Maybe' ? (
                pureMay
            ) : t === 'Tree' ? (
                pureTree
            ) : t === 'Tuple' ? (
                pureTuple
            ) : pureList
        ) : pureList;
    })();

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
                x => cmp(x, h) !== 1,
                xs.slice(1)
            );
        return [].concat.apply(
            [], [quickSortBy(cmp, lessMore[0]), h, quickSortBy(cmp, lessMore[1])]
        );
    })() : xs;

// quot :: Int -> Int -> Int
const quot = (n, m) => Math.floor(n / m);

// quotRem :: Int -> Int -> (Int, Int)
const quotRem = (m, n) => Tuple(Math.floor(m / n), m % n);

// raise :: Num -> Int -> Num
const raise = (n, e) => Math.pow(n, e);

// randomRInt :: Int -> Int -> Int
const randomRInt = (low, high) =>
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
        ab = args.length !== 1 ? (
            args
        ) : args[0],
        [as, bs] = [ab[0], ab[1]].map(
            x => Array.isArray(x) ? (
                x
            ) : (x.type !== undefined) &&
            (x.type.startsWith('Tuple')) ? (
                listFromTuple(x)
            ) : [x]
        ),
        an = as.length;
    return (an === bs.length) ? (
        an > 1 ? (
            sequenceAList(as.map((_, i) => enumFromTo(as[i], bs[i])))
        ) : enumFromTo(as[0], bs[0])
    ) : [];
};

// read :: Read a => String -> a
const read = JSON.parse;

// readJSON :: String -> a
const readJSON = JSON.parse;

// readJSONLR :: Read a => String -> Either String a
const readJSONLR = strJSON => {
    try {
        return Right(JSON.parse(strJSON));
    } catch (e) {
        // message, line, column, stack
        return Left(
            'line:' + e.line +
            ' col:' + e.column + ':\n' + e.message
        );
    }
};

// readMay :: Read a => String -> Maybe a
const readMay = s => {
    try {
        return Just(JSON.parse(s))
    } catch (e) {
        return Nothing();
    };
};

// recip :: Num -> Num
const recip = n =>
    n !== 0 ? (1 / n) : undefined;

// recipMay :: Num -> Maybe Num
const recipMay = n =>
    n === 0 ? (
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

// replace :: String -> String -> String -> String
// replace :: Regex -> String -> String -> String
const replace = (needle, strNew, strHaystack) =>
    strHaystack.replace(
        typeof needle !== 'string' ? (
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
    const loop = x => x <= 0 ? [
        []
    ] : liftA2(cons, xs, loop(x - 1));
    return loop(n);
};

// replicateString :: Int -> String -> String
const replicateString = (n, s) => s.repeat(n);

// reverse :: [a] -> [a]
const reverse = xs =>
    typeof xs === 'string' ? (
        xs.split('')
        .reverse()
        .join('')
    ) : xs.slice(0)
    .reverse();

// rights :: [Either a b] -> [b]
const rights = xs =>
    concatMap(
        x => x.type === 'Either' && x.Right !== undefined ? (
            [x.Right]
        ) : [], xs
    );

// rotate :: Int -> [a] -> [a]
const rotate = (n, xs) => {
    const lng = xs.length;
    return lng > 0 ? takeDropCycle(lng, n, xs) : [];
};

// round :: a -> Int
const round = x => {
    const
        nr = properFraction(x),
        [n, r] = [nr[0], nr[1]]
        m = n + (r < 0 ? -1 : 1),
        sign = signum(abs(r) - 0.5);
    return sign === -1 ? n : (
        sign === 0 ? (even(n) ? n : m) : (
            sign === 1 ? m : undefined
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

// sequenceAList :: Applicative f => [f a] -> f [a]
const sequenceAList = us =>
    us.length > 0 ? (
        us.reduceRight(
            (v, u) => ap(fmap(x => xs => [x, ...xs], u), v),
            pureT(us[0])([])
        )
    ) : us;

// show :: a -> String
// show :: a -> Int -> Indented String
const show = (x, n) => {
    const
        e = typeof x !== 'function' ? (
            x
        ) : {
            type: 'Function',
            f: x
        };
    return JSON.stringify(e, (_, v) => {
        const
            f = (v !== null && v !== undefined) ? (() => {
                const t = v.type;
                return t === 'Either' ? (
                    showLR
                ) : t === 'Function' ? (
                    dct => 'λ' + dct.f.toString()
                ) : t === 'Maybe' ? (
                    showMaybe
                ) : t === 'Ordering' ? (
                    showOrdering
                ) : t === 'Ratio' ? (
                    showRatio
                ) : t === 'Tuple' ? (
                    showTuple
                ) : t === 'Tuple3' ? (
                    showTuple3
                ) : t === 'Tuple4' ? (
                    showTuple4
                ) : undefined;
            })() : showUndefined;
        return Boolean(f) ? (
            f(v)
        ) : typeof v !== 'string' ? (
            v
        ) : "'" + v + "'";
    }, n)
};

// showBinary :: Int -> String
const showBinary = n => {
    const binaryChar = n => n !== 0 ? '1' : '0';
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
    const showIt = ([n, d], r) => {
        const r_ = toChr(d) + r;
        return n !== 0 ? (
            showIt(quotRem(n, base), r_)
        ) : r_;
    };
    return base <= 1 ? (
        'error: showIntAtBase applied to unsupported base'
    ) : n < 0 ? (
        'error: showIntAtBase applied to negative number'
    ) : showIt(quotRem(n, base), rs);
};

// showJSON :: a -> String
const showJSON = x => JSON.stringify(x, null, 2);

// showLR :: Either a b -> String
const showLR = lr => {
    const k = lr.Left !== undefined ? (
        'Left'
    ) : 'Right';
    return k + '(' + unQuoted(show(lr[k])) + ')';
};

// showList :: [a] -> String
const showList = show;

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
    e.value > 0 ? (
        'GT'
    ) : e.value < 0 ? (
        'LT'
    ) : 'EQ';

// showRatio :: Ratio -> String
const showRatio = nd =>
    nd.n.toString() + '/' + nd.d.toString();

// showTuple :: Tuple -> String
const showTuple = tpl =>
    '(' + [0, 1].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';

// showTuple3 :: Tuple3 -> String
const showTuple3 = tpl =>
    '(' + [0, 1, 2].map(x => unQuoted(show(tpl[x])))
    .join(',') + ')';

// showTuple4 :: Tuple4 -> String
const showTuple4 = tpl =>
    '(' + [0, 1, 2, 3].map(x => unQuoted(show(tpl[x])))
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
const signum = n => n < 0 ? -1 : (n > 0 ? 1 : 0);

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
                typeof x === 'boolean' ? {
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
// span :: (a -> Bool) -> [a] -> ([a],[a])
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

// splitAt :: Int -> [a] -> ([a],[a])
const splitAt = (n, xs) => Tuple(xs.slice(0, n), xs.slice(n));

// Splitting not on a delimiter, but whenever the relationship between
// two consecutive items matches a supplied predicate function
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
    strPath !== '' ? (
        strPath[strPath.length - 1] !== '/' ? (() => {
            const
                xs = strPath.split('/'),
                stem = xs.slice(0, -1);
            return stem.length > 0 ? (
                Tuple(stem.join('/') + '/', xs.slice(-1)[0])
            ) : Tuple('./', xs.slice(-1)[0]);
        })() : Tuple(strPath, '')
    ) : Tuple('./', '');

// splitOn :: String -> String -> [String]
// splitOn :: a -> [a] -> [[a]]
const splitOn = (needle, haystack) =>
    typeof haystack === 'string' ? (
        haystack.split(needle)
    ) : (() => {
        const tpl = haystack.reduce(
            (a, x) => needle === x ? Tuple(
                a[0].concat([a[1]]), []
            ) : Tuple(a[0], a[1].concat(x)),
            Tuple([], [])
        );
        return tpl[0].concat([tpl[1]]);
    })();

// splitRegex :: Regex -> String -> [String]
const splitRegex = (needle, haystack) =>
    haystack.split(needle);

// sqrt :: Num -> Num
const sqrt = n =>
    n >= 0 ? Math.sqrt(n) : undefined;

// sqrtMay :: Num -> Maybe Num
const sqrtMay = n =>
    n < 0 ? (
        Nothing()
    ) : Just(Math.sqrt(n));

// strip :: String -> String
const strip = s => s.trim();

// stripEnd :: String -> String
const stripEnd = s => dropWhileEnd(isSpace, s);

// stripPrefix :: Eq a => [a] -> [a] -> Maybe [a]
const stripPrefix = (pfx, s) => {
    const
        blnString = typeof pfx === 'string',
        [xs, ys] = blnString ? (
            [pfx.split(''), s.split('')]
        ) : [pfx, s];
    const
        sp_ = (xs, ys) => xs.length === 0 ? (
            Just(blnString ? ys.join('') : ys)
        ) : (ys.length === 0 || xs[0] !== ys[0]) ? (
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
    return typeof xs === 'string' ? (
        cons('', nonEmptySubsequences(xs.split(''))
            .map(x => ''.concat.apply('', x))) // map(concat)
    ) : cons([], nonEmptySubsequences(xs));
};

// subtract :: Num -> Num -> Num
const subtract = (x, y) => y - x;

// succ :: Enum a => a -> a
const succ = x =>
    isChar(x) ? (
        chr(ord(x) + 1)
    ) : isNaN(x) ? (
        undefined
    ) : x + 1;

// sum :: [Num] -> Num
const sum = xs => xs.reduce((a, x) => a + x, 0);

// swap :: (a, b) -> (b, a)
const swap = ab =>
    Tuple(ab[1], ab[0]);

// tail :: [a] -> [a]
const tail = xs => xs.length > 0 ? xs.slice(1) : [];

// tailMay :: [a] -> Maybe [a]
const tailMay = xs =>
    xs.length > 0 ? (
        Just(xs.slice(1))
    ) : Nothing();

// tails :: [a] -> [[a]]
const tails = xs => {
    const xs_ = typeof xs === 'string' ? xs.split('') : xs;
    return xs_.map((_, i) => xs_.slice(i))
        .concat([
            []
        ]);
};

// take :: Int -> [a] -> [a]
const take = (n, xs) => xs.slice(0, n);

// takeAround :: (a -> Bool) -> [a] -> [a]
const takeAround = (p, xs) => {
    const ys = takeWhile(p, xs);
    return ys.length < xs.length ? (
        ys.concat(takeWhileR(p, xs))
    ) : ys;
};

// takeBaseName :: FilePath -> String
const takeBaseName = strPath =>
  strPath !== '' ? (
    strPath[strPath.length - 1] !== '/' ? (() => {
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
  return (lng >= n ? xs : concat(replicate(Math.ceil(n / lng), xs)))
  .slice(0, n)
};

// takeDirectory :: FilePath -> FilePath
const takeDirectory = strPath =>
    strPath !== '' ? (() => {
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
    return lng > 1 ? (
        '.' + xs[lng - 1]
    ) : '';
};

// takeFileName :: FilePath -> FilePath
const takeFileName = strPath =>
    strPath !== '' ? (
        strPath[strPath.length - 1] !== '/' ? (
            strPath.split('/')
            .slice(-1)[0]
        ) : ''
    ) : '';

// takeIterate n f x == [x, f x, f (f x), ...]
// takeIterate :: Int -> (a -> a) -> a -> [a]
const takeIterate = (n, f, x) =>
    snd(mapAccumL((a, _, i) => {
        const v = i !== 0 ? f(a) : x;
        return [v, v];
    }, x, Array.from({
        length: n
    })));

// takeWhile :: (a -> Bool) -> [a] -> [a]
const takeWhile = (p, xs) => {
    let i = 0;
    const lng = xs.length;
    while ((i < lng) && p(xs[i])) (i = i + 1);
    return xs.slice(0, i);
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
    ) : thenIO)
    .apply(null, [ma, mb]);

// thenIO (>>) :: IO a -> IO b -> IO b
const thenIO = (ma, mb) => mb;

// thenList (>>) :: [a] -> [b] -> [b]
const thenList = (xs, ys) =>
    concatMap(_ => ys, xs);

// thenMay (>>) :: Maybe a -> Maybe b -> Maybe b
const thenMay = (mbx, mby) =>
    mbx.Nothing ? mbx : mby;

// toListTree :: Tree a -> [a]
const toListTree = tree => {
    const go = x => [
      x.root,
      ...[].concat.apply([], x.nest.map(go))
    ];
    return go(tree);
};

// toLower :: String -> String
const toLower = s => s.toLowerCase();

// toRatio :: Real -> Ratio
const toRatio = n =>
    approxRatio(1e-12, n);

// Sentence case - initial string capitalized and rest lowercase
// toSentence :: String -> String
const toSentence = s =>
    s.length > 0 ? (
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
const toUpper = s => s.toUpperCase();

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

// - Map each element of a structure to an action,
// - evaluate these actions from left to right,
// - and collect the results.

// traverse :: (Traversable t, Applicative f) => (a -> f b) -> t a -> f (t b)
// traverse_ f = foldr cons_f (pure [])
//   where cons_f x a = ((:) <$> (f x)) <*> a
// traverseList :: (Applicative f) => (a -> f b) -> [a] -> f (t b)
const traverseList = (f, xs) =>
    sequenceAList(fmap(f, xs));

// treeLeaves :: Node -> [Node]
const treeLeaves = oNode => {
  const nest = oNode.nest;
  return nest.length > 0 ? (
    concatMap(treeLeaves, nest)
  ) : [oNode];
};

// truncate :: Num -> Int
const truncate = x => {
    const [m, _] = properFraction(x);
    return m;
};

// tupleFromArray [a] -> (a, a ...)
const tupleFromArray = xs => {
    const lng = xs.length;
    return lng > 1 ? xs.reduce(
        (a, x, i) => Object.assign(a, {
            [i.toString()]: x
        }), {
            type: 'Tuple' + (lng > 2 ? lng.toString() : '')
        }
    ) : undefined;
};

// typeName :: a -> String
const typeName = v => {
    const t = typeof v;
    return t === 'object' ? (
        Array.isArray(v) ? (
            'List'
        ) : v !== null ? (
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
const uncons = xs =>
    xs.length > 0 ? (
        Just(Tuple(xs[0], xs.slice(1)))
    ) : Nothing();

// Converts a function of more than one argument
// to a function on Tuple type (Tuple ... TupleN)
// or array which contains those arguments.
// This implementation uses the fact that the Tuple
// constructors create an object with a private .length property
// uncurry :: (a -> b -> c) -> ((a, b) -> c)
const uncurry = f => args => f.apply(null, args);

// | Build a forest from a list of seed values
// unfoldForest :: (b -> (a, [b])) -> [b] -> Forest
const unfoldForest = (f, xs) =>
    xs.map(b => unfoldTree(f, b));

// | Build a tree from a seed value
// unfoldTree :: (b -> (a, [b])) -> b -> Tree a
const unfoldTree = (f, b) => {
    const tpl = f(b);
    return Node(tpl[0], unfoldForest(f, tpl[1]));
};

// (x => Maybe [value, remainder] -> initial value -> values
// unfoldl :: (b -> Maybe (a, b)) -> b -> [a]
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

// The 'unfoldr' function is a \`dual\' to 'foldr': while 'foldr'
// reduces a list to a summary value, 'unfoldr' builds a list from
// a seed value.  The function takes the element and returns 'Nothing'
// if it is done producing the list or returns 'Just' @(a,b)@, in which
// case, @a@ is a prepended to the list and @b@ is used as the next
// element in a recursive call.
//
// unfoldr(b => b === 0 ? Nothing() : Just(Tuple(b, b - 1)), 10);
// --> [10,9,8,7,6,5,4,3,2,1]

// (x => Maybe [value, remainder] -> initial value -> values
// unfoldr :: (b -> Maybe (a, b)) -> b -> [a]
const unfoldr = (f, v) => {
    let xs = [];
    return (
        until(
            mb => mb.Nothing,
            mb => (
                xs.push(mb.Just[0]),
                f(mb.Just[1])
            ), Just(Tuple(v, v))
        ),
        xs.slice(1)
    );
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

// unlines :: [String] -> String
const unlines = xs => xs.join('\n');

// If the list is empty returns Nothing, otherwise returns 
// Just the init and the last.
// unsnoc :: [a] -> Maybe ([a], a)
const unsnoc = xs =>
    xs.length > 0 ? (
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
        (a, x) => Tuple.apply(null, [0, 1].map(
            i => a[i].concat(x[i])
        )),
        Tuple([], [])
    );

// unzip3 :: [(a,b,c)] -> ([a],[b],[c])
const unzip3 = xyzs =>
    xyzs.reduce(
        (a, x) => Tuple3.apply(null, [0, 1, 2].map(
            i => a[i].concat(x[i])
        )),
        Tuple3([], [], [])
    );

// unzip4 :: [(a,b,c,d)] -> ([a],[b],[c],[d])
const unzip4 = wxyzs =>
    wxyzs.reduce(
        (a, x) => Tuple4.apply(null, [0, 1, 2, 3].map(
            i => a[i].concat(x[i])
        )),
        Tuple4([], [], [], [])
    );

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
const zip = (xs, ys) =>
    xs.slice(0, Math.min(xs.length, ys.length))
    .map((x, i) => Tuple(x, ys[i]));

// zip3 :: [a] -> [b] -> [c] -> [(a, b, c)]
const zip3 = (xs, ys, zs) =>
    xs.slice(0, Math.min(xs.length, ys.length, zs.length))
    .map((x, i) => Tuple3(x, ys[i], zs[i]));

// zip4 :: [a] -> [b] -> [c] -> [d] -> [(a, b, c, d)]
const zip4 = (ws, xs, ys, zs) =>
    ws.slice(0, Math.min(
        xs.length, xs.length, ys.length, zs.length
    ))
    .map((w, i) => Tuple4(w, xs[i], ys[i], zs[i]));

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) =>
    Array.from({
        length: Math.min(xs.length, ys.length)
    }, (_, i) => f(xs[i], ys[i], i));

// zipWith3 :: (a -> b -> c -> d) -> [a] -> [b] -> [c] -> [d]
const zipWith3 = (f, xs, ys, zs) =>
    Array.from({
        length: Math.min(xs.length, ys.length, zs.length)
    }, (_, i) => f(xs[i], ys[i], zs[i]));

// zipWith4 :: (a -> b -> c -> d -> e) -> [a] -> [b] -> [c] -> [d] -> [e]
const zipWith4 = (f, ws, xs, ys, zs) =>
    Array.from({
        length: Math.min(ws.length, xs.length, ys.length, zs.length)
    }, (_, i) => f(ws[i], xs[i], ys[i], zs[i]));