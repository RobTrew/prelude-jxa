(() => {
    "use strict";

    const main = () => {
        const tree = Node("Alpha")([
            Node("Beta")([
                Node("Gamma")([]),
                Node("Delta")([]),
                Node("Epsilon")([])
            ]),
            Node("Zeta")([Node("Eta")([])]),
            Node("Theta")([
                Node("Iota")([]),
                Node("Kappa")([]),
                Node("Lambda")([])
            ])
        ]);

        return indexedTree(0)(tree);
    };

    // --------------------- GENERIC ---------------------

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

    // Tuple (,) :: a -> b -> (a, b)
    const Tuple = a =>
        b => ({
            type: "Tuple",
            "0": a,
            "1": b,
            length: 2
        });

    // compose (<<<) :: (b -> c) -> (a -> b) -> a -> c
    const compose = (...fs) =>
        // A function defined by the right-to-left
        // composition of all the functions in fs.
        fs.reduce(
            (f, g) => x => f(g(x)),
            x => x
        );

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

    // mapAccumL :: (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
    const mapAccumL = f =>
        // A tuple of an accumulation and a list
        // obtained by a combined map and fold,
        // with accumulation from left to right.
        acc => xs => [...xs].reduce((a, x) => {
            const pair = f(a[0])(x);

            return Tuple(pair[0])(a[1].concat(pair[1]));
        }, Tuple(acc)([]));

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

    // root :: Tree a -> a
    const root = tree =>
        // The value attached to a tree node.
        tree.root;

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

    // snd :: (a, b) -> b
    const snd = tpl =>
        // Second member of a pair.
        tpl[1];

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

    return sj(main());
})();