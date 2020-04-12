```js
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
```