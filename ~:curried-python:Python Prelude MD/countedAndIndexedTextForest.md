```js
// countedAndIndexedTextForest :: String ->
// (Int, [Tree (Int, String)])
const countedAndIndexedTextForest = txt =>
    // A tuple of a line count and a 
    // forest of trees with line numbers,
    // obtained from an indented text.
    second(nest)(
        fst(parse(
            fmapP(xs => mapAccumL_Tree(
                a => x => Tuple(
                    succ(a)
                )(Tuple(a)(x))
            )(-1)(
                Node({})(xs)
            ))(forest())
        )(txt)[0])
    );
```