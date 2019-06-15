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
            tpl => !fst(tpl) || !isNull(snd(tpl)),
            tpl => either(
                x => Tuple(false, []),
                x => Tuple(true, x),
                bindLR(
                    showMenuLR(!blnMore, strTitle, menu),
                    ks => {
                        const k = ks[0];
                        return maybe(
                            Left(k + ': not found in ' +
                                JSON.stringify(ks)
                            ),
                            Right,
                            bindMay(
                                find(x => k === x.root, subs),
                                chosen => Just(
                                    isNull(chosen.nest) ? (
                                        ks // Choice made in leaf menu.
                                    ) : go(chosen)
                                )
                            )
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