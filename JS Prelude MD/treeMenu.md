```js
// treeMenu :: Tree String -> IO [String]
const treeMenu = tree => {
    const go = t => {
        const
            strTitle = t.root,
            subs = t.nest,
            menu = map(root, subs),
            blnMore = 0 < concatMap(nest, subs).length;
        return until(
            // This menu is cancelled, or a leaf-menu choice is made.
            tpl => !fst(tpl) || !isNull(snd(tpl)),
            tpl => either(
                _ => Tuple(false, []),
                x => Tuple(true, x),
                bindLR(
                    showMenuLR(!blnMore, strTitle, menu),
                    ks => {
                        const
                            k = ks[0],
                            chosen = find(x => k === x.root, subs)
                            .Just;
                        return Right(
                            isNull(chosen.nest) ? ks : go(chosen)
                        );
                    }
                )
            ),
            Tuple(true, [])
        )[1]
    };
    return go(tree);
};
```