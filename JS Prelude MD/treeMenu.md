```javascript
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
```