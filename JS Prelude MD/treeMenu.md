```js
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
        )(Tuple(true)([]))[1];
    };
    return go(tree);
};
```