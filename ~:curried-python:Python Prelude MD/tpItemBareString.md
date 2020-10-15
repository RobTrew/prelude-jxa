```js
// tpItemBareString :: [String] -> String
const tpItemBareString = ks =>
    // Concatenated non-tag tokens of an item, with
    // any task bullet or project colon dropped. 
    0 < ks.length ? unwords(
        '-' === ks[0] ? (
            ks.slice(1)
        ) : (
            k => ks.slice(0, -1).concat(
                k.endsWith(':') ? (
                    k.slice(0, -1)
                ) : k
            )
        )(ks[ks.length - 1])
    ) : '';
```